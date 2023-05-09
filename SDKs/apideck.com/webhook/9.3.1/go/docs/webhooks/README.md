# Webhooks

### Available Operations

* [WebhooksAdd](#webhooksadd) - Create webhook subscription
* [WebhooksAll](#webhooksall) - List webhook subscriptions
* [WebhooksDelete](#webhooksdelete) - Delete webhook subscription
* [WebhooksExecute](#webhooksexecute) - Execute a webhook
* [WebhooksOne](#webhooksone) - Get webhook subscription
* [WebhooksResolve](#webhooksresolve) - Resolve and Execute a connection webhook
* [WebhooksShortExecute](#webhooksshortexecute) - Execute a webhook
* [WebhooksUpdate](#webhooksupdate) - Update webhook subscription

## WebhooksAdd

Create a webhook subscription to receive events

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
    res, err := s.Webhooks.WebhooksAdd(ctx, operations.WebhooksAddRequest{
        CreateWebhookRequest: shared.CreateWebhookRequest{
            DeliveryURL: "https://example.com/my/webhook/endpoint",
            Description: sdk.String("A description"),
            Events: []shared.WebhookEventTypeEnum{
                shared.WebhookEventTypeEnumCrmCompanyCreated,
                shared.WebhookEventTypeEnumCrmCompanyCreated,
                shared.WebhookEventTypeEnumCrmCompanyCreated,
            },
            Status: shared.StatusEnumEnabled,
            UnifiedAPI: shared.UnifiedAPIIDEnumCrm,
        },
        XApideckAppID: "quibusdam",
    }, operations.WebhooksAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWebhookResponse != nil {
        // handle response
    }
}
```

## WebhooksAll

List all webhook subscriptions

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
    res, err := s.Webhooks.WebhooksAll(ctx, operations.WebhooksAllRequest{
        Cursor: sdk.String("unde"),
        Limit: sdk.Int64(857946),
        XApideckAppID: "corrupti",
    }, operations.WebhooksAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWebhooksResponse != nil {
        // handle response
    }
}
```

## WebhooksDelete

Delete a webhook subscription

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
    res, err := s.Webhooks.WebhooksDelete(ctx, operations.WebhooksDeleteRequest{
        ID: "d69a674e-0f46-47cc-8796-ed151a05dfc2",
        XApideckAppID: "at",
    }, operations.WebhooksDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWebhookResponse != nil {
        // handle response
    }
}
```

## WebhooksExecute

Execute a webhook

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
    res, err := s.Webhooks.WebhooksExecute(ctx, operations.WebhooksExecuteRequest{
        RequestBody: operations.WebhooksExecuteRequestBody{},
        ID: "df7cc78c-a1ba-4928-bc81-6742cb739205",
        ServiceID: "natus",
    }, operations.WebhooksExecuteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExecuteWebhookResponse != nil {
        // handle response
    }
}
```

## WebhooksOne

Get the webhook subscription details

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
    res, err := s.Webhooks.WebhooksOne(ctx, operations.WebhooksOneRequest{
        ID: "29396fea-7596-4eb1-8faa-a2352c595590",
        XApideckAppID: "iure",
    }, operations.WebhooksOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWebhookResponse != nil {
        // handle response
    }
}
```

## WebhooksResolve

Resolve a webhook based on lookup_id and then execute it

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
    res, err := s.Webhooks.WebhooksResolve(ctx, operations.WebhooksResolveRequest{
        RequestBody: operations.WebhooksResolveRequestBody{},
        E: sdk.String("culpa"),
        ID: "ff1a3a2f-a946-4773-9251-aa52c3f5ad01",
        ServiceID: "error",
    }, operations.WebhooksResolveSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResolveWebhookResponse != nil {
        // handle response
    }
}
```

## WebhooksShortExecute

Execute a webhook

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
    res, err := s.Webhooks.WebhooksShortExecute(ctx, operations.WebhooksShortExecuteRequest{
        RequestBody: operations.WebhooksShortExecuteRequestBody{},
        E: sdk.String("temporibus"),
        ID: "a1ffe78f-097b-4007-8f15-471b5e6e13b9",
        LID: sdk.String("excepturi"),
        ServiceID: "pariatur",
    }, operations.WebhooksShortExecuteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExecuteWebhookResponse != nil {
        // handle response
    }
}
```

## WebhooksUpdate

Update a webhook subscription

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
    res, err := s.Webhooks.WebhooksUpdate(ctx, operations.WebhooksUpdateRequest{
        UpdateWebhookRequest: shared.UpdateWebhookRequest{
            DeliveryURL: sdk.String("https://example.com/my/webhook/endpoint"),
            Description: sdk.String("A description"),
            Events: []shared.WebhookEventTypeEnum{
                shared.WebhookEventTypeEnumCrmCompanyCreated,
                shared.WebhookEventTypeEnumCrmCompanyCreated,
            },
            Status: shared.StatusEnumEnabled.ToPointer(),
        },
        ID: "88e1e91e-450a-4d2a-bd44-269802d502a9",
        XApideckAppID: "tempora",
    }, operations.WebhooksUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWebhookResponse != nil {
        // handle response
    }
}
```
