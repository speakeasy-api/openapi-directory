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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AddNotificationChannel(ctx, operations.AddNotificationChannelRequest{
        RequestBody: operations.AddNotificationChannelRequestBody{
            Config: operations.AddNotificationChannelRequestBodyConfig{
                Filters: &shared.NotificationFilterConfig{
                    MessageTypes: []shared.NotificationMessageTypeEnum{
                        shared.NotificationMessageTypeEnumNewAssociation,
                        shared.NotificationMessageTypeEnumSeverityUpgraded,
                        shared.NotificationMessageTypeEnumNewRecommendation,
                    },
                    Severities: []shared.InsightSeverityEnum{
                        shared.InsightSeverityEnumHigh,
                        shared.InsightSeverityEnumMedium,
                        shared.InsightSeverityEnumHigh,
                    },
                },
                Sns: &shared.SnsChannelConfig{
                    TopicArn: sdk.String("vel"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddNotificationChannelResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->