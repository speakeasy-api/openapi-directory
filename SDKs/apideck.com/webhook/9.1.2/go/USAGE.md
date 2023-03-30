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
        Security: operations.WebhooksAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Headers: operations.WebhooksAddHeaders{
            XApideckAppID: "corrupti",
        },
        Request: shared.CreateWebhookRequest{
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
    }

    ctx := context.Background()
    res, err := s.Webhooks.WebhooksAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWebhookResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->