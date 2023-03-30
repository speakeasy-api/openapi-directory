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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AddNotificationChannelRequest{
        Headers: operations.AddNotificationChannelHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.AddNotificationChannelRequestBody{
            Config: operations.AddNotificationChannelRequestBodyConfig{
                Filters: &shared.NotificationFilterConfig{
                    MessageTypes: []shared.NotificationMessageTypeEnum{
                        "NEW_ASSOCIATION",
                        "SEVERITY_UPGRADED",
                        "SEVERITY_UPGRADED",
                        "CLOSED_INSIGHT",
                    },
                    Severities: []shared.InsightSeverityEnum{
                        "LOW",
                        "HIGH",
                    },
                },
                Sns: &shared.SnsChannelConfig{
                    TopicArn: "ipsa",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.AddNotificationChannel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddNotificationChannelResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->