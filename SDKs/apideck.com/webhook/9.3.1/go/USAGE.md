<!-- Start SDK Example Usage -->
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
        XApideckAppID: "provident",
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
<!-- End SDK Example Usage -->