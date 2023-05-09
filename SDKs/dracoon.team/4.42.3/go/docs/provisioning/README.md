# Provisioning

## Overview

Provisioning

### Available Operations

* [CreateCustomer](#createcustomer) - Create customer
* [CreateTenantWebhook](#createtenantwebhook) - Create tenant webhook
* [RemoveCustomer](#removecustomer) - Remove customer
* [RemoveCustomerAttribute](#removecustomerattribute) - Remove customer attribute
* [RemoveTenantWebhook](#removetenantwebhook) - Remove tenant webhook
* [RequestCustomer](#requestcustomer) - Get customer
* [RequestCustomerAttributes](#requestcustomerattributes) - Request customer attributes
* [RequestCustomerUsers](#requestcustomerusers) - Request list of customer users
* [RequestCustomers](#requestcustomers) - Request list of customers
* [RequestListOfEventTypesForTenant](#requestlistofeventtypesfortenant) - Request list of event types
* [RequestListOfTenantWebhooks](#requestlistoftenantwebhooks) - Request list of tenant webhooks
* [RequestTenantWebhook](#requesttenantwebhook) - Request tenant webhook
* [ResetTenantWebhookLifetime](#resettenantwebhooklifetime) - Reset tenant webhook lifetime
* [~~SetCustomerAttributes~~](#setcustomerattributes) - Set customer attributes :warning: **Deprecated**
* [UpdateCustomer](#updatecustomer) - Update customer
* [UpdateCustomerAttributes](#updatecustomerattributes) - Add or edit customer attributes
* [UpdateTenantWebhook](#updatetenantwebhook) - Update tenant webhook

## CreateCustomer

### Description:
Create a new customer.

### Precondition:
Authentication with `X-Sds-Service-Token` required.  

### Postcondition:
A new customer is created.

### Further Information:
If no company name is set, first letter of the first name separated by dot followed by last name of the first administrator is used (e.g. `J.Doe`).  
Max quota has to be at least `1 MB` (= `1.048.576 B`).

If `basic` authentication is enabled, the first administrator will get `basic` authentication by default.  
To create a first administrator without `basic` authentication it **MUST** be disabled explicitly.  

Forbidden characters in passwords: [`&`, `'`, `<`, `>`]

### Authentication Method Options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Authentication Method | Option Key | Option Value |
| :--- | :--- | :--- |
| `basic` / `sql` | `username` | Unique user identifier |
| `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
|  | `username` | Active Directory username according to authentication setting `userFilter` |
| `radius` | `username` | RADIUS username |
| `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
|  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |

</details>


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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Provisioning.CreateCustomer(ctx, operations.CreateCustomerRequest{
        NewCustomerRequest: shared.NewCustomerRequest{
            ActivationCode: sdk.String("a"),
            CompanyName: sdk.String("error"),
            CustomerAttributes: &shared.CustomerAttributes{
                Items: []shared.KeyValueEntry{
                    shared.KeyValueEntry{
                        Key: "pariatur",
                        Value: "possimus",
                    },
                    shared.KeyValueEntry{
                        Key: "quia",
                        Value: "eveniet",
                    },
                    shared.KeyValueEntry{
                        Key: "asperiores",
                        Value: "facere",
                    },
                },
            },
            CustomerContractType: shared.NewCustomerRequestCustomerContractTypeEnumDemo,
            FirstAdminUser: shared.FirstAdminUser{
                AuthData: &shared.UserAuthData{
                    AdConfigID: sdk.Int(159414),
                    Login: sdk.String("quasi"),
                    Method: "similique",
                    MustChangePassword: sdk.Bool(false),
                    OidConfigID: sdk.Int(633608),
                    Password: sdk.String("aliquid"),
                },
                AuthMethods: []shared.UserAuthMethod{
                    shared.UserAuthMethod{
                        AuthID: "quae",
                        IsEnabled: false,
                        Options: []shared.KeyValueEntry{
                            shared.KeyValueEntry{
                                Key: "vel",
                                Value: "in",
                            },
                            shared.KeyValueEntry{
                                Key: "eius",
                                Value: "libero",
                            },
                            shared.KeyValueEntry{
                                Key: "illum",
                                Value: "soluta",
                            },
                            shared.KeyValueEntry{
                                Key: "accusantium",
                                Value: "aliquam",
                            },
                        },
                    },
                    shared.UserAuthMethod{
                        AuthID: "sapiente",
                        IsEnabled: false,
                        Options: []shared.KeyValueEntry{
                            shared.KeyValueEntry{
                                Key: "ullam",
                                Value: "reprehenderit",
                            },
                        },
                    },
                    shared.UserAuthMethod{
                        AuthID: "ullam",
                        IsEnabled: false,
                        Options: []shared.KeyValueEntry{
                            shared.KeyValueEntry{
                                Key: "aut",
                                Value: "voluptatum",
                            },
                            shared.KeyValueEntry{
                                Key: "qui",
                                Value: "quibusdam",
                            },
                        },
                    },
                    shared.UserAuthMethod{
                        AuthID: "ex",
                        IsEnabled: false,
                        Options: []shared.KeyValueEntry{
                            shared.KeyValueEntry{
                                Key: "itaque",
                                Value: "dolorum",
                            },
                            shared.KeyValueEntry{
                                Key: "architecto",
                                Value: "omnis",
                            },
                            shared.KeyValueEntry{
                                Key: "tenetur",
                                Value: "quasi",
                            },
                        },
                    },
                },
                Email: sdk.String("Audreanne32@hotmail.com"),
                FirstName: "Asha",
                Gender: sdk.String("female"),
                Language: sdk.String("adipisci"),
                LastName: "Morar",
                Login: sdk.String("temporibus"),
                NeedsToChangePassword: sdk.Bool(false),
                NeedsToChangeUserName: sdk.Bool(false),
                NotifyUser: sdk.Bool(false),
                Password: sdk.String("accusantium"),
                Phone: sdk.String("254-705-2025 x2713"),
                ReceiverLanguage: sdk.String("aut"),
                Title: sdk.String("Ms."),
                UserName: sdk.String("Bettie.Wunsch"),
            },
            IsLocked: sdk.Bool(false),
            LockStatus: sdk.Bool(false),
            ProviderCustomerID: sdk.String("voluptatibus"),
            QuotaMax: 374323,
            TrialDays: sdk.Int(990345),
            UserMax: 45659,
            WebhooksMax: sdk.Int64(409054),
        },
        XSdsDateFormat: operations.CreateCustomerXSdsDateFormatEnumLocal.ToPointer(),
        XSdsServiceToken: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NewCustomerResponse != nil {
        // handle response
    }
}
```

## CreateTenantWebhook

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Create a new webhook for the tenant scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.

### Postcondition:
Webhook is created for given event types.

### Further Information:
URL must begin with the `HTTPS` scheme.
Webhook names are limited to 150 characters.

### Available event types:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Name | Description | Scope |
| :--- | :--- | :--- |
| **`customer.created`** | Triggered when a new customer is created | Tenant Webhook |
| **`customer.deleted`** | Triggered when a user is deleted | Tenant Webhook |
| **`webhook.expiring`** | Triggered 30/20/10/1 days before a webhook expires |  Tenant Webhook |

</details>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Provisioning.CreateTenantWebhook(ctx, operations.CreateTenantWebhookRequest{
        CreateWebhookRequest: shared.CreateWebhookRequest{
            EventTypeNames: []string{
                "officia",
                "maxime",
                "dignissimos",
                "officia",
            },
            IsEnabled: sdk.Bool(false),
            Name: "Vernon Bergnaum",
            Secret: sdk.String("quod"),
            TriggerExampleEvent: sdk.Bool(false),
            URL: "labore",
        },
        XSdsDateFormat: operations.CreateTenantWebhookXSdsDateFormatEnumUtc.ToPointer(),
        XSdsServiceToken: sdk.String("adipisci"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## RemoveCustomer

### Description:
Delete a customer.

### Precondition:
Authentication with `X-Sds-Service-Token` required.

### Postcondition:
Customer is deleted.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Provisioning.RemoveCustomer(ctx, operations.RemoveCustomerRequest{
        XSdsServiceToken: sdk.String("fuga"),
        CustomerID: 662505,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveCustomerAttribute

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.4.0</h3>

### Description:
Delete a custom customer attribute.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> required.

### Postcondition:
Custom customer attribute gets deleted.

### Further Information:
* Allowed characters for keys are: `[a-zA-Z0-9_-]`  
* Characters are **case-insensitive**.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Provisioning.RemoveCustomerAttribute(ctx, operations.RemoveCustomerAttributeRequest{
        XSdsServiceToken: sdk.String("suscipit"),
        CustomerID: 246063,
        Key: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveTenantWebhook

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Delete a webhook for the tenant scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.

### Postcondition:
Webhook is deleted.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Provisioning.RemoveTenantWebhook(ctx, operations.RemoveTenantWebhookRequest{
        XSdsServiceToken: sdk.String("est"),
        WebhookID: 926880,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RequestCustomer

### Description:  
Receive details of a selected customer.

### Precondition:
Authentication with `X-Sds-Service-Token` required.

### Postcondition:
Customer details are returned.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Provisioning.RequestCustomer(ctx, operations.RequestCustomerRequest{
        XSdsDateFormat: operations.RequestCustomerXSdsDateFormatEnumOffset.ToPointer(),
        XSdsServiceToken: sdk.String("fugiat"),
        CustomerID: 424089,
        IncludeAttributes: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Customer != nil {
        // handle response
    }
}
```

## RequestCustomerAttributes

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.4.0</h3>

### Description:  
Retrieve a list of customer attributes.

### Precondition:
Authentication with `X-Sds-Service-Token` required.  
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read all customers</span> required.

### Postcondition:
List of attributes is returned.

### Further Information:

### Filtering:
Filters are case insensitive.  
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`key:cn:searchString_1|value:cn:searchString_2`  
Filter by attribute key contains `searchString_1` **AND** attribute value contains `searchString_2`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `key` | Customer attribute key filter | `cn, eq, sw` | Attribute key contains / equals / starts with value. | `search String` |
| `value` | Customer attribute value filter | `cn, eq, sw` | Attribute value contains / equals / starts with value. | `search String` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`key:asc|value:desc`  
Sort by `key` ascending **AND** by `value` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `key` | Customer attribute key |
| `value` | Customer attribute value |

</details>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Provisioning.RequestCustomerAttributes(ctx, operations.RequestCustomerAttributesRequest{
        XSdsServiceToken: sdk.String("ducimus"),
        CustomerID: 554688,
        Filter: sdk.String("vel"),
        Limit: sdk.Int(287051),
        Offset: sdk.Int(822560),
        Sort: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AttributesResponse != nil {
        // handle response
    }
}
```

## RequestCustomerUsers

### Description:  
Receive a list of users associated with a certain customer.

### Precondition:
Authentication with `X-Sds-Service-Token` required.

### Postcondition:
List of customer users is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Except for `login`, `firstName` and  `lastName` - these are connected via logical disjunction (**OR**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`login:cn:searchString_1|firstName:cn:searchString_2|lockStatus:eq:2`  
Filter users by login contains `searchString_1` **OR** firstName contains `searchString_2` **AND** those who are **NOT** locked.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `email` | Email filter | `eq`, `cn` | Email contains value. | `search String` |
| `userName` | User name filter | `eq`, `cn` | UserName contains value. | `search String` |
| `firstName` | User first name filter | `cn` | User first name contains value. | `search String` |
| `lastName` | User last name filter | `cn` | User last name contains value. | `search String` |
| `isLocked` | User lock status filter | `eq` |  | `true or false` |
| `effectiveRoles` | Filter users with DIRECT or DIRECT **AND** EFFECTIVE roles<ul><li>`false`: DIRECT roles</li><li>`true`: DIRECT **AND** EFFECTIVE roles</li></ul>DIRECT means: e.g. user gets role **directly** granted from someone with _grant permission_ right.<br>EFFECTIVE means: e.g. user gets role through **group membership**. | `eq` |  | `true or false`<br>default: `false` |
| `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| `phone` | Phone filter | `eq` | Phone equals value. | `search String` |
| `isEncryptionEnabled` | Encryption status filter<ul><li>client-side encryption</li><li>private key possession</li></ul> | `eq` |  | `true or false` |
| `hasRole` | (**`NEW`**) User role filter<br>Depends on **effectiveRoles**.<br>For more information about roles check **`GET /roles`** API | `eq`, `neq` | User role equals value. | <ul><li>`CONFIG_MANAGER` - Manages global configuration</li><li>`USER_MANAGER` - Manages users</li><li>`GROUP_MANAGER` - Manages user groups</li><li>`ROOM_MANAGER` - Manages top level rooms</li><li>`LOG_AUDITOR` - Reads audit logs</li><li>`NONMEMBER_VIEWER` - Views users and groups when having room _"manage"_ permission</li><li>`USER` - Regular User role</li><li>`GUEST_USER` - Guest User role</li></ul> |

</details>

### Deprecated filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| <del>`lockStatus`</del> | User lock status filter | `eq` | User lock status equals value. | <ul><li>`0` - Locked</li><li>`1` - Web access allowed</li><li>`2` - Web and mobile access allowed</li></ul> |
| <del>`login`</del> |  User login filter | `cn` | User login contains value. | `search String` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`firstName:asc|lastLoginSuccessAt:desc`  
Sort by `firstName` ascending **AND** by `lastLoginSuccessAt` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `userName` | User name |
| `email` | User email |
| `firstName` | User first name |
| `lastName` | User last name |
| `isLocked` | User lock status |
| `lastLoginSuccessAt` | Last successful login date |
| `expireAt` | Expiration date |
| `createdAt` | Creation date |

</details>

### Deprecated sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| <del>`gender`</del> | Gender |
| <del>`lockStatus`</del> | User lock status |
| <del>`login`</del> | User login |

</details>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Provisioning.RequestCustomerUsers(ctx, operations.RequestCustomerUsersRequest{
        XSdsDateFormat: operations.RequestCustomerUsersXSdsDateFormatEnumEpoch.ToPointer(),
        XSdsServiceToken: sdk.String("commodi"),
        CustomerID: 447144,
        Filter: sdk.String("corporis"),
        IncludeAttributes: sdk.Bool(false),
        IncludeManageableRooms: sdk.Bool(false),
        IncludeRoles: sdk.Bool(false),
        Limit: sdk.Int(968904),
        Offset: sdk.Int(828657),
        Sort: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserList != nil {
        // handle response
    }
}
```

## RequestCustomers

### Description:  
Receive a list of customers.

### Precondition:
Authentication with `X-Sds-Service-Token` required.

### Postcondition:
List of customers is returned.

### Further Information:
This list returns a maximum of **1000** entries.  

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`trialDaysLeft:le:10|userMax:le:100`  
Get all customers with `10` trial days left **AND** user maximum **<=** `100`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `id` | Customer ID filter | `eq` | Customer ID equals value. | `positive Integer` |
| `companyName` | Company name filter | `cn` | Company name contains value. | `search String` |
| `customerContractType` | Customer contract type filter | `eq` | Customer contract type equals value. | <ul><li>`demo`</li><li>`free`</li><li>`pay`</li></ul> |
| `trialDaysLeft` | Left trial days filter | `ge, le` | Left trial days are greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `trialDaysLeft:ge:5`&#124;`trialDaysLeft:le:10` |
| `providerCustomerId` | Provider Customer ID filter | `cn, eq` | Provider Customer ID contains / equals value. | `search String` |
| `quotaMax` | Maximum quota filter | `ge, le` | Maximum quota is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `quotaMax:ge:1024`&#124;`quotaMax:le:1073741824` | `positive Integer` |
| `quotaUsed` | Used quota filter | `ge, le` | Used quota is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `quotaUsed:ge:1024`&#124;`quotaUsed:le:1073741824` | `positive Integer` |
| `userMax` | User maximum filter | `ge, le` | User maxiumum is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `userMax:ge:10`&#124;`userMax:le:100` | `positive Integer` |
| `userUsed` | Number of registered users filter | `ge, le` | Number of registered users is is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `userUsed:ge:10`&#124;`userUsed:le:100` | `positive Integer` |
| `isLocked` | Lock status filter | `eq` |  | `true or false` |
| `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| `updatedAt` | Last modification date filter | `ge, le` | Last modification date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `updatedAt:ge:2016-12-31`&#124;`updatedAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| `lastLoginAt` | Last login date filter | `ge, le` | Last login date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `lastLoginAt:ge:2016-12-31`&#124;`lastLoginAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| `userLogin` | User login filter | `eq` | User login name equals value.<br>Search user all logins e.g. `basic`, `active_directory`, `radius`. | `search String` |
| `attributeKey` | Customer attribute key filter | `eq`, `nex` | Customer attribute key equals value / Customer attribute does **NOT** exist at customer | `search String` |
| `attributeValue` | Customer attribute value filter | `eq` | Customer attribute value equals value. | `search String` |

</details>

### Deprecated filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| <del>`activationCode`</del> | Activation code filter | `cn, eq` | Activation code contains / equals value. | `search String` |
| <del>`lockStatus`</del> | Lock status filter | `eq` |  | <ul><li>`0` - unlocked</li><li>`1` - locked</li></ul> |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort criteria are possible.  
Fields are connected via logical conjunction **AND**.

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`companyName:desc|userUsed:asc`  
Sort by `companyName` descending **AND** `userUsed` ascending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `companyName` | Company name |
| `customerContractType` | Customer contract type |
| `trialDaysLeft` | Number of remaining trial days (demo customers) |
| `providerCustomerId` | Provider Customer ID |
| `quotaMax` | Maximum quota |
| `quotaUsed` | Currently used quota |
| `userMax` | Maximum user number |
| `userUsed` | Number of registered users |
| `isLocked` | Lock status of customer |
| `createdAt` | Creation date |
| `updatedAt` | Last modification date |
| `lastLoginAt` | Last login date of any user of this customer |

</details>

### Deprecated sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| <del>`lockStatus`</del> | Lock status of customer |

</details>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Provisioning.RequestCustomers(ctx, operations.RequestCustomersRequest{
        XSdsDateFormat: operations.RequestCustomersXSdsDateFormatEnumLeet.ToPointer(),
        XSdsServiceToken: sdk.String("aliquid"),
        Filter: sdk.String("aperiam"),
        IncludeAttributes: sdk.Bool(false),
        Limit: sdk.Int(738683),
        Offset: sdk.Int(232627),
        Sort: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerList != nil {
        // handle response
    }
}
```

## RequestListOfEventTypesForTenant

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Get a list of available event types.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.

### Postcondition:
List of available event types is returned.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Provisioning.RequestListOfEventTypesForTenant(ctx, operations.RequestListOfEventTypesForTenantRequest{
        XSdsServiceToken: sdk.String("exercitationem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventTypeList != nil {
        // handle response
    }
}
```

## RequestListOfTenantWebhooks

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Get a list of webhooks for the tenant scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.

### Postcondition:
List of webhooks is returned.

### Further Information:  
Output is limited to **500** entries.  
For more results please use filter criteria and paging (`offset` + `limit`).  
`EncryptionInfo` is **NOT** provided.  
Wildcard character is the asterisk character: **`*`**

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:cn:goo|createdAt:ge:2015-01-01`  
Get webhooks where name contains `goo` **AND** webhook creation date is **>=** `2015-01-01`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| **`id`** | Webhook id filter | `eq` | Webhook id equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**). |`positive number`|
| **`name`** | Webhook type name| `cn, eq` | Webhook name contains / equals value. | `search String` |
| **`isEnabled`** | Webhook isEnabled filter | `eq` |  | `true or false` |
| **`createdAt`** | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| **`updatedAt`** | Last modification date filter | `ge, le` | Last modification date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `updatedAt:ge:2016-12-31`&#124;`updatedAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| **`expiration`** | Expiration date filter | `ge, le, eq` | Expiration date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `expiration:ge:2016-12-31`&#124;`expiration:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| **`lastFailStatus`** | Failure status filter | `eq` | Last HTTP status code. Set when a webhook is auto-disabled due to repeated delivery failures |`positive number`|

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort criteria are possible.  
Fields are connected via logical conjunction **AND**.

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:desc|isEnabled:asc`  
Sort by `name` descending and `isEnabled` ascending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| **`id`** | Webhook id |
| **`name`** | Webhook name |
| **`isEnabled`** | Webhook isEnabled |
| **`createdAt`** | Creation date |
| **`updatedAt`** | Last modification date |
| **`expiration`** | Expiration date |

</details>


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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Provisioning.RequestListOfTenantWebhooks(ctx, operations.RequestListOfTenantWebhooksRequest{
        XSdsDateFormat: operations.RequestListOfTenantWebhooksXSdsDateFormatEnumLeet.ToPointer(),
        XSdsServiceToken: sdk.String("facere"),
        Filter: sdk.String("numquam"),
        Limit: sdk.Int(985492),
        Offset: sdk.Int(381760),
        Sort: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookList != nil {
        // handle response
    }
}
```

## RequestTenantWebhook

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Get a specific webhook for the tenant scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.

### Postcondition:
Webhook is returned.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Provisioning.RequestTenantWebhook(ctx, operations.RequestTenantWebhookRequest{
        XSdsDateFormat: operations.RequestTenantWebhookXSdsDateFormatEnumEpoch.ToPointer(),
        XSdsServiceToken: sdk.String("saepe"),
        WebhookID: 897071,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## ResetTenantWebhookLifetime

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Reset the lifetime of a webhook for the tenant scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.

### Postcondition:
Lifetime of the webhook is reset.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Provisioning.ResetTenantWebhookLifetime(ctx, operations.ResetTenantWebhookLifetimeRequest{
        XSdsDateFormat: operations.ResetTenantWebhookLifetimeXSdsDateFormatEnumLocal.ToPointer(),
        XSdsServiceToken: sdk.String("sunt"),
        WebhookID: 992012,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## ~~SetCustomerAttributes~~

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.28.0</h3>

### Description:  
Set custom customer attributes.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> required.

### Postcondition:
Custom customer attributes gets set.

### Further Information:
Batch function.  
All existing customer attributes will be deleted.  

* Allowed characters for keys are: `[a-zA-Z0-9_-]`  
* Characters are **case-insensitive**.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Provisioning.SetCustomerAttributes(ctx, operations.SetCustomerAttributesRequest{
        CustomerAttributes: shared.CustomerAttributes{
            Items: []shared.KeyValueEntry{
                shared.KeyValueEntry{
                    Key: "non",
                    Value: "amet",
                },
            },
        },
        XSdsDateFormat: operations.SetCustomerAttributesXSdsDateFormatEnumUtc.ToPointer(),
        XSdsServiceToken: sdk.String("dignissimos"),
        CustomerID: 950953,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Customer != nil {
        // handle response
    }
}
```

## UpdateCustomer

### Description:  
Change selected attributes of a customer.

### Precondition:
Authentication with `X-Sds-Service-Token` required.

### Postcondition:
Selected attributes of customer are updated.

### Further Information:
None.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Provisioning.UpdateCustomer(ctx, operations.UpdateCustomerRequest{
        UpdateCustomerRequest: shared.UpdateCustomerRequest{
            CompanyName: sdk.String("debitis"),
            CustomerContractType: shared.UpdateCustomerRequestCustomerContractTypeEnumDemo,
            IsLocked: sdk.Bool(false),
            LockStatus: sdk.Bool(false),
            ProviderCustomerID: sdk.String("corporis"),
            QuotaMax: sdk.Int64(689768),
            UserMax: sdk.Int(385237),
            WebhooksMax: sdk.Int64(58356),
        },
        XSdsDateFormat: operations.UpdateCustomerXSdsDateFormatEnumLeet.ToPointer(),
        XSdsServiceToken: sdk.String("libero"),
        CustomerID: 113816,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCustomerResponse != nil {
        // handle response
    }
}
```

## UpdateCustomerAttributes

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.4.0</h3>

### Description:  
Add or edit custom customer attributes.
<br/><br/><span style="font-weight: bold; color: red;"> &#128679; **Warning: Please note that the response with HTTP status code 200 (OK) is deprecated and will be replaced with HTTP status code 204 (No content)!**</span><br/>

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> required.

### Postcondition:
Custom customer attributes get added or edited.

### Further Information:
Batch function.  
If an entry exists before, it will be overwritten.  

* Allowed characters for keys are: `[a-zA-Z0-9_-]`  
* Characters are **case-insensitive**.

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Provisioning.UpdateCustomerAttributes(ctx, operations.UpdateCustomerAttributesRequest{
        CustomerAttributes: shared.CustomerAttributes{
            Items: []shared.KeyValueEntry{
                shared.KeyValueEntry{
                    Key: "similique",
                    Value: "tempora",
                },
                shared.KeyValueEntry{
                    Key: "aspernatur",
                    Value: "voluptas",
                },
                shared.KeyValueEntry{
                    Key: "voluptas",
                    Value: "voluptas",
                },
                shared.KeyValueEntry{
                    Key: "minima",
                    Value: "nobis",
                },
            },
        },
        XSdsDateFormat: operations.UpdateCustomerAttributesXSdsDateFormatEnumEpoch.ToPointer(),
        XSdsServiceToken: sdk.String("adipisci"),
        CustomerID: 795535,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Customer != nil {
        // handle response
    }
}
```

## UpdateTenantWebhook

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Update an existing webhook for the tenant scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.

### Postcondition:
Webhook is updated.

### Further Information:
URL must begin with the `HTTPS` scheme.
Webhook names are limited to 150 characters.

### Available event types:

<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Name | Description | Scope |
| :--- | :--- | :--- |
| **`customer.created`** | Triggered when a new customer is created | Tenant Webhook |
| **`customer.deleted`** | Triggered when a user is deleted | Tenant Webhook |
| **`webhook.expiring`** | Triggered 30/20/10/1 days before a webhook expires |  Tenant Webhook |

</details>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Provisioning.UpdateTenantWebhook(ctx, operations.UpdateTenantWebhookRequest{
        UpdateWebhookRequest: shared.UpdateWebhookRequest{
            EventTypeNames: []string{
                "blanditiis",
            },
            IsEnabled: sdk.Bool(false),
            Name: sdk.String("Valerie Haag"),
            Secret: sdk.String("ullam"),
            TriggerExampleEvent: sdk.Bool(false),
            URL: sdk.String("adipisci"),
        },
        XSdsDateFormat: operations.UpdateTenantWebhookXSdsDateFormatEnumEpoch.ToPointer(),
        XSdsServiceToken: sdk.String("blanditiis"),
        WebhookID: 555361,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```
