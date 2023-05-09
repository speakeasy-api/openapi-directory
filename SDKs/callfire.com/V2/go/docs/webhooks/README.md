# Webhooks

### Available Operations

* [CreateWebhook](#createwebhook) - Create a webhook
* [DeleteWebhook](#deletewebhook) - Delete a webhook
* [FindWebhookResources](#findwebhookresources) - Find webhook resources
* [FindWebhooks](#findwebhooks) - Find webhooks
* [GetWebhook](#getwebhook) - Find a specific webhook
* [GetWebhookResource](#getwebhookresource) - Find specific webhook resource
* [UpdateWebhook](#updatewebhook) - Update a webhook

## CreateWebhook

Create a Webhook for notification in the CallFire system. Use the webhooks API to receive notifications of important CallFire events. Select the resource to listen to, and then choose the resource events to receive notifications on. When an event triggers, a POST will be made to the callback URL with a payload of notification information. Available resources and their events include 'CccCampaign': ['started', 'stopped', 'finished'], 'CallBroadcast': ['started', 'stopped', 'finished'], 'TextBroadcast': ['started', 'stopped', 'finished'], 'OutboundCall': ['finished'], 'InboundCall': ['finished'], 'OutboundText': ['finished'], 'InboundText': ['finished'], 'ContactList': ['validationFinished', 'validationFailed'], 'MonthlyRenewal': ['failed', 'finished'], 'LowBalance': ['failed', 'finished']. Webhooks support secret token which is used as signing key to HmacSHA1 hash of json payload which is returned in 'X-CallFire-Signature' header. This header can be used to verify callback POST is coming from CallFire. See [security guide](https://developers.callfire.com/security-guide.html)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.CreateWebhook(ctx, shared.WebhookInput{
        Callback: sdk.String("modi"),
        Enabled: sdk.Bool(false),
        Events: []string{
            "sint",
        },
        ExpiresAt: sdk.Int64(876027),
        Fields: sdk.String("sequi"),
        ID: sdk.Int64(918547),
        Name: sdk.String("Willie Wehner"),
        NonStrictSsl: sdk.Bool(false),
        Resource: sdk.String("dolores"),
        Secret: sdk.String("nam"),
        SingleUse: sdk.Bool(false),
    }, operations.CreateWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceID != nil {
        // handle response
    }
}
```

## DeleteWebhook

Deletes a webhook instance. Will be removed permanently

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
    res, err := s.Webhooks.DeleteWebhook(ctx, operations.DeleteWebhookRequest{
        ID: 115898,
    }, operations.DeleteWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FindWebhookResources

Searches for webhook resources. Available resources include 'CccCampaign': ['started', 'stopped', 'finished'], 'CallBroadcast': ['started', 'stopped', 'finished'], 'TextBroadcast': ['started', 'stopped', 'finished'], 'OutboundCall': ['finished'], 'InboundCall': ['finished'], 'OutboundText': ['finished'], 'InboundText': ['finished'], 'ContactList': ['validationFinished', 'validationFailed'], 'MonthlyRenewal': ['failed', 'finished'], 'LowBalance': ['failed', 'finished']

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
    res, err := s.Webhooks.FindWebhookResources(ctx, operations.FindWebhookResourcesRequest{
        Fields: sdk.String("consequuntur"),
    }, operations.FindWebhookResourcesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemListWebhookResource != nil {
        // handle response
    }
}
```

## FindWebhooks

Searches all webhooks available for a current user. Searches by name, resource, event, callback URL, or whether they are enabled. Returns a paged list of Webhooks

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
    res, err := s.Webhooks.FindWebhooks(ctx, operations.FindWebhooksRequest{
        Callback: sdk.String("necessitatibus"),
        Enabled: sdk.Bool(false),
        Event: sdk.String("nobis"),
        Fields: sdk.String("ipsa"),
        Limit: sdk.Int(497357),
        Name: sdk.String("Harold Boyer"),
        Offset: sdk.Int(729448),
        Resource: sdk.String("excepturi"),
    }, operations.FindWebhooksSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookPage != nil {
        // handle response
    }
}
```

## GetWebhook

Returns a single Webhook instance for a given webhook id

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
    res, err := s.Webhooks.GetWebhook(ctx, operations.GetWebhookRequest{
        Fields: sdk.String("occaecati"),
        ID: 367917,
    }, operations.GetWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Webhook != nil {
        // handle response
    }
}
```

## GetWebhookResource

Returns information about supported events for a given webhook resource

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
    res, err := s.Webhooks.GetWebhookResource(ctx, operations.GetWebhookResourceRequest{
        Fields: sdk.String("aliquam"),
        Resource: "nostrum",
    }, operations.GetWebhookResourceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookResource != nil {
        // handle response
    }
}
```

## UpdateWebhook

Updates the information in existing webhook

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Webhooks.UpdateWebhook(ctx, operations.UpdateWebhookRequest{
        WebhookInput: &shared.WebhookInput{
            Callback: sdk.String("doloribus"),
            Enabled: sdk.Bool(false),
            Events: []string{
                "sint",
                "enim",
                "hic",
                "animi",
            },
            ExpiresAt: sdk.Int64(559774),
            Fields: sdk.String("totam"),
            ID: sdk.Int64(564667),
            Name: sdk.String("Ms. Jessica Turcotte"),
            NonStrictSsl: sdk.Bool(false),
            Resource: sdk.String("assumenda"),
            Secret: sdk.String("tempore"),
            SingleUse: sdk.Bool(false),
        },
        ID: 725574,
    }, operations.UpdateWebhookSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
