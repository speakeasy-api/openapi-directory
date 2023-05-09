# Administration

### Available Operations

* [DeleteClientsIDClient](#deleteclientsidclient) - Delete a client
* [DeleteClientsIDClientLogo](#deleteclientsidclientlogo) - Delete the client logo
* [DeleteWebhooks](#deletewebhooks) - Deletes all webhooks
* [DeleteWebhooksAuth](#deletewebhooksauth) - Deletes all webhook authentication types
* [DeleteWebhooksAuthIDAuth](#deletewebhooksauthidauth) - Deletes the webhook authentication type
* [DeleteWebhooksIDWebhook](#deletewebhooksidwebhook) - Deletes a webhook
* [DeleteWebhooksIDWebhookAddToData](#deletewebhooksidwebhookaddtodata) - delete all entries
* [DeleteWebhooksIDWebhookAddToDataKey](#deletewebhooksidwebhookaddtodatakey) - delete the requested entry
* [GetClients](#getclients) - List clients
* [GetClientsIDClient](#getclientsidclient) - Get information about a client
* [GetConfig](#getconfig) - Get configuration of the API.
* [GetConfigLogs](#getconfiglogs) - Get configuration change history of the API.
* [GetMonitoring](#getmonitoring) - get performances stats on this instance
* [GetPublickey](#getpublickey) - Get public encryption key of the API.
* [GetWebhooks](#getwebhooks) - Get webhooks
* [GetWebhooksAuth](#getwebhooksauth) - Get webhooks authentication types
* [GetWebhooksIDWebhookAddToData](#getwebhooksidwebhookaddtodata) - retrieve the list of the value to add in webhooks when sending the requested webhook
* [GetWebhooksIDWebhookAddToDataKey](#getwebhooksidwebhookaddtodatakey) - retrieve the value to add in the requested webhook for the requested name
* [GetWebhooksIDWebhookLogs](#getwebhooksidwebhooklogs) - Get webhooks logs.
* [PostClients](#postclients) - Create a client
* [PostClientsIDClientLogo](#postclientsidclientlogo) - Update the client logo
* [PostConfig](#postconfig) - Insert/update configuration key(s)/value(s) on the API.
* [PostTestSync](#posttestsync) - Test synchronization on a random connection.
* [PostTestWebhooks](#posttestwebhooks) - Test synchronization on a random connection.
* [PostWebhooks](#postwebhooks) - Adds a new webhook
* [PostWebhooksAuth](#postwebhooksauth) - Adds a new webhook authentication type
* [PostWebhooksAuthIDAuth](#postwebhooksauthidauth) - Updates the webhook authentication type
* [PostWebhooksIDWebhook](#postwebhooksidwebhook) - Updates a webhook
* [PostWebhooksIDWebhookAddToData](#postwebhooksidwebhookaddtodata) - Setup a field to store in user config when calling the endpoint
* [PostWebhooksIDWebhookAddToDataKey](#postwebhooksidwebhookaddtodatakey) - upate the requested field to store in user config when calling the endpoint
* [PutClientsIDClient](#putclientsidclient) - Update a client
* [PutWebhooksAuthIDAuth](#putwebhooksauthidauth) - Updates the webhook authentication type
* [PutWebhooksIDWebhook](#putwebhooksidwebhook) - Updates a webhook

## DeleteClientsIDClient

Delete a client

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.DeleteClientsIDClient(ctx, operations.DeleteClientsIDClientRequest{
        Expand: sdk.String("distinctio"),
        IDClient: 844266,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Client != nil {
        // handle response
    }
}
```

## DeleteClientsIDClientLogo

Delete the client logo

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.DeleteClientsIDClientLogo(ctx, operations.DeleteClientsIDClientLogoRequest{
        Expand: sdk.String("unde"),
        IDClient: 857946,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.File != nil {
        // handle response
    }
}
```

## DeleteWebhooks

Updates the deleted field with the date of the deletion<br><br>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.DeleteWebhooks(ctx, operations.DeleteWebhooksRequest{
        Expand: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## DeleteWebhooksAuth

Deletes all webhook authentication types

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.DeleteWebhooksAuth(ctx, operations.DeleteWebhooksAuthRequest{
        Expand: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthProvider != nil {
        // handle response
    }
}
```

## DeleteWebhooksAuthIDAuth

Updates the deleted field with the date of the deletion<br><br>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.DeleteWebhooksAuthIDAuth(ctx, operations.DeleteWebhooksAuthIDAuthRequest{
        Expand: sdk.String("vel"),
        IDAuth: 623564,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthProvider != nil {
        // handle response
    }
}
```

## DeleteWebhooksIDWebhook

Updates the deleted field with the date of the deletion<br><br>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.DeleteWebhooksIDWebhook(ctx, operations.DeleteWebhooksIDWebhookRequest{
        Expand: sdk.String("deserunt"),
        IDWebhook: 384382,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## DeleteWebhooksIDWebhookAddToData

delete all entries

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.DeleteWebhooksIDWebhookAddToData(ctx, operations.DeleteWebhooksIDWebhookAddToDataRequest{
        Expand: sdk.String("iure"),
        IDWebhook: 297534,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## DeleteWebhooksIDWebhookAddToDataKey

delete the requested entry

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.DeleteWebhooksIDWebhookAddToDataKey(ctx, operations.DeleteWebhooksIDWebhookAddToDataKeyRequest{
        Expand: sdk.String("debitis"),
        IDWebhook: 56713,
        Key: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## GetClients

List clients

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.GetClients(ctx, operations.GetClientsRequest{
        Expand: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClients200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetClientsIDClient

If you use the manage_token or a configuration token, you will get also the client secret.<br><br>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.GetClientsIDClient(ctx, operations.GetClientsIDClientRequest{
        Expand: sdk.String("suscipit"),
        IDClient: 477665,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Client != nil {
        // handle response
    }
}
```

## GetConfig

<br><br>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.GetConfig(ctx, operations.GetConfigRequest{
        Search: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetConfigLogs

<br><br>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.GetConfigLogs(ctx, operations.GetConfigLogsRequest{
        Expand: sdk.String("placeat"),
        MaxDate: types.MustDateFromString("2022-01-15"),
        MinDate: types.MustDateFromString("2022-03-20"),
        Search: sdk.String("recusandae"),
        Type: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetConfigLogs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetMonitoring

get performances stats on this instance

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.GetMonitoring(ctx, operations.GetMonitoringRequest{
        Period: sdk.Int64(71036),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPublickey

Get public encryption key of the API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.GetPublickey(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetWebhooks

Get webhooks

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.GetWebhooks(ctx, operations.GetWebhooksRequest{
        Expand: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWebhooks200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetWebhooksAuth

Get webhooks authentication types

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.GetWebhooksAuth(ctx, operations.GetWebhooksAuthRequest{
        Expand: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWebhooksAuth200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetWebhooksIDWebhookAddToData

retrieve the list of the value to add in webhooks when sending the requested webhook

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.GetWebhooksIDWebhookAddToData(ctx, operations.GetWebhooksIDWebhookAddToDataRequest{
        Expand: sdk.String("deserunt"),
        IDWebhook: 20218,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWebhooksIDWebhookAddToData200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetWebhooksIDWebhookAddToDataKey

retrieve the value to add in the requested webhook for the requested name

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.GetWebhooksIDWebhookAddToDataKey(ctx, operations.GetWebhooksIDWebhookAddToDataKeyRequest{
        Expand: sdk.String("ipsam"),
        IDWebhook: 832620,
        Key: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## GetWebhooksIDWebhookLogs

Get logs of the webhooks.<br><br>By default, it selects logs for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.GetWebhooksIDWebhookLogs(ctx, operations.GetWebhooksIDWebhookLogsRequest{
        Expand: sdk.String("quo"),
        IDUser: sdk.Int64(140350),
        IDWebhook: 870013,
        Limit: sdk.Int64(870088),
        MaxDate: types.MustDateFromString("2021-07-31"),
        MinDate: types.MustDateFromString("2020-08-07"),
        Offset: sdk.Int64(461479),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWebhooksIDWebhookLogs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostClients

Create a client

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.PostClients(ctx, operations.PostClientsRequest{
        RequestBody: &operations.PostClientsRequestBody{
            Config: sdk.String("totam"),
            GenerateKeys: sdk.Bool(false),
            Name: sdk.String("Omar Carroll"),
            RedirectUris: sdk.String("occaecati"),
        },
        Expand: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Client != nil {
        // handle response
    }
}
```

## PostClientsIDClientLogo

Update the client logo

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.PostClientsIDClientLogo(ctx, operations.PostClientsIDClientLogoRequest{
        Expand: sdk.String("deleniti"),
        IDClient: 944669,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.File != nil {
        // handle response
    }
}
```

## PostConfig

Insert/update configuration key(s)/value(s) on the API.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.PostConfig(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostTestSync

It can be used to test receiving data on your webhooks.<br><br>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.PostTestSync(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostTestWebhooks

It can be used to test receiving data on your webhooks.<br><br>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.PostTestWebhooks(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostWebhooks

Adds a new webhook

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.PostWebhooks(ctx, operations.PostWebhooksRequest{
        RequestBody: &operations.PostWebhooksRequestBody{
            Event: sdk.String("optio"),
            IDAuth: sdk.String("totam"),
            IDService: sdk.Int64(105907),
            IDUser: sdk.Int64(414662),
            Params: sdk.String("molestiae"),
            URL: sdk.String("modi"),
        },
        Expand: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## PostWebhooksAuth

Adds a new webhook authentication type

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.PostWebhooksAuth(ctx, operations.PostWebhooksAuthRequest{
        RequestBody: operations.PostWebhooksAuthRequestBody{
            Config: sdk.String("impedit"),
            Name: "Cory Emmerich",
            Type: 18789,
        },
        Expand: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthProvider != nil {
        // handle response
    }
}
```

## PostWebhooksAuthIDAuth

Updates the webhook authentication type

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.PostWebhooksAuthIDAuth(ctx, operations.PostWebhooksAuthIDAuthRequest{
        RequestBody: operations.PostWebhooksAuthIDAuthRequestBody{
            Config: sdk.String("natus"),
            Name: "Sheryl Fadel",
            Type: 943749,
        },
        Expand: sdk.String("saepe"),
        IDAuth: 681820,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthProvider != nil {
        // handle response
    }
}
```

## PostWebhooksIDWebhook

Updates a webhook

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.PostWebhooksIDWebhook(ctx, operations.PostWebhooksIDWebhookRequest{
        RequestBody: &operations.PostWebhooksIDWebhookRequestBody{
            Deleted: sdk.String("in"),
            Event: sdk.String("corporis"),
            IDAuth: sdk.Int64(613064),
            IDService: sdk.Int64(437032),
            IDUser: sdk.Int64(902349),
            URL: sdk.String("quidem"),
        },
        Expand: sdk.String("architecto"),
        IDWebhook: 60225,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## PostWebhooksIDWebhookAddToData

For each parameter, a value will be added in the webhook data. Use the key to set the name of the field. The values that can be added are to be found in the user configuration.<br><br>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.PostWebhooksIDWebhookAddToData(ctx, operations.PostWebhooksIDWebhookAddToDataRequest{
        Expand: sdk.String("reiciendis"),
        IDWebhook: 666767,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## PostWebhooksIDWebhookAddToDataKey

For each parameter, a value will be added in the webhook data. Use the key to set the name of the field. The values that can be added are to be found in the user configuration.<br><br>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.PostWebhooksIDWebhookAddToDataKey(ctx, operations.PostWebhooksIDWebhookAddToDataKeyRequest{
        Expand: sdk.String("mollitia"),
        IDWebhook: 670638,
        Key: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## PutClientsIDClient

Update a client

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.PutClientsIDClient(ctx, operations.PutClientsIDClientRequest{
        RequestBody: &operations.PutClientsIDClientRequestBody{
            Config: sdk.String("dolorem"),
            Description: sdk.String("corporis"),
            DescriptionBanks: sdk.String("explicabo"),
            DescriptionProviders: sdk.String("nobis"),
            GenerateKeys: sdk.Bool(false),
            Name: sdk.String("Guadalupe Hickle"),
            PrimaryColor: sdk.String("accusantium"),
            Pro: sdk.Bool(false),
            RedirectUris: sdk.String("iure"),
            SecondaryColor: sdk.String("culpa"),
            Secret: sdk.Bool(false),
            UpdateConfig: sdk.Bool(false),
        },
        Expand: sdk.String("doloribus"),
        IDClient: 958950,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Client != nil {
        // handle response
    }
}
```

## PutWebhooksAuthIDAuth

Updates the webhook authentication type

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.PutWebhooksAuthIDAuth(ctx, operations.PutWebhooksAuthIDAuthRequest{
        RequestBody: operations.PutWebhooksAuthIDAuthRequestBody{
            Config: sdk.String("architecto"),
            Name: "Mike Nicolas",
            Type: 653108,
        },
        Expand: sdk.String("occaecati"),
        IDAuth: 253291,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthProvider != nil {
        // handle response
    }
}
```

## PutWebhooksIDWebhook

Updates a webhook

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Administration.PutWebhooksIDWebhook(ctx, operations.PutWebhooksIDWebhookRequest{
        RequestBody: &operations.PutWebhooksIDWebhookRequestBody{
            Deleted: sdk.String("commodi"),
            Event: sdk.String("quam"),
            IDAuth: sdk.Int64(474697),
            IDService: sdk.Int64(244425),
            IDUser: sdk.Int64(623510),
            URL: sdk.String("quia"),
        },
        Expand: sdk.String("quis"),
        IDWebhook: 110375,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```
