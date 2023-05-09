# Webhooks

### Available Operations

* [AddWebhook](#addwebhook) - Add A New Webhook
* [DeleteWebhook](#deletewebhook) - Delete a webhook
* [GetWebhookByID](#getwebhookbyid) - Get info for a webhook
* [GetWehooksList](#getwehookslist) - Get Webhooks List
* [RegenerateWebhookToken](#regeneratewebhooktoken) - Regenerate security token
* [ResendWebhookActivityEntry](#resendwebhookactivityentry) - Resend a webhook message
* [UpdateWebhook](#updatewebhook) - Update a webhook

## AddWebhook

Create a new Webhook on your account. Creating a Webhook will require an endpoint URL, a path, what events should trigger a webhook, and what request version to use. 

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
    res, err := s.Webhooks.AddWebhook(ctx, operations.AddWebhookRequest{
        RequestBody: &operations.AddWebhookAddWebhookRequestBody{
            EndpointURL: "https://example.com/webhook",
            Resource: sdk.String("/uploads-folder"),
            ResponseVersion: operations.AddWebhookAddWebhookRequestBodyResponseVersionEnumV2.ToPointer(),
            Triggers: &shared.WebhookTriggers{
                Resources: &shared.WebhookTriggersResources{
                    Compress: sdk.Bool(false),
                    Copy: sdk.Bool(false),
                    CreateFolder: sdk.Bool(false),
                    Delete: sdk.Bool(false),
                    Download: sdk.Bool(false),
                    Extract: sdk.Bool(false),
                    Move: sdk.Bool(false),
                    Rename: sdk.Bool(false),
                    Upload: sdk.Bool(false),
                },
                Shares: &shared.WebhookTriggersShares{
                    FormSubmit: sdk.Bool(false),
                },
            },
        },
        EvAccessToken: "nihil",
        EvAPIKey: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookResponse != nil {
        // handle response
    }
}
```

## DeleteWebhook

Deleted the specified webhook. This will not affect logs or any resources the webhook is connected to. 

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
        EvAccessToken: "expedita",
        EvAPIKey: "neque",
        ID: 153694,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponse != nil {
        // handle response
    }
}
```

## GetWebhookByID

Returns the metadata for a specific webhook. Webhook IDs can be retrieve from GET /webhooks

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
    res, err := s.Webhooks.GetWebhookByID(ctx, operations.GetWebhookByIDRequest{
        EvAccessToken: "vel",
        EvAPIKey: "libero",
        ID: 374170,
        Include: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookResponse != nil {
        // handle response
    }
}
```

## GetWehooksList

Returns a list of Webhooks. By default, this will return metadata on all Webhooks within the account. 

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
    res, err := s.Webhooks.GetWehooksList(ctx, operations.GetWehooksListRequest{
        EvAccessToken: "quam",
        EvAPIKey: "ipsum",
        Include: sdk.String("incidunt"),
        Limit: sdk.Int64(100),
        Offset: sdk.Int64(186458),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookCollectionResponse != nil {
        // handle response
    }
}
```

## RegenerateWebhookToken

This endpoint will allow you to regenerate the security token for a webhook if you believe it’s been compromised in any way. 

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
    res, err := s.Webhooks.RegenerateWebhookToken(ctx, operations.RegenerateWebhookTokenRequest{
        EvAccessToken: "cupiditate",
        EvAPIKey: "maxime",
        ID: "db1a8422-bb67-49d2-b227-15bf0cbb1e31",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookResponse != nil {
        // handle response
    }
}
```

## ResendWebhookActivityEntry

This endpoint will allow you to resend a webhook that was previously sent. Resent webhooks will send exactly the same as the original webhook with the exception of the “sent” timestamp. Activity IDs can be retrieve from the webhook logs in your account or via GET /activity/webhooks

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
    res, err := s.Webhooks.ResendWebhookActivityEntry(ctx, operations.ResendWebhookActivityEntryRequest{
        ActivityID: "nobis",
        EvAccessToken: "quos",
        EvAPIKey: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponse != nil {
        // handle response
    }
}
```

## UpdateWebhook

Update the specified webhook. Updated webhooks will take effect immediately and could impact active workflows. Please be certain the webhook is not currently in use prior to updating. 

You only need to send the portions of the webhook configuration you wish to change, rather than the entire webhook object.

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
        RequestBody: &operations.UpdateWebhookUpdateWebhookRequestBody{
            EndpointURL: sdk.String("https://example.com/new-endpoint"),
            Resource: sdk.String("/newfolder"),
            ResponseVersion: operations.UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnumV1.ToPointer(),
            Triggers: &shared.WebhookTriggers{
                Resources: &shared.WebhookTriggersResources{
                    Compress: sdk.Bool(false),
                    Copy: sdk.Bool(false),
                    CreateFolder: sdk.Bool(false),
                    Delete: sdk.Bool(false),
                    Download: sdk.Bool(false),
                    Extract: sdk.Bool(false),
                    Move: sdk.Bool(false),
                    Rename: sdk.Bool(false),
                    Upload: sdk.Bool(false),
                },
                Shares: &shared.WebhookTriggersShares{
                    FormSubmit: sdk.Bool(false),
                },
            },
        },
        EvAccessToken: "cupiditate",
        EvAPIKey: "aperiam",
        ID: 961937,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebhookResponse != nil {
        // handle response
    }
}
```
