<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.WebhooksAddRequest{
        Security: operations.WebhooksAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Headers: operations.WebhooksAddHeaders{
            XApideckAppID: "rerum",
        },
        Request: shared.CreateWebhookRequest{
            DeliveryURL: "placeat",
            Description: "doloremque",
            Events: []shared.WebhookEventTypeEnum{
                "accounting.customer.updated",
                "lead.lead.updated",
                "pos.item.deleted",
            },
            Status: "disabled",
            UnifiedAPI: "file-storage",
        },
    }
    
    res, err := s.Webhooks.WebhooksAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWebhookResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->