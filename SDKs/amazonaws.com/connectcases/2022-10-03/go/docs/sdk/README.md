# SDK

## Overview

With Amazon Connect Cases, your agents can track and manage customer issues that require multiple interactions, follow-up tasks, and teams in your contact center. A case represents a customer issue. It records the issue, the steps and interactions taken to resolve the issue, and the outcome. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cases.html">Amazon Connect Cases</a> in the <i>Amazon Connect Administrator Guide</i>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/cases/>
### Available Operations

* [BatchGetField](#batchgetfield) - Returns the description for the list of fields in the request parameters. 
* [BatchPutFieldOptions](#batchputfieldoptions) - Creates and updates a set of field options for a single select field in a Cases domain.
* [CreateCase](#createcase) - <p>Creates a case in the specified Cases domain. Case system and custom fields are taken as an array id/value pairs with a declared data types.</p> <note> <p>The following fields are required when creating a case:</p> <pre><code> &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;customer_id&lt;/code&gt; - You must provide the full customer profile ARN in this format: &lt;code&gt;arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;title&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/note&gt; </code></pre>
* [CreateDomain](#createdomain) - <p>Creates a domain, which is a container for all case data, such as cases, fields, templates and layouts. Each Amazon Connect instance can be associated with only one Cases domain.</p> <important> <p>This will not associate your connect instance to Cases domain. Instead, use the Amazon Connect <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateIntegrationAssociation.html">CreateIntegrationAssociation</a> API. You need specific IAM permissions to successfully associate the Cases domain. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/required-permissions-iam-cases.html#onboard-cases-iam">Onboard to Cases</a>.</p> </important>
* [CreateField](#createfield) - Creates a field in the Cases domain. This field is used to define the case object model (that is, defines what data can be captured on cases) in a Cases domain. 
* [CreateLayout](#createlayout) - <p>Creates a layout in the Cases domain. Layouts define the following configuration in the top section and More Info tab of the Cases user interface:</p> <ul> <li> <p>Fields to display to the users</p> </li> <li> <p>Field ordering</p> </li> </ul> <note> <p>Title and Status fields cannot be part of layouts since they are not configurable.</p> </note>
* [CreateRelatedItem](#createrelateditem) - <p>Creates a related item (comments, tasks, and contacts) and associates it with a case.</p> <note> <p>A Related Item is a resource that is associated with a case. It may or may not have an external identifier linking it to an external resource (for example, a <code>contactArn</code>). All Related Items have their own internal identifier, the <code>relatedItemArn</code>. Examples of related items include <code>comments</code> and <code>contacts</code>.</p> </note>
* [CreateTemplate](#createtemplate) - Creates a template in the Cases domain. This template is used to define the case object model (that is, to define what data can be captured on cases) in a Cases domain. A template must have a unique name within a domain, and it must reference existing field IDs and layout IDs. Additionally, multiple fields with same IDs are not allowed within the same Template. A template can be either Active or Inactive, as indicated by its status. Inactive templates cannot be used to create cases.
* [DeleteDomain](#deletedomain) - Deletes a domain.
* [GetCase](#getcase) - Returns information about a specific case if it exists. 
* [GetCaseEventConfiguration](#getcaseeventconfiguration) - Returns the case event publishing configuration.
* [GetDomain](#getdomain) - Returns information about a specific domain if it exists. 
* [GetLayout](#getlayout) - Returns the details for the requested layout.
* [GetTemplate](#gettemplate) - Returns the details for the requested template. 
* [ListCasesForContact](#listcasesforcontact) - Lists cases for a given contact.
* [ListDomains](#listdomains) - Lists all cases domains in the Amazon Web Services account. Each list item is a condensed summary object of the domain.
* [ListFieldOptions](#listfieldoptions) - Lists all of the field options for a field identifier in the domain. 
* [ListFields](#listfields) - Lists all fields in a Cases domain.
* [ListLayouts](#listlayouts) - Lists all layouts in the given cases domain. Each list item is a condensed summary object of the layout.
* [ListTagsForResource](#listtagsforresource) - Lists tags for a resource.
* [ListTemplates](#listtemplates) - Lists all of the templates in a Cases domain. Each list item is a condensed summary object of the template. 
* [PutCaseEventConfiguration](#putcaseeventconfiguration) - API for adding case event publishing configuration
* [SearchCases](#searchcases) - <p>Searches for cases within their associated Cases domain. Search results are returned as a paginated list of abridged case documents.</p> <note> <p>For <code>customer_id</code> you must provide the full customer profile ARN in this format: <code> arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID</code>. </p> </note>
* [SearchRelatedItems](#searchrelateditems) - <p>Searches for related items that are associated with a case.</p> <note> <p>If no filters are provided, this returns all related items associated with a case.</p> </note>
* [TagResource](#tagresource) - Adds tags to a resource.
* [UntagResource](#untagresource) - Untags a resource.
* [UpdateCase](#updatecase) - <p>Updates the values of fields on a case. Fields to be updated are received as an array of id/value pairs identical to the <code>CreateCase</code> input .</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p>
* [UpdateField](#updatefield) - Updates the properties of an existing field. 
* [UpdateLayout](#updatelayout) - <p>Updates the attributes of an existing layout.</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p> <p>A <code>ValidationException</code> is returned when you add non-existent <code>fieldIds</code> to a layout.</p> <note> <p>Title and Status fields cannot be part of layouts because they are not configurable.</p> </note>
* [UpdateTemplate](#updatetemplate) - Updates the attributes of an existing template. The template attributes that can be modified include <code>name</code>, <code>description</code>, <code>layoutConfiguration</code>, <code>requiredFields</code>, and <code>status</code>. At least one of these attributes must not be null. If a null value is provided for a given attribute, that attribute is ignored and its current value is preserved.

## BatchGetField

Returns the description for the list of fields in the request parameters. 

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchGetField(ctx, operations.BatchGetFieldRequest{
        RequestBody: operations.BatchGetFieldRequestBody{
            Fields: []shared.FieldIdentifier{
                shared.FieldIdentifier{
                    ID: "aff1a3a2-fa94-4677-b925-1aa52c3f5ad0",
                },
                shared.FieldIdentifier{
                    ID: "19da1ffe-78f0-497b-8074-f15471b5e6e1",
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        DomainID: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetFieldResponse != nil {
        // handle response
    }
}
```

## BatchPutFieldOptions

Creates and updates a set of field options for a single select field in a Cases domain.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchPutFieldOptions(ctx, operations.BatchPutFieldOptionsRequest{
        RequestBody: operations.BatchPutFieldOptionsRequestBody{
            Options: []shared.FieldOption{
                shared.FieldOption{
                    Active: false,
                    Name: "Dr. Casey Mayer",
                    Value: "enim",
                },
                shared.FieldOption{
                    Active: false,
                    Name: "Monique Spinka",
                    Value: "distinctio",
                },
                shared.FieldOption{
                    Active: false,
                    Name: "Francisco Gleason",
                    Value: "cupiditate",
                },
                shared.FieldOption{
                    Active: false,
                    Name: "Christopher Cummerata",
                    Value: "alias",
                },
            },
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("labore"),
        DomainID: "delectus",
        FieldID: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPutFieldOptionsResponse != nil {
        // handle response
    }
}
```

## CreateCase

<p>Creates a case in the specified Cases domain. Case system and custom fields are taken as an array id/value pairs with a declared data types.</p> <note> <p>The following fields are required when creating a case:</p> <pre><code> &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;customer_id&lt;/code&gt; - You must provide the full customer profile ARN in this format: &lt;code&gt;arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;code&gt;title&lt;/code&gt; &lt;/p&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/note&gt; </code></pre>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateCase(ctx, operations.CreateCaseRequest{
        RequestBody: operations.CreateCaseRequestBody{
            ClientToken: sdk.String("non"),
            Fields: []shared.FieldValue{
                shared.FieldValue{
                    ID: "969e9a3e-fa77-4dfb-94cd-66ae395efb9b",
                    Value: shared.FieldValueUnion{
                        BooleanValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(6596.69),
                        StringValue: sdk.String("blanditiis"),
                    },
                },
                shared.FieldValue{
                    ID: "8f3a6699-7074-4ba4-869b-6e2141959890",
                    Value: shared.FieldValueUnion{
                        BooleanValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(6532.01),
                        StringValue: sdk.String("reiciendis"),
                    },
                },
                shared.FieldValue{
                    ID: "a563e251-6fe4-4c8b-b11e-5b7fd2ed0289",
                    Value: shared.FieldValueUnion{
                        BooleanValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(1668.47),
                        StringValue: sdk.String("sunt"),
                    },
                },
                shared.FieldValue{
                    ID: "cddc6926-01fb-4576-b0d5-f0d30c5fbb25",
                    Value: shared.FieldValueUnion{
                        BooleanValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(5210.37),
                        StringValue: sdk.String("dignissimos"),
                    },
                },
            },
            TemplateID: "eaque",
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("nesciunt"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("quam"),
        DomainID: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCaseResponse != nil {
        // handle response
    }
}
```

## CreateDomain

<p>Creates a domain, which is a container for all case data, such as cases, fields, templates and layouts. Each Amazon Connect instance can be associated with only one Cases domain.</p> <important> <p>This will not associate your connect instance to Cases domain. Instead, use the Amazon Connect <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateIntegrationAssociation.html">CreateIntegrationAssociation</a> API. You need specific IAM permissions to successfully associate the Cases domain. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/required-permissions-iam-cases.html#onboard-cases-iam">Onboard to Cases</a>.</p> </important>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateDomain(ctx, operations.CreateDomainRequest{
        RequestBody: operations.CreateDomainRequestBody{
            Name: "Dean Welch",
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("perspiciatis"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDomainResponse != nil {
        // handle response
    }
}
```

## CreateField

Creates a field in the Cases domain. This field is used to define the case object model (that is, defines what data can be captured on cases) in a Cases domain. 

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateField(ctx, operations.CreateFieldRequest{
        RequestBody: operations.CreateFieldRequestBody{
            Description: sdk.String("eaque"),
            Name: "Jean Ferry",
            Type: operations.CreateFieldRequestBodyTypeEnumNumber,
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("libero"),
        DomainID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFieldResponse != nil {
        // handle response
    }
}
```

## CreateLayout

<p>Creates a layout in the Cases domain. Layouts define the following configuration in the top section and More Info tab of the Cases user interface:</p> <ul> <li> <p>Fields to display to the users</p> </li> <li> <p>Field ordering</p> </li> </ul> <note> <p>Title and Status fields cannot be part of layouts since they are not configurable.</p> </note>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateLayout(ctx, operations.CreateLayoutRequest{
        RequestBody: operations.CreateLayoutRequestBody{
            Content: operations.CreateLayoutRequestBodyContent{
                Basic: &shared.BasicLayout{
                    MoreInfo: &shared.LayoutSections{
                        Sections: []shared.Section{
                            shared.Section{
                                FieldGroup: &shared.FieldGroup{
                                    Fields: []shared.FieldItem{
                                        shared.FieldItem{
                                            ID: "633323f9-b77f-43a4-9006-74ebf69280d1",
                                        },
                                        shared.FieldItem{
                                            ID: "ba77a89e-bf73-47ae-8203-ce5e6a95d8a0",
                                        },
                                        shared.FieldItem{
                                            ID: "d446ce2a-f7a7-43cf-bbe4-53f870b326b5",
                                        },
                                    },
                                    Name: sdk.String("Darryl Emard"),
                                },
                            },
                            shared.Section{
                                FieldGroup: &shared.FieldGroup{
                                    Fields: []shared.FieldItem{
                                        shared.FieldItem{
                                            ID: "cdb1a842-2bb6-479d-a322-715bf0cbb1e3",
                                        },
                                        shared.FieldItem{
                                            ID: "1b8b90f3-443a-4110-8e0a-dcf4b921879f",
                                        },
                                        shared.FieldItem{
                                            ID: "ce953f73-ef7f-4bc7-abd7-4dd39c0f5d2c",
                                        },
                                    },
                                    Name: sdk.String("Domingo Kris"),
                                },
                            },
                        },
                    },
                    TopPanel: &shared.LayoutSections{
                        Sections: []shared.Section{
                            shared.Section{
                                FieldGroup: &shared.FieldGroup{
                                    Fields: []shared.FieldItem{
                                        shared.FieldItem{
                                            ID: "45626d43-6813-4f16-99f5-fce6c556146c",
                                        },
                                        shared.FieldItem{
                                            ID: "3e250fb0-08c4-42e1-81aa-c366c8dd6b14",
                                        },
                                        shared.FieldItem{
                                            ID: "42907474-778a-47bd-866d-28c10ab3cdca",
                                        },
                                    },
                                    Name: sdk.String("Ms. Ruby Hintz II"),
                                },
                            },
                        },
                    },
                },
            },
            Name: "Roberto Collier",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("inventore"),
        DomainID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLayoutResponse != nil {
        // handle response
    }
}
```

## CreateRelatedItem

<p>Creates a related item (comments, tasks, and contacts) and associates it with a case.</p> <note> <p>A Related Item is a resource that is associated with a case. It may or may not have an external identifier linking it to an external resource (for example, a <code>contactArn</code>). All Related Items have their own internal identifier, the <code>relatedItemArn</code>. Examples of related items include <code>comments</code> and <code>contacts</code>.</p> </note>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateRelatedItem(ctx, operations.CreateRelatedItemRequest{
        RequestBody: operations.CreateRelatedItemRequestBody{
            Content: operations.CreateRelatedItemRequestBodyContent{
                Comment: &shared.CommentContent{
                    Body: "totam",
                    ContentType: shared.CommentBodyTextTypeEnumTextPlain,
                },
                Contact: &shared.Contact{
                    ContactArn: "accusamus",
                },
            },
            Type: operations.CreateRelatedItemRequestBodyTypeEnumContact,
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        CaseID: "accusantium",
        DomainID: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRelatedItemResponse != nil {
        // handle response
    }
}
```

## CreateTemplate

Creates a template in the Cases domain. This template is used to define the case object model (that is, to define what data can be captured on cases) in a Cases domain. A template must have a unique name within a domain, and it must reference existing field IDs and layout IDs. Additionally, multiple fields with same IDs are not allowed within the same Template. A template can be either Active or Inactive, as indicated by its status. Inactive templates cannot be used to create cases.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateTemplate(ctx, operations.CreateTemplateRequest{
        RequestBody: operations.CreateTemplateRequestBody{
            Description: sdk.String("eum"),
            LayoutConfiguration: &operations.CreateTemplateRequestBodyLayoutConfiguration{
                DefaultLayout: sdk.String("quas"),
            },
            Name: "Eugene Leuschke",
            RequiredFields: []shared.RequiredField{
                shared.RequiredField{
                    FieldID: "incidunt",
                },
                shared.RequiredField{
                    FieldID: "atque",
                },
                shared.RequiredField{
                    FieldID: "explicabo",
                },
            },
            Status: operations.CreateTemplateRequestBodyStatusEnumActive.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("ratione"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("saepe"),
        DomainID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTemplateResponse != nil {
        // handle response
    }
}
```

## DeleteDomain

Deletes a domain.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDomain(ctx, operations.DeleteDomainRequest{
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("eveniet"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("esse"),
        DomainID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDomainResponse != nil {
        // handle response
    }
}
```

## GetCase

Returns information about a specific case if it exists. 

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCase(ctx, operations.GetCaseRequest{
        RequestBody: operations.GetCaseRequestBody{
            Fields: []shared.FieldIdentifier{
                shared.FieldIdentifier{
                    ID: "e61e6b7b-95bc-40ab-bc20-c4f3789fd871",
                },
                shared.FieldIdentifier{
                    ID: "f99dd2ef-d121-4aa6-b1e6-74bdb04f1575",
                },
                shared.FieldIdentifier{
                    ID: "6082d68e-a19f-41d1-b051-339d08086a18",
                },
            },
            NextToken: sdk.String("non"),
        },
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        CaseID: "aut",
        DomainID: "dignissimos",
        NextToken: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCaseResponse != nil {
        // handle response
    }
}
```

## GetCaseEventConfiguration

Returns the case event publishing configuration.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCaseEventConfiguration(ctx, operations.GetCaseEventConfigurationRequest{
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("aperiam"),
        DomainID: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCaseEventConfigurationResponse != nil {
        // handle response
    }
}
```

## GetDomain

Returns information about a specific domain if it exists. 

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDomain(ctx, operations.GetDomainRequest{
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("officia"),
        DomainID: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDomainResponse != nil {
        // handle response
    }
}
```

## GetLayout

Returns the details for the requested layout.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetLayout(ctx, operations.GetLayoutRequest{
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("ab"),
        DomainID: "adipisci",
        LayoutID: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLayoutResponse != nil {
        // handle response
    }
}
```

## GetTemplate

Returns the details for the requested template. 

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetTemplate(ctx, operations.GetTemplateRequest{
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("totam"),
        DomainID: "fugiat",
        TemplateID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTemplateResponse != nil {
        // handle response
    }
}
```

## ListCasesForContact

Lists cases for a given contact.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCasesForContact(ctx, operations.ListCasesForContactRequest{
        RequestBody: operations.ListCasesForContactRequestBody{
            ContactArn: "ducimus",
            MaxResults: sdk.Int64(554688),
            NextToken: sdk.String("vel"),
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("corporis"),
        DomainID: "reiciendis",
        MaxResults: sdk.String("assumenda"),
        NextToken: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCasesForContactResponse != nil {
        // handle response
    }
}
```

## ListDomains

Lists all cases domains in the Amazon Web Services account. Each list item is a condensed summary object of the domain.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDomains(ctx, operations.ListDomainsRequest{
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("exercitationem"),
        MaxResults: sdk.Int64(937285),
        NextToken: sdk.String("facere"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDomainsResponse != nil {
        // handle response
    }
}
```

## ListFieldOptions

Lists all of the field options for a field identifier in the domain. 

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListFieldOptions(ctx, operations.ListFieldOptionsRequest{
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        DomainID: "dolore",
        FieldID: "sunt",
        MaxResults: sdk.Int64(992012),
        NextToken: sdk.String("adipisci"),
        Values: []string{
            "amet",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFieldOptionsResponse != nil {
        // handle response
    }
}
```

## ListFields

Lists all fields in a Cases domain.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListFields(ctx, operations.ListFieldsRequest{
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("harum"),
        DomainID: "laboriosam",
        MaxResults: sdk.Int64(58356),
        NextToken: sdk.String("voluptates"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFieldsResponse != nil {
        // handle response
    }
}
```

## ListLayouts

Lists all layouts in the given cases domain. Each list item is a condensed summary object of the layout.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListLayouts(ctx, operations.ListLayoutsRequest{
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("vitae"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        DomainID: "voluptas",
        MaxResults: sdk.Int64(374296),
        NextToken: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLayoutsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists tags for a resource.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("in"),
        Arn: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTemplates

Lists all of the templates in a Cases domain. Each list item is a condensed summary object of the template. 

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTemplates(ctx, operations.ListTemplatesRequest{
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        DomainID: "quas",
        MaxResults: sdk.Int64(942584),
        NextToken: sdk.String("nesciunt"),
        Status: []shared.TemplateStatusEnum{
            shared.TemplateStatusEnumInactive,
            shared.TemplateStatusEnumInactive,
            shared.TemplateStatusEnumInactive,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTemplatesResponse != nil {
        // handle response
    }
}
```

## PutCaseEventConfiguration

API for adding case event publishing configuration

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutCaseEventConfiguration(ctx, operations.PutCaseEventConfigurationRequest{
        RequestBody: operations.PutCaseEventConfigurationRequestBody{
            EventBridge: operations.PutCaseEventConfigurationRequestBodyEventBridge{
                Enabled: sdk.Bool(false),
                IncludedData: &shared.EventIncludedData{
                    CaseData: &shared.CaseEventIncludedData{
                        Fields: []shared.FieldIdentifier{
                            shared.FieldIdentifier{
                                ID: "5c0b2f2f-b7b1-494a-a76b-26916fe1f08f",
                            },
                            shared.FieldIdentifier{
                                ID: "4294e369-8f44-47f6-83e8-b445e80ca55e",
                            },
                            shared.FieldIdentifier{
                                ID: "fd20e457-e185-48b6-a89f-be3a5aa8e482",
                            },
                            shared.FieldIdentifier{
                                ID: "4d0ab407-5088-4e51-8620-65e904f3b119",
                            },
                        },
                    },
                    RelatedItemData: &shared.RelatedItemEventIncludedData{
                        IncludeContent: false,
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        DomainID: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutCaseEventConfigurationResponse != nil {
        // handle response
    }
}
```

## SearchCases

<p>Searches for cases within their associated Cases domain. Search results are returned as a paginated list of abridged case documents.</p> <note> <p>For <code>customer_id</code> you must provide the full customer profile ARN in this format: <code> arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID</code>. </p> </note>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SearchCases(ctx, operations.SearchCasesRequest{
        RequestBody: operations.SearchCasesRequestBody{
            Fields: []shared.FieldIdentifier{
                shared.FieldIdentifier{
                    ID: "a79f9dfe-0ab7-4da8-a50c-e187f86bc173",
                },
            },
            Filter: &operations.SearchCasesRequestBodyFilter{
                AndAll: []shared.CaseFilter{
                    shared.CaseFilter{
                        AndAll: []shared.CaseFilter{
                            shared.CaseFilter{},
                            shared.CaseFilter{},
                        },
                        Field: &shared.FieldFilter{
                            Contains: &shared.FieldValue{
                                ID: "89eee952-6f8d-4986-a881-ead4f0e10125",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(3891.35),
                                    StringValue: sdk.String("velit"),
                                },
                            },
                            EqualTo: &shared.FieldValue{
                                ID: "f94e29e9-73e9-422a-97a1-5be3e060807e",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(1843.62),
                                    StringValue: sdk.String("cum"),
                                },
                            },
                            GreaterThan: &shared.FieldValue{
                                ID: "6e3ab884-5f05-497a-a0ff-2a54a31e9476",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(2840),
                                    StringValue: sdk.String("culpa"),
                                },
                            },
                            GreaterThanOrEqualTo: &shared.FieldValue{
                                ID: "3e865e79-56f9-4251-a5a9-da660ff57bfa",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(6720.41),
                                    StringValue: sdk.String("placeat"),
                                },
                            },
                            LessThan: &shared.FieldValue{
                                ID: "4f9efc1b-4512-4c10-b264-8dc2f615199e",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(7453.98),
                                    StringValue: sdk.String("hic"),
                                },
                            },
                            LessThanOrEqualTo: &shared.FieldValue{
                                ID: "d0e9fe6c-632c-4a3a-ad01-17996312fde0",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(2711.13),
                                    StringValue: sdk.String("nihil"),
                                },
                            },
                        },
                        Not: &shared.CaseFilter{},
                    },
                    shared.CaseFilter{
                        AndAll: []shared.CaseFilter{
                            shared.CaseFilter{},
                            shared.CaseFilter{},
                        },
                        Field: &shared.FieldFilter{
                            Contains: &shared.FieldValue{
                                ID: "1778ff61-d017-4476-b60a-15db6a660659",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(6616.07),
                                    StringValue: sdk.String("ab"),
                                },
                            },
                            EqualTo: &shared.FieldValue{
                                ID: "adeaab58-51d6-4c64-9b08-b61891baa0fe",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(1032.98),
                                    StringValue: sdk.String("fuga"),
                                },
                            },
                            GreaterThan: &shared.FieldValue{
                                ID: "de008e6f-8c5f-4350-98cd-b5a341814301",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(249.44),
                                    StringValue: sdk.String("modi"),
                                },
                            },
                            GreaterThanOrEqualTo: &shared.FieldValue{
                                ID: "21813d52-08ec-4e7e-a53b-668451c6c6e2",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(289.52),
                                    StringValue: sdk.String("exercitationem"),
                                },
                            },
                            LessThan: &shared.FieldValue{
                                ID: "e16deab3-fec9-4578-a645-84273a8418d1",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(3955.44),
                                    StringValue: sdk.String("consequuntur"),
                                },
                            },
                            LessThanOrEqualTo: &shared.FieldValue{
                                ID: "309fb092-9921-4aef-b9f5-8c4d86e68e4b",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(8773.99),
                                    StringValue: sdk.String("voluptatem"),
                                },
                            },
                        },
                        Not: &shared.CaseFilter{},
                    },
                    shared.CaseFilter{
                        AndAll: []shared.CaseFilter{
                            shared.CaseFilter{},
                            shared.CaseFilter{},
                        },
                        Field: &shared.FieldFilter{
                            Contains: &shared.FieldValue{
                                ID: "6013f59d-a757-4a59-acfe-f66ef1caa338",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(2164.57),
                                    StringValue: sdk.String("impedit"),
                                },
                            },
                            EqualTo: &shared.FieldValue{
                                ID: "2beb4773-73c8-4d72-b64d-1db1f2c43106",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(4069.22),
                                    StringValue: sdk.String("beatae"),
                                },
                            },
                            GreaterThan: &shared.FieldValue{
                                ID: "e96349e1-cf9e-406e-ba43-7000ae6b6bc9",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(7090.36),
                                    StringValue: sdk.String("deleniti"),
                                },
                            },
                            GreaterThanOrEqualTo: &shared.FieldValue{
                                ID: "f759eac5-5a97-441d-b113-52965bb8a720",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(1680.42),
                                    StringValue: sdk.String("vel"),
                                },
                            },
                            LessThan: &shared.FieldValue{
                                ID: "11435e13-9dbc-4225-9b1a-bda8c070e108",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(2928.88),
                                    StringValue: sdk.String("eligendi"),
                                },
                            },
                            LessThanOrEqualTo: &shared.FieldValue{
                                ID: "b0672d1a-d879-4eeb-9665-b85efbd02bae",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(340.7),
                                    StringValue: sdk.String("expedita"),
                                },
                            },
                        },
                        Not: &shared.CaseFilter{},
                    },
                    shared.CaseFilter{
                        AndAll: []shared.CaseFilter{
                            shared.CaseFilter{},
                            shared.CaseFilter{},
                            shared.CaseFilter{},
                            shared.CaseFilter{},
                        },
                        Field: &shared.FieldFilter{
                            Contains: &shared.FieldValue{
                                ID: "2d782259-e3ea-44b5-997f-92443da7ce52",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(7088.98),
                                    StringValue: sdk.String("voluptatum"),
                                },
                            },
                            EqualTo: &shared.FieldValue{
                                ID: "95c537c6-454e-4fb0-b348-96c3ca5acfbe",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(1415.06),
                                    StringValue: sdk.String("repellat"),
                                },
                            },
                            GreaterThan: &shared.FieldValue{
                                ID: "d5707577-9291-477d-aac6-46ecb573409e",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(1949.01),
                                    StringValue: sdk.String("repudiandae"),
                                },
                            },
                            GreaterThanOrEqualTo: &shared.FieldValue{
                                ID: "b1e5a2b1-2eb0-47f1-96db-99545fc95fa8",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(5173.26),
                                    StringValue: sdk.String("molestias"),
                                },
                            },
                            LessThan: &shared.FieldValue{
                                ID: "70e189db-b30f-4cb3-bea0-55b197cd44e2",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(9930.02),
                                    StringValue: sdk.String("veniam"),
                                },
                            },
                            LessThanOrEqualTo: &shared.FieldValue{
                                ID: "2d82d351-3bb6-4f48-b656-bcdb35ff2e4b",
                                Value: shared.FieldValueUnion{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(1797.95),
                                    StringValue: sdk.String("reprehenderit"),
                                },
                            },
                        },
                        Not: &shared.CaseFilter{},
                    },
                },
                Field: &shared.FieldFilter{
                    Contains: &shared.FieldValue{
                        ID: "537a8cd9-e731-49c1-b7d5-25f77b114eeb",
                        Value: shared.FieldValueUnion{
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(3340.18),
                            StringValue: sdk.String("eos"),
                        },
                    },
                    EqualTo: &shared.FieldValue{
                        ID: "ff785fc3-7814-4d4c-98e0-c2bb89eb75da",
                        Value: shared.FieldValueUnion{
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(8339.82),
                            StringValue: sdk.String("iure"),
                        },
                    },
                    GreaterThan: &shared.FieldValue{
                        ID: "36c60050-3d8b-4b31-980f-739ae9e057eb",
                        Value: shared.FieldValueUnion{
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(5457.79),
                            StringValue: sdk.String("aperiam"),
                        },
                    },
                    GreaterThanOrEqualTo: &shared.FieldValue{
                        ID: "9e281033-1f39-481d-8c70-0b607f3c93c7",
                        Value: shared.FieldValueUnion{
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(2358.34),
                            StringValue: sdk.String("soluta"),
                        },
                    },
                    LessThan: &shared.FieldValue{
                        ID: "9da3f2ce-da7e-423f-a257-411faf4b7544",
                        Value: shared.FieldValueUnion{
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(9211.93),
                            StringValue: sdk.String("modi"),
                        },
                    },
                    LessThanOrEqualTo: &shared.FieldValue{
                        ID: "72e80285-7a5b-4404-a3a7-d575f1400e76",
                        Value: shared.FieldValueUnion{
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(2561.14),
                            StringValue: sdk.String("dolorum"),
                        },
                    },
                },
                Not: &shared.CaseFilter{
                    AndAll: []shared.CaseFilter{
                        shared.CaseFilter{},
                        shared.CaseFilter{},
                        shared.CaseFilter{},
                        shared.CaseFilter{},
                    },
                    Field: &shared.FieldFilter{
                        Contains: &shared.FieldValue{
                            ID: "7334ec1b-781b-436a-8808-8d100efada20",
                            Value: shared.FieldValueUnion{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(6.64),
                                StringValue: sdk.String("eveniet"),
                            },
                        },
                        EqualTo: &shared.FieldValue{
                            ID: "f0422eb2-164c-4f9a-b836-6c723ffda9e0",
                            Value: shared.FieldValueUnion{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(3929.67),
                                StringValue: sdk.String("rerum"),
                            },
                        },
                        GreaterThan: &shared.FieldValue{
                            ID: "ee4825c1-fc0e-4115-880b-ff918544ec42",
                            Value: shared.FieldValueUnion{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(8281.47),
                                StringValue: sdk.String("vero"),
                            },
                        },
                        GreaterThanOrEqualTo: &shared.FieldValue{
                            ID: "fcce8f19-7777-43e6-b562-a7b408f05e3d",
                            Value: shared.FieldValueUnion{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(3071.73),
                                StringValue: sdk.String("quos"),
                            },
                        },
                        LessThan: &shared.FieldValue{
                            ID: "fdaf313a-1f5f-4d94-a59c-0b36f25ea944",
                            Value: shared.FieldValueUnion{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(9478.22),
                                StringValue: sdk.String("adipisci"),
                            },
                        },
                        LessThanOrEqualTo: &shared.FieldValue{
                            ID: "b756c11f-6c37-4a51-a624-3835bbc05a23",
                            Value: shared.FieldValueUnion{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(6447.34),
                                StringValue: sdk.String("modi"),
                            },
                        },
                    },
                    Not: &shared.CaseFilter{},
                },
            },
            MaxResults: sdk.Int64(332831),
            NextToken: sdk.String("quod"),
            SearchTerm: sdk.String("itaque"),
            Sorts: []shared.Sort{
                shared.Sort{
                    FieldID: "quisquam",
                    SortOrder: shared.OrderEnumAsc,
                },
                shared.Sort{
                    FieldID: "doloribus",
                    SortOrder: shared.OrderEnumDesc,
                },
                shared.Sort{
                    FieldID: "officiis",
                    SortOrder: shared.OrderEnumAsc,
                },
                shared.Sort{
                    FieldID: "alias",
                    SortOrder: shared.OrderEnumDesc,
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("quia"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("perspiciatis"),
        DomainID: "debitis",
        MaxResults: sdk.String("ullam"),
        NextToken: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchCasesResponse != nil {
        // handle response
    }
}
```

## SearchRelatedItems

<p>Searches for related items that are associated with a case.</p> <note> <p>If no filters are provided, this returns all related items associated with a case.</p> </note>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SearchRelatedItems(ctx, operations.SearchRelatedItemsRequest{
        RequestBody: operations.SearchRelatedItemsRequestBody{
            Filters: []shared.RelatedItemTypeFilter{
                shared.RelatedItemTypeFilter{
                    Comment: map[string]interface{}{
                        "veritatis": "provident",
                    },
                    Contact: &shared.ContactFilter{
                        Channel: []string{
                            "iure",
                            "quibusdam",
                            "quod",
                            "nemo",
                        },
                        ContactArn: sdk.String("recusandae"),
                    },
                },
            },
            MaxResults: sdk.Int64(246772),
            NextToken: sdk.String("magnam"),
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("cum"),
        CaseID: "doloribus",
        DomainID: "facilis",
        MaxResults: sdk.String("quidem"),
        NextToken: sdk.String("itaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchRelatedItemsResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds tags to a resource.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "unde": "modi",
                "perspiciatis": "hic",
            },
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("quod"),
        Arn: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UntagResource

Untags a resource.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("autem"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("illum"),
        Arn: "facilis",
        TagKeys: []string{
            "mollitia",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCase

<p>Updates the values of fields on a case. Fields to be updated are received as an array of id/value pairs identical to the <code>CreateCase</code> input .</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateCase(ctx, operations.UpdateCaseRequest{
        RequestBody: operations.UpdateCaseRequestBody{
            Fields: []shared.FieldValue{
                shared.FieldValue{
                    ID: "ebd5daea-4c50-46a8-aa94-c02644cf5e9d",
                    Value: shared.FieldValueUnion{
                        BooleanValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(6213.93),
                        StringValue: sdk.String("mollitia"),
                    },
                },
                shared.FieldValue{
                    ID: "4578adc1-ac60-40de-8001-ac802e2ec09f",
                    Value: shared.FieldValueUnion{
                        BooleanValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(9830),
                        StringValue: sdk.String("laudantium"),
                    },
                },
                shared.FieldValue{
                    ID: "f0f816ff-3477-4c13-a902-c14125b0960a",
                    Value: shared.FieldValueUnion{
                        BooleanValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(3881.69),
                        StringValue: sdk.String("ex"),
                    },
                },
                shared.FieldValue{
                    ID: "8151a472-af92-43c5-949f-83f350cf876f",
                    Value: shared.FieldValueUnion{
                        BooleanValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(9554.66),
                        StringValue: sdk.String("nobis"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("perspiciatis"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("porro"),
        CaseID: "tempore",
        DomainID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCaseResponse != nil {
        // handle response
    }
}
```

## UpdateField

Updates the properties of an existing field. 

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateField(ctx, operations.UpdateFieldRequest{
        RequestBody: operations.UpdateFieldRequestBody{
            Description: sdk.String("modi"),
            Name: sdk.String("Billy Gerlach"),
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("animi"),
        DomainID: "maiores",
        FieldID: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFieldResponse != nil {
        // handle response
    }
}
```

## UpdateLayout

<p>Updates the attributes of an existing layout.</p> <p>If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.</p> <p>A <code>ValidationException</code> is returned when you add non-existent <code>fieldIds</code> to a layout.</p> <note> <p>Title and Status fields cannot be part of layouts because they are not configurable.</p> </note>

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateLayout(ctx, operations.UpdateLayoutRequest{
        RequestBody: operations.UpdateLayoutRequestBody{
            Content: &operations.UpdateLayoutRequestBodyContent{
                Basic: &shared.BasicLayout{
                    MoreInfo: &shared.LayoutSections{
                        Sections: []shared.Section{
                            shared.Section{
                                FieldGroup: &shared.FieldGroup{
                                    Fields: []shared.FieldItem{
                                        shared.FieldItem{
                                            ID: "53e5ae6e-0ac1-484c-ab9c-247c88373a40",
                                        },
                                        shared.FieldItem{
                                            ID: "e1942f32-e550-4557-96f5-d56d0bd0af2d",
                                        },
                                        shared.FieldItem{
                                            ID: "fe13db4f-62cb-4a3f-8941-aebc0b80a692",
                                        },
                                    },
                                    Name: sdk.String("Marcella Ernser"),
                                },
                            },
                            shared.Section{
                                FieldGroup: &shared.FieldGroup{
                                    Fields: []shared.FieldItem{
                                        shared.FieldItem{
                                            ID: "cfcc8f89-5010-4f5d-93d6-fa1804e54c82",
                                        },
                                        shared.FieldItem{
                                            ID: "f168a363-c887-43e4-8438-0b1f6b8ca275",
                                        },
                                        shared.FieldItem{
                                            ID: "a60a04c4-95cc-4699-971b-51c1bdb1cf4b",
                                        },
                                        shared.FieldItem{
                                            ID: "888ebdfc-4ccc-4a99-bc7f-c0b2dce10873",
                                        },
                                    },
                                    Name: sdk.String("Troy Dach Jr."),
                                },
                            },
                            shared.Section{
                                FieldGroup: &shared.FieldGroup{
                                    Fields: []shared.FieldItem{
                                        shared.FieldItem{
                                            ID: "d678878b-a858-41a5-8208-c54fefa9c95f",
                                        },
                                        shared.FieldItem{
                                            ID: "2eac5565-d307-4cfe-a812-06e2813fa4a4",
                                        },
                                    },
                                    Name: sdk.String("Leticia Gerlach PhD"),
                                },
                            },
                            shared.Section{
                                FieldGroup: &shared.FieldGroup{
                                    Fields: []shared.FieldItem{
                                        shared.FieldItem{
                                            ID: "f2132af0-3102-4d51-8f4c-c6f18bf9621a",
                                        },
                                    },
                                    Name: sdk.String("Lynda Gulgowski"),
                                },
                            },
                        },
                    },
                    TopPanel: &shared.LayoutSections{
                        Sections: []shared.Section{
                            shared.Section{
                                FieldGroup: &shared.FieldGroup{
                                    Fields: []shared.FieldItem{
                                        shared.FieldItem{
                                            ID: "87ee3e4b-e752-4c65-b344-18e3bb91c8d9",
                                        },
                                        shared.FieldItem{
                                            ID: "75e0e841-9d8f-484f-944f-3e07edcc4aa5",
                                        },
                                        shared.FieldItem{
                                            ID: "f3cabd90-5a97-42e0-9672-8227b2d30947",
                                        },
                                    },
                                    Name: sdk.String("Beulah Will"),
                                },
                            },
                            shared.Section{
                                FieldGroup: &shared.FieldGroup{
                                    Fields: []shared.FieldItem{
                                        shared.FieldItem{
                                            ID: "fa87cf53-5a6f-4ae5-8ebf-60c321f023b7",
                                        },
                                        shared.FieldItem{
                                            ID: "5d2367fe-1a0c-4c8d-b79f-0a396d90c364",
                                        },
                                    },
                                    Name: sdk.String("Mrs. Arnold Schamberger"),
                                },
                            },
                        },
                    },
                },
            },
            Name: sdk.String("Kelvin O'Conner"),
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("tempora"),
        DomainID: "eveniet",
        LayoutID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLayoutResponse != nil {
        // handle response
    }
}
```

## UpdateTemplate

Updates the attributes of an existing template. The template attributes that can be modified include <code>name</code>, <code>description</code>, <code>layoutConfiguration</code>, <code>requiredFields</code>, and <code>status</code>. At least one of these attributes must not be null. If a null value is provided for a given attribute, that attribute is ignored and its current value is preserved.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateTemplate(ctx, operations.UpdateTemplateRequest{
        RequestBody: operations.UpdateTemplateRequestBody{
            Description: sdk.String("sed"),
            LayoutConfiguration: &operations.UpdateTemplateRequestBodyLayoutConfiguration{
                DefaultLayout: sdk.String("impedit"),
            },
            Name: sdk.String("Edmund Keebler"),
            RequiredFields: []shared.RequiredField{
                shared.RequiredField{
                    FieldID: "beatae",
                },
                shared.RequiredField{
                    FieldID: "veritatis",
                },
            },
            Status: operations.UpdateTemplateRequestBodyStatusEnumInactive.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("illo"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("minus"),
        DomainID: "distinctio",
        TemplateID: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTemplateResponse != nil {
        // handle response
    }
}
```
