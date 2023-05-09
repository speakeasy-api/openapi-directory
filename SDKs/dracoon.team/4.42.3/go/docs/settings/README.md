# Settings

## Overview

Customer settings

### Available Operations

* [CreateAndPreserveKeyPair](#createandpreservekeypair) - Create system rescue key pair and preserve copy of old private key
* [CreateWebhook](#createwebhook) - Create webhook
* [RemoveSystemRescueKeyPair](#removesystemrescuekeypair) - Remove system rescue key pair
* [RemoveWebhook](#removewebhook) - Remove webhook
* [RequestAllSystemRescueKeyPairs](#requestallsystemrescuekeypairs) - Request all system rescue key pairs
* [RequestListOfEventTypesForConfigManager](#requestlistofeventtypesforconfigmanager) - Request list of event types
* [RequestListOfWebhooks](#requestlistofwebhooks) - Request list of webhooks
* [RequestNotificationChannels](#requestnotificationchannels) - Request list of notification channels
* [RequestSettings](#requestsettings) - Request customer settings
* [RequestSystemRescueKeyPair](#requestsystemrescuekeypair) - Request system rescue key pair
* [RequestWebhook](#requestwebhook) - Request webhook
* [ResetWebhookLifetime](#resetwebhooklifetime) - Reset webhook lifetime
* [SetSettings](#setsettings) - Set customer settings
* [SetSystemRescueKeyPair](#setsystemrescuekeypair) - Activate client-side encryption for customer
* [ToggleNotificationChannels](#togglenotificationchannels) - Toggle notification channels
* [UpdateWebhook](#updatewebhook) - Update webhook

## CreateAndPreserveKeyPair

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>

### Description:  
Create system rescue key pair and preserve copy of old private key.

### Precondition:
* Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span>
* Existence of own key pair

### Postcondition:
System rescue key pair is created.  
Copy of old private key is preserved.

### Further Information:
You can submit your old private key, encrypted with your current password.  
This allows migrating file keys encrypted with your old key pair to the new one.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Settings.CreateAndPreserveKeyPair(ctx, operations.CreateAndPreserveKeyPairRequest{
        CreateKeyPairRequest: shared.CreateKeyPairRequest{
            PreviousPrivateKey: shared.PrivateKeyContainer{
                CreatedAt: types.MustTimeFromString("2022-02-13T07:31:47.607Z"),
                CreatedBy: sdk.Int64(813679),
                PrivateKey: "fuga",
                Version: "praesentium",
            },
            PrivateKeyContainer: shared.PrivateKeyContainer{
                CreatedAt: types.MustTimeFromString("2022-05-02T04:56:06.858Z"),
                CreatedBy: sdk.Int64(29100),
                PrivateKey: "quisquam",
                Version: "repudiandae",
            },
            PublicKeyContainer: shared.PublicKeyContainer{
                CreatedAt: types.MustTimeFromString("2022-06-17T00:04:35.396Z"),
                CreatedBy: sdk.Int64(442036),
                PublicKey: "asperiores",
                Version: "totam",
            },
        },
        XSdsAuthToken: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateWebhook

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Create a new webhook for the customer scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.

### Postcondition:
Webhook is created for given event types.

### Further Information:
URL must begin with the `HTTPS` scheme.  
Webhook names are limited to 150 characters.

### Available event types:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Name | Description | Scope |
| :--- | :--- | :--- |
| **`user.created`** | Triggered when a new user is created | Customer Admin Webhook |
| **`user.deleted`** | Triggered when a user is deleted | Customer Admin Webhook |
| **`user.locked`** | Triggered when a user gets locked | Customer Admin Webhook |
|  |  |  |
| **`webhook.expiring`** | Triggered 30/20/10/1 days before a webhook expires |  Customer Admin Webhook |
|  |  |  |
| **`downloadshare.created`** | Triggered when a new download share is created in affected room | Node Webhook |
| **`downloadshare.deleted`** | Triggered when a download share is deleted in affected room | Node Webhook |
| **`downloadshare.used`** | Triggered when a download share is utilized in affected room | Node Webhook |
| **`uploadshare.created`** | Triggered when a new upload share is created in affected room | Node Webhook |
| **`uploadshare.deleted`** | Triggered when a upload share is deleted in affected room | Node Webhook |
| **`uploadshare.used`** | Triggered when a new file is uploaded via the upload share in affected room | Node Webhook |
| **`file.created`** | Triggered when a new file is uploaded in affected room | Node Webhook |
| **`folder.created`** | Triggered when a new folder is created in affected room | Node Webhook |
| **`room.created`** | Triggered when a new room is created (in affected room) | Node Webhook |
| **`file.deleted`** | Triggered when a file is deleted in affected room | Node Webhook |
| **`folder.deleted`** | Triggered when a folder is deleted in affected room | Node Webhook |
| **`room.deleted`** | Triggered when a room is deleted in affected room | Node Webhook |

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
    res, err := s.Settings.CreateWebhook(ctx, operations.CreateWebhookRequest{
        CreateWebhookRequest: shared.CreateWebhookRequest{
            EventTypeNames: []string{
                "maxime",
                "et",
                "esse",
            },
            IsEnabled: sdk.Bool(false),
            Name: "Angelina Jenkins",
            Secret: sdk.String("officiis"),
            TriggerExampleEvent: sdk.Bool(false),
            URL: "officiis",
        },
        XSdsAuthToken: sdk.String("accusamus"),
        XSdsDateFormat: operations.CreateWebhookXSdsDateFormatEnumEpoch.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## RemoveSystemRescueKeyPair

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>

### Description:  
Remove the system rescue key pair.

### Precondition:
* Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span>
* Existence of own key pair

### Postcondition:
Key pair is removed (cf. further information below).

### Further Information:
Please set a new system rescue key pair first and re-encrypt file keys with it.  
If no version is set, deleted key pair with lowest preference value.  
Although, `version` **SHOULD** be set.


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
    res, err := s.Settings.RemoveSystemRescueKeyPair(ctx, operations.RemoveSystemRescueKeyPairRequest{
        XSdsAuthToken: sdk.String("minima"),
        Version: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveWebhook

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Delete a webhook for the customer scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.

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
    res, err := s.Settings.RemoveWebhook(ctx, operations.RemoveWebhookRequest{
        XSdsAuthToken: sdk.String("ex"),
        WebhookID: 980581,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RequestAllSystemRescueKeyPairs

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>

### Description:  
Retrieve all system rescue key pairs to allow migrating system-rescue-key-encrypted file keys.

### Precondition:
* Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span>
* Existence of own key pair

### Postcondition:
List of key pairs is returned.

### Further Information:
In the case of an algorithm migration of a system rescue key, one should create the new key pair before deleting the old one.  
This allows re-encrypting file keys with the new key pair, using the old one.  

This API allows to retrieve both key pairs, in contrast to `GET /settings/keypair`, which only delivers the preferred one.


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
    res, err := s.Settings.RequestAllSystemRescueKeyPairs(ctx, operations.RequestAllSystemRescueKeyPairsRequest{
        XSdsAuthToken: sdk.String("corrupti"),
        XSdsDateFormat: operations.RequestAllSystemRescueKeyPairsXSdsDateFormatEnumLeet.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserKeyPairContainers != nil {
        // handle response
    }
}
```

## RequestListOfEventTypesForConfigManager

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Get a list of available (for <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span>) event types.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.

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
    res, err := s.Settings.RequestListOfEventTypesForConfigManager(ctx, operations.RequestListOfEventTypesForConfigManagerRequest{
        XSdsAuthToken: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventTypeList != nil {
        // handle response
    }
}
```

## RequestListOfWebhooks

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Get a list of webhooks for the customer scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.

### Postcondition:
List of webhooks is returned.

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
    res, err := s.Settings.RequestListOfWebhooks(ctx, operations.RequestListOfWebhooksRequest{
        XSdsAuthToken: sdk.String("blanditiis"),
        XSdsDateFormat: operations.RequestListOfWebhooksXSdsDateFormatEnumLocal.ToPointer(),
        Filter: sdk.String("repudiandae"),
        Limit: sdk.Int(542129),
        Offset: sdk.Int(541381),
        Sort: sdk.String("sunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookList != nil {
        // handle response
    }
}
```

## RequestNotificationChannels

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:  
Retrieve a list of configured notification channels.

### Precondition:
Right _"change config"_ required.

### Postcondition:
List of notification channels is returned.

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
    res, err := s.Settings.RequestNotificationChannels(ctx, operations.RequestNotificationChannelsRequest{
        XSdsAuthToken: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationChannelList != nil {
        // handle response
    }
}
```

## RequestSettings

### Description:  
Retrieve customer related settings. 

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read config</span> required.

### Postcondition:
List of available settings is returned.

### Further Information:
None.

### Configurable customer settings:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description                                                                                                                                                           | Value |
| :--- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------| :--- |
| `homeRoomParentName` | Name of the container in which all user's home rooms are located.<br>`null` if `homeRoomsActive` is `false`.                                                          | `String` |
| `homeRoomQuota` | Refers to the quota of each single user's home room.<br>`0` represents no quota.<br>`null` if `homeRoomsActive` is `false`.                                           | `positive Long` |
| `homeRoomsActive` | If set to `true`, every user with an Active Directory account or OpenID Connect account gets a personal homeroom.<br>Once activated, this **CANNOT** be deactivated. | `true or false` |


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
    res, err := s.Settings.RequestSettings(ctx, operations.RequestSettingsRequest{
        XSdsAuthToken: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerSettingsResponse != nil {
        // handle response
    }
}
```

## RequestSystemRescueKeyPair

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>

### Description:  
Retrieve the system rescue key pair.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span>

### Postcondition:
Key pair is returned.

### Further Information:
If more than one key pair exists the one with highest preference value is returned.


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
    res, err := s.Settings.RequestSystemRescueKeyPair(ctx, operations.RequestSystemRescueKeyPairRequest{
        XSdsAuthToken: sdk.String("repellendus"),
        XSdsDateFormat: operations.RequestSystemRescueKeyPairXSdsDateFormatEnumLocal.ToPointer(),
        Version: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserKeyPairContainer != nil {
        // handle response
    }
}
```

## RequestWebhook

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Get a specific webhook for the customer scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.

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
    res, err := s.Settings.RequestWebhook(ctx, operations.RequestWebhookRequest{
        XSdsAuthToken: sdk.String("doloremque"),
        XSdsDateFormat: operations.RequestWebhookXSdsDateFormatEnumLeet.ToPointer(),
        WebhookID: 116098,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## ResetWebhookLifetime

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Reset the lifetime of a webhook for the customer scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.

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
    res, err := s.Settings.ResetWebhookLifetime(ctx, operations.ResetWebhookLifetimeRequest{
        XSdsAuthToken: sdk.String("accusantium"),
        XSdsDateFormat: operations.ResetWebhookLifetimeXSdsDateFormatEnumUtc.ToPointer(),
        WebhookID: 174772,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## SetSettings

### Description:  
Set customer related settings.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> required.

### Postcondition:
Provided settings are updated.

### Further Information:
None.

### Configurable customer settings
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description                                                                                                                                                          | Value |
| :--- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------| :--- |
| `homeRoomParentName` | Name of the container in which all user's home rooms are located.<br>`null` if `homeRoomsActive` is `false`.                                                         | `String` |
| `homeRoomQuota` | Refers to the quota of each single user's home room.<br>`0` represents no quota.<br>`null` if `homeRoomsActive` is `false`.                                          | `positive Long` |
| `homeRoomsActive` | If set to `true`, every user with an Active Directory account or OpenID Connect account gets a personal homeroom.<br>Once activated, this **CANNOT** be deactivated. | `true or false` |

</details>

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Illegal names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Illegal characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `


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
    res, err := s.Settings.SetSettings(ctx, operations.SetSettingsRequest{
        CustomerSettingsRequest: shared.CustomerSettingsRequest{
            HomeRoomParentName: sdk.String("enim"),
            HomeRoomQuota: sdk.Int64(389135),
            HomeRoomsActive: sdk.Bool(false),
        },
        XSdsAuthToken: sdk.String("velit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerSettingsResponse != nil {
        // handle response
    }
}
```

## SetSystemRescueKeyPair

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>

### Description:  
Set the system rescue key pair and activate client-side encryption for according customer.

### Precondition:
* Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span>
* Existence of own key pair

### Postcondition:
System rescue key pair is set and client-side encryption is enabled.

### Further Information:
Sets the ability for this customer to encrypt rooms.  
Once enabled on customer level, it **CANNOT** be unset.  
On activation, a customer rescue key pair **MUST** be set.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Settings.SetSystemRescueKeyPair(ctx, operations.SetSystemRescueKeyPairRequest{
        UserKeyPairContainer: shared.UserKeyPairContainer{
            PrivateKeyContainer: shared.PrivateKeyContainer{
                CreatedAt: types.MustTimeFromString("2021-04-24T18:03:33.752Z"),
                CreatedBy: sdk.Int64(300029),
                PrivateKey: "saepe",
                Version: "consequuntur",
            },
            PublicKeyContainer: shared.PublicKeyContainer{
                CreatedAt: types.MustTimeFromString("2021-03-24T23:56:32.062Z"),
                CreatedBy: sdk.Int64(597937),
                PublicKey: "in",
                Version: "adipisci",
            },
        },
        XSdsAuthToken: sdk.String("eveniet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ToggleNotificationChannels

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:  
Toggle configured notification channels.

### Precondition:
Right _"change config"_ required.

### Postcondition:
Channel status is switched.

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
    res, err := s.Settings.ToggleNotificationChannels(ctx, operations.ToggleNotificationChannelsRequest{
        NotificationChannelActivationRequest: shared.NotificationChannelActivationRequest{
            ChannelID: 580887,
            IsEnabled: false,
        },
        XSdsAuthToken: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationChannelList != nil {
        // handle response
    }
}
```

## UpdateWebhook

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>

### Description:  
Update an existing webhook for the customer scope.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.

### Postcondition:
Webhook is updated.

### Further Information:
URL must begin with the `HTTPS` scheme.
Webhook names are limited to 150 characters.
Webhook event types can not be changed from Customer Admin Webhook types to Node Webhook types and vice versa  

### Available event types:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Name | Description | Scope |
| :--- | :--- | :--- |
| **`user.created`** | Triggered when a new user is created | Customer Admin Webhook |
| **`user.deleted`** | Triggered when a user is deleted | Customer Admin Webhook |
| **`user.locked`** | Triggered when a user gets locked | Customer Admin Webhook |
|  |  |  |
| **`webhook.expiring`** | Triggered 30/20/10/1 days before a webhook expires |  Customer Admin Webhook |
|  |  |  |
| **`downloadshare.created`** | Triggered when a new download share is created in affected room | Node Webhook |
| **`downloadshare.deleted`** | Triggered when a download share is deleted in affected room | Node Webhook |
| **`downloadshare.used`** | Triggered when a download share is utilized in affected room | Node Webhook |
| **`uploadshare.created`** | Triggered when a new upload share is created in affected room | Node Webhook |
| **`uploadshare.deleted`** | Triggered when a upload share is deleted in affected room | Node Webhook |
| **`uploadshare.used`** | Triggered when a new file is uploaded via the upload share in affected room | Node Webhook |
| **`file.created`** | Triggered when a new file is uploaded in affected room | Node Webhook |
| **`folder.created`** | Triggered when a new folder is created in affected room | Node Webhook |
| **`room.created`** | Triggered when a new room is created (in affected room) | Node Webhook |
| **`file.deleted`** | Triggered when a file is deleted in affected room | Node Webhook |
| **`folder.deleted`** | Triggered when a folder is deleted in affected room | Node Webhook |
| **`room.deleted`** | Triggered when a room is deleted in affected room | Node Webhook |

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
    res, err := s.Settings.UpdateWebhook(ctx, operations.UpdateWebhookRequest{
        UpdateWebhookRequest: shared.UpdateWebhookRequest{
            EventTypeNames: []string{
                "id",
            },
            IsEnabled: sdk.Bool(false),
            Name: sdk.String("Mrs. Bessie Muller"),
            Secret: sdk.String("eveniet"),
            TriggerExampleEvent: sdk.Bool(false),
            URL: sdk.String("non"),
        },
        XSdsAuthToken: sdk.String("vero"),
        XSdsDateFormat: operations.UpdateWebhookXSdsDateFormatEnumUtc.ToPointer(),
        WebhookID: 434156,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```
