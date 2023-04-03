# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/webhook/9.1.2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.WebhooksAddRequest{
        CreateWebhookRequest: shared.CreateWebhookRequest{
            DeliveryURL: "https://example.com/my/webhook/endpoint",
            Description: "A description",
            Events: []shared.WebhookEventTypeEnum{
                "crm.company.created",
                "crm.company.created",
                "crm.company.created",
            },
            Status: "enabled",
            UnifiedAPI: "crm",
        },
        XApideckAppID: "provident",
    }

    ctx := context.Background()
    res, err := s.Webhooks.WebhooksAdd(ctx, req, operations.WebhooksAddSecurity{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Webhooks

* `WebhooksAdd` - Create webhook subscription
* `WebhooksAll` - List webhook subscriptions
* `WebhooksDelete` - Delete webhook subscription
* `WebhooksExecute` - Execute a webhook
* `WebhooksOne` - Get webhook subscription
* `WebhooksResolve` - Resolve and Execute a connection webhook
* `WebhooksShortExecute` - Execute a webhook
* `WebhooksUpdate` - Update webhook subscription
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
