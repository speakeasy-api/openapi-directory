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
            XApideckAppID: "nostrum",
        },
        Request: shared.CreateWebhookRequest{
            DeliveryURL: "occaecati",
            Description: "iste",
            Events: []shared.WebhookEventTypeEnum{
                "crm.opportunity.updated",
            },
            Status: "enabled",
            UnifiedAPI: "payroll",
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