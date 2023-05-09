# CustomFields

## Overview

_Note: Custom fields are a premium feature. Integrations which work with custom fields need to handle an assortment of use cases for free and premium users in context of free and premium organizations. For a detailed examination of which data users will have access in different circumstances, review the section below on access control._

In the Asana application, tasks, projects, and portfolios can hold user-specified [custom fields](https://asana.com/guide/help/premium/custom-fields) which provide extra information (e.g., a "priority" property with an associated value, or a number representing the time required to complete a task). This lets a user define the type of information that each item within a project or portfolio can contain in addition to the built-in fields that Asana provides.
`display_value` is a read-only field that will always be a string. For apps that use custom fields, this is a great way to safely display/export the value of a custom field, regardless of its type. We suggest apps use this field in order to future-proof for changes to custom fields.

#### Characteristics of custom fields

* There is metadata that defines the custom field. This metadata can be shared across an entire workspace, or be specific to a project or portfolio.
* Creating a custom field setting on a project or portfolio means each direct child will have the custom field. This is conceptually akin to adding columns in a database or a spreadsheet: every task (row) in the project (table) can contain information for that field, including "blank" values (i.e., `null` data). For portfolio custom fields, every project (row) in the portfolio (table) will contain information for the custom field.
* Custom field settings only go one child deep. This means that a custom field setting on a portfolio will give each project the custom field, but not each task within those projects.
* Tasks have custom field _values_ assigned to them.

#### Types of custom fields

Integrations using custom fields need to be aware of the six basic types that a custom field can adopt. These types are:

* `text` - an arbitrary, relatively short string of text
* `number` - a number with a defined level of precision
* `enum` - a selection of a single option from a defined list of options (i.e., mutually exclusive selections)
* `multi_enum` - a selection of one or more options from a defined list of options (i.e., mutually inclusive selections)
* `date` - a reference date with an optional time value
* `people` - a list of active contributors (i.e., where their relationship to the work is defined in the custom field title)

#### Example use case

Consider an organization that has defined a custom field for "Priority". This field is of `enum` type and can have user-defined values of `Low`, `Medium`, or `High`. This is the field metadata, and it is visible within, and shared across, the entire organization.

A project is then created in the organization, called "Bugs", and the "Priority" custom field is associated with that project. This will allow all tasks within the "Bugs" project to have an associated "Priority".

A new task is created within "Bugs". This task, then, has a field named "Priority" which can take on the custom field value of one of `[null]`, `Low`, `Medium`, and `High`.

#### Custom fields in the API

These custom fields are accessible via the API through a number of endpoints at the top level (e.g. `/custom_fields` and `/custom_field_settings`) and through requests on workspaces, portfolios, projects, and tasks resources. The API also provides a way to fetch both the metadata and data which define each particular custom field, so that a client application may render proper UI to display or edit the values.

Text fields are currently limited to 1024 characters. On tasks, their custom field value will have a `text_value` property to represent this field.

Number fields can have an arbitrary `precision` associated with them; for example, a precision of `2` would round its value to the second (hundredths) place (e.g., `1.2345` would round to `1.23`). On tasks, the custom field value will have a `number_value` property to represent this field.

#### Enum fields

Enum fields represent a selection from a list of options. On the metadata, they will contain all of the options in an array. Each option has 4 properties:

* `gid` - the GID of this enum option. Note that this is the GID of the individual _option_. The custom field itself has a separate `gid`.
* `name` - the name of the option (e.g., "Choice #1")
* `enabled` - whether this field is enabled. Disabled fields are not available to choose from when disabled, and are visually hidden in the Asana application, but they remain in the metadata for custom field values which were set to the option before the option was disabled.
* `color` - a color associated with this choice.

On the task's custom field value, the enum will have an `enum_value` property which will be the same as one of the choices from the list defined in the custom field metadata.

#### Querying an organization for its custom fields

For custom fields shared across the workspace or organization, the workspace [can be queried](/docs/get-a-workspaces-custom-fields) for its list of defined custom fields. Like other collection queries, the fields will be returned as a compact record; slightly different from most other compact records is the fact that the compact record for custom fields includes `type` as well as `gid` and `name`.

#### Accessing custom field definitions

The [custom fields](/docs/get-a-custom-field) reference describes how the metadata which defines a custom field is accessed. A GET request with a `gid` can be issued on the `/custom_fields` endpoint to fetch the full definition of a single custom field given its `gid` from (for instance) listing all custom fields on a workspace, or getting the `gid` from a custom field settings object or a task.

#### Associating custom fields with a project or portfolio

A mapping between a custom field and a project or portfolio is handled with a [custom field settings](/docs/asana-custom-field-settings) object. This object contains a reference for each of the custom fields and the project or portfolio, as well as additional information about the status of that particular custom field (e.g., `is_important`, which defines whether or not the custom field will appear in the list/grid on the Asana application).

#### Accessing custom field values on tasks or projects

The [tasks](/docs/get-a-task) reference has information on how custom fields look on tasks. custom fields will return as an array on the property `custom_fields`, and each entry will contain, side-by-side, the compact representation of the custom field metadata and a `{typename}_value` property that stores the value set for the custom field.

Of particular note is that the top-level `gid` of each entry in the `custom_fields` array is the `gid` of the custom field metadata, as it is the compact representation of this metadata. This can be used to refer to the full metadata by making a request to the `/custom_fields/{custom_fields_id}` endpoint as described above.

Custom fields can be set just as in the Asana-defined fields on a task via `POST` or `PUT` requests. You can see an example in the [update a task](/docs/update-a-task) endpoint.

Custom fields on projects follow this same pattern.

#### Warning: Program defensively with regards to custom field definitions

Asana application users have the ability to change the definitions of custom field metadata. This means that as you write scripts or applications to work with them, it is possible for the definitions to change at any time, which may cause an application using them to break or malfunction if it makes assumptions about the metadata for a particular custom field. When using custom fields, it is a good idea to program *defensively*, meaning you your application should double-check that the custom field metadata are what it expects.

Storing the state of the custom field metadata for too long if you dynamically create a model for it can cause your model to become out of sync with the model stored in Asana. For example, if you encounter an `enum` value on a task that does not match any option in your metadata model, your metadata model has become out of date with the custom field metadata.

#### Enabled and disabled values

When information that is contained in a custom field value loses a logical association with its metadata definition, the value becomes disabled. This can happen in a couple of simple ways, for example, if you remove the custom field metadata from a project, or move a task with a custom field to a different project which does not have the custom field metadata associated with it. The value remains on the task, and the custom field metadata can still be found and examined, but as the context in which the custom field makes sense is gone, the custom field cannot change its value; it can only be cleared.

_Note: Tasks that are associated with multiple projects do not become disabled, so long as at least one of the projects is still associated with the custom field metadata. In other words, tasks with multiple projects will retain logically associated to the set of custom field metadata represented by all of their projects._

Moving the task back under a project with that custom field applied to it or applying the custom field metadata to the current project will return the custom field value to an enabled state. In this scenario, the custom field will be re-enabled and editable again.

In the Asana application, disabled fields are grayed out and not allowed to change, other than to be discarded. In the API, we return a property `enabled: false` to inform the external application that the value has been disabled.

Note that the API enforces the same operations on disabled custom field values as hold in the Asana application: they may not have their values changed, since the lack of context for the values of a custom field in general doesn't provide enough information to know what new values should be. Setting the custom field value to `null` will clear and remove the custom field value from the task.

#### Custom field access control

Custom fields are a complex feature of the Asana platform, and their access in the Asana application and in the API vary based on the status of the user and project. When building your application, it is best to be defensive and not assume the given user will have read or write access to a custom field, and fail gracefully when this occurs.

### Available Operations

* [CreateCustomField](#createcustomfield) - Create a custom field
* [CreateEnumOptionForCustomField](#createenumoptionforcustomfield) - Create an enum option
* [DeleteCustomField](#deletecustomfield) - Delete a custom field
* [GetCustomField](#getcustomfield) - Get a custom field
* [GetCustomFieldsForWorkspace](#getcustomfieldsforworkspace) - Get a workspace's custom fields
* [InsertEnumOptionForCustomField](#insertenumoptionforcustomfield) - Reorder a custom field's enum
* [UpdateCustomField](#updatecustomfield) - Update a custom field
* [UpdateEnumOption](#updateenumoption) - Update an enum option

## CreateCustomField

Creates a new custom field in a workspace. Every custom field is required
to be created in a specific workspace, and this workspace cannot be
changed once set.

A custom field’s name must be unique within a workspace and not conflict
with names of existing task properties such as `Due Date` or `Assignee`.
A custom field’s type must be one of `text`, `enum`, `multi_enum`, `number`,
`date`, or `people`.

Returns the full record of the newly created custom field.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.CustomFields.CreateCustomField(ctx, operations.CreateCustomFieldRequest{
        RequestBody: &operations.CreateCustomFieldRequestBodyInput{
            Data: &shared.CustomFieldRequestInput{
                CurrencyCode: sdk.String("EUR"),
                CustomLabel: sdk.String("gold pieces"),
                CustomLabelPosition: shared.CustomFieldRequestCustomLabelPositionEnumSuffix.ToPointer(),
                DateValue: &shared.CustomFieldRequestDateValue{
                    Date: sdk.String("2024-08-23"),
                    DateTime: sdk.String("2024-08-23T22:00:00.000Z"),
                },
                Description: sdk.String("Development team priority"),
                Enabled: sdk.Bool(true),
                EnumOptions: []shared.EnumOptionInput{
                    shared.EnumOptionInput{
                        Color: sdk.String("blue"),
                        Enabled: sdk.Bool(true),
                        Name: sdk.String("Low"),
                    },
                },
                EnumValue: &shared.CustomFieldRequestEnumValueInput{
                    Color: sdk.String("blue"),
                    Enabled: sdk.Bool(true),
                    Name: sdk.String("Low"),
                },
                Format: shared.CustomFieldRequestFormatEnumCustom.ToPointer(),
                HasNotificationsEnabled: sdk.Bool(true),
                MultiEnumValues: []shared.EnumOptionInput{
                    shared.EnumOptionInput{
                        Color: sdk.String("blue"),
                        Enabled: sdk.Bool(true),
                        Name: sdk.String("Low"),
                    },
                    shared.EnumOptionInput{
                        Color: sdk.String("blue"),
                        Enabled: sdk.Bool(true),
                        Name: sdk.String("Low"),
                    },
                    shared.EnumOptionInput{
                        Color: sdk.String("blue"),
                        Enabled: sdk.Bool(true),
                        Name: sdk.String("Low"),
                    },
                },
                Name: sdk.String("Status"),
                NumberValue: sdk.Float64(5.2),
                PeopleValue: []string{
                    "culpa",
                },
                Precision: sdk.Int64(2),
                ResourceSubtype: shared.CustomFieldRequestResourceSubtypeEnumText.ToPointer(),
                TextValue: sdk.String("Some Value"),
                Workspace: "1331",
            },
        },
        Limit: sdk.Int64(161309),
        Offset: sdk.String("repellat"),
        OptFields: []string{
            "occaecati",
            "numquam",
            "commodi",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCustomField201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateEnumOptionForCustomField

Creates an enum option and adds it to this custom field’s list of enum options. A custom field can have at most 500 enum options (including disabled options). By default new enum options are inserted at the end of a custom field’s list.
Locked custom fields can only have enum options added by the user who locked the field.
Returns the full record of the newly created enum option.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.CustomFields.CreateEnumOptionForCustomField(ctx, operations.CreateEnumOptionForCustomFieldRequest{
        RequestBody: &operations.CreateEnumOptionForCustomFieldRequestBodyInput{
            Data: &shared.EnumOptionRequestInput{
                Color: sdk.String("blue"),
                Enabled: sdk.Bool(true),
                InsertAfter: sdk.String("12345"),
                InsertBefore: sdk.String("12345"),
                Name: sdk.String("Low"),
            },
        },
        CustomFieldGid: "quam",
        Limit: sdk.Int64(474697),
        Offset: sdk.String("velit"),
        OptFields: []string{
            "quia",
            "quis",
            "vitae",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEnumOptionForCustomField201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteCustomField

A specific, existing custom field can be deleted by making a DELETE request on the URL for that custom field.
Locked custom fields can only be deleted by the user who locked the field.
Returns an empty data record.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.CustomFields.DeleteCustomField(ctx, operations.DeleteCustomFieldRequest{
        CustomFieldGid: "laborum",
        OptFields: []string{
            "enim",
            "odit",
            "quo",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCustomField200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetCustomField

Get the complete definition of a custom field’s metadata.

Since custom fields can be defined for one of a number of types, and
these types have different data and behaviors, there are fields that are
relevant to a particular type. For instance, as noted above, enum_options
is only relevant for the enum type and defines the set of choices that
the enum could represent. The examples below show some of these
type-specific custom field definitions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.CustomFields.GetCustomField(ctx, operations.GetCustomFieldRequest{
        CustomFieldGid: "sequi",
        OptFields: []string{
            "ipsam",
            "id",
            "possimus",
            "aut",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCustomField200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetCustomFieldsForWorkspace

Returns a list of the compact representation of all of the custom fields in a workspace.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.CustomFields.GetCustomFieldsForWorkspace(ctx, operations.GetCustomFieldsForWorkspaceRequest{
        Limit: sdk.Int64(97101),
        Offset: sdk.String("error"),
        OptFields: []string{
            "laborum",
            "quasi",
            "reiciendis",
            "voluptatibus",
        },
        OptPretty: sdk.Bool(false),
        WorkspaceGid: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCustomFieldsForWorkspace200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## InsertEnumOptionForCustomField

Moves a particular enum option to be either before or after another specified enum option in the custom field.
Locked custom fields can only be reordered by the user who locked the field.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.CustomFields.InsertEnumOptionForCustomField(ctx, operations.InsertEnumOptionForCustomFieldRequest{
        RequestBody: &operations.InsertEnumOptionForCustomFieldRequestBody{
            Data: &shared.EnumOptionInsertRequest{
                AfterEnumOption: sdk.String("12345"),
                BeforeEnumOption: sdk.String("12345"),
                EnumOption: "97285",
            },
        },
        CustomFieldGid: "nihil",
        OptFields: []string{
            "voluptatibus",
            "ipsa",
            "omnis",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InsertEnumOptionForCustomField200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateCustomField

A specific, existing custom field can be updated by making a PUT request on the URL for that custom field. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged
When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the custom field.
A custom field’s `type` cannot be updated.
An enum custom field’s `enum_options` cannot be updated with this endpoint. Instead see “Work With Enum Options” for information on how to update `enum_options`.
Locked custom fields can only be updated by the user who locked the field.
Returns the complete updated custom field record.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.CustomFields.UpdateCustomField(ctx, operations.UpdateCustomFieldRequest{
        RequestBody: &operations.UpdateCustomFieldRequestBodyInput{
            Data: &shared.CustomFieldRequestInput{
                CurrencyCode: sdk.String("EUR"),
                CustomLabel: sdk.String("gold pieces"),
                CustomLabelPosition: shared.CustomFieldRequestCustomLabelPositionEnumSuffix.ToPointer(),
                DateValue: &shared.CustomFieldRequestDateValue{
                    Date: sdk.String("2024-08-23"),
                    DateTime: sdk.String("2024-08-23T22:00:00.000Z"),
                },
                Description: sdk.String("Development team priority"),
                Enabled: sdk.Bool(true),
                EnumOptions: []shared.EnumOptionInput{
                    shared.EnumOptionInput{
                        Color: sdk.String("blue"),
                        Enabled: sdk.Bool(true),
                        Name: sdk.String("Low"),
                    },
                    shared.EnumOptionInput{
                        Color: sdk.String("blue"),
                        Enabled: sdk.Bool(true),
                        Name: sdk.String("Low"),
                    },
                },
                EnumValue: &shared.CustomFieldRequestEnumValueInput{
                    Color: sdk.String("blue"),
                    Enabled: sdk.Bool(true),
                    Name: sdk.String("Low"),
                },
                Format: shared.CustomFieldRequestFormatEnumCustom.ToPointer(),
                HasNotificationsEnabled: sdk.Bool(true),
                MultiEnumValues: []shared.EnumOptionInput{
                    shared.EnumOptionInput{
                        Color: sdk.String("blue"),
                        Enabled: sdk.Bool(true),
                        Name: sdk.String("Low"),
                    },
                    shared.EnumOptionInput{
                        Color: sdk.String("blue"),
                        Enabled: sdk.Bool(true),
                        Name: sdk.String("Low"),
                    },
                    shared.EnumOptionInput{
                        Color: sdk.String("blue"),
                        Enabled: sdk.Bool(true),
                        Name: sdk.String("Low"),
                    },
                },
                Name: sdk.String("Status"),
                NumberValue: sdk.Float64(5.2),
                PeopleValue: []string{
                    "doloremque",
                },
                Precision: sdk.Int64(2),
                ResourceSubtype: shared.CustomFieldRequestResourceSubtypeEnumText.ToPointer(),
                TextValue: sdk.String("Some Value"),
                Workspace: "1331",
            },
        },
        CustomFieldGid: "reprehenderit",
        OptFields: []string{
            "maiores",
            "dicta",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCustomField200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateEnumOption

Updates an existing enum option. Enum custom fields require at least one enabled enum option.
Locked custom fields can only be updated by the user who locked the field.
Returns the full record of the updated enum option.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.CustomFields.UpdateEnumOption(ctx, operations.UpdateEnumOptionRequest{
        RequestBody: &operations.UpdateEnumOptionRequestBodyInput{
            Data: &shared.EnumOptionRequestInput{
                Color: sdk.String("blue"),
                Enabled: sdk.Bool(true),
                InsertAfter: sdk.String("12345"),
                InsertBefore: sdk.String("12345"),
                Name: sdk.String("Low"),
            },
        },
        EnumOptionGid: "corporis",
        OptFields: []string{
            "iusto",
            "dicta",
        },
        OptPretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEnumOption200ApplicationJSONObject != nil {
        // handle response
    }
}
```
