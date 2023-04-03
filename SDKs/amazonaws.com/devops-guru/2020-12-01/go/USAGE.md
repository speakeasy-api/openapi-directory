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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AddNotificationChannelRequest{
        RequestBody: operations.AddNotificationChannelRequestBody{
            Config: operations.AddNotificationChannelRequestBodyConfig{
                Filters: &shared.NotificationFilterConfig{
                    MessageTypes: []shared.NotificationMessageTypeEnum{
                        "NEW_ASSOCIATION",
                        "SEVERITY_UPGRADED",
                        "NEW_RECOMMENDATION",
                    },
                    Severities: []shared.InsightSeverityEnum{
                        "HIGH",
                        "MEDIUM",
                        "HIGH",
                    },
                },
                Sns: &shared.SnsChannelConfig{
                    TopicArn: "vel",
                },
            },
        },
        XAmzAlgorithm: "error",
        XAmzContentSha256: "deserunt",
        XAmzCredential: "suscipit",
        XAmzDate: "iure",
        XAmzSecurityToken: "magnam",
        XAmzSignature: "debitis",
        XAmzSignedHeaders: "ipsa",
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