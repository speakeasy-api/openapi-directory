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
            XApideckAppID: "sit",
        },
        Request: shared.CreateWebhookRequest{
            DeliveryURL: "voluptas",
            Description: "culpa",
            Events: []shared.WebhookEventTypeEnum{
                "crm.contact.created",
                "crm.contact.updated",
            },
            Status: "disabled",
            UnifiedAPI: "crm",
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