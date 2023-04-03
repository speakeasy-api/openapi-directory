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

    req := operations.AddNotificationChannelsRequest{
        RequestBody: operations.AddNotificationChannelsRequestBody{
            Channels: []shared.Channel{
                shared.Channel{
                    EventPublishers: []shared.EventPublisherEnum{
                        "AnomalyDetection",
                        "AnomalyDetection",
                        "AnomalyDetection",
                    },
                    ID: "distinctio",
                    URI: "https://outstanding-strait.name",
                },
                shared.Channel{
                    EventPublishers: []shared.EventPublisherEnum{
                        "AnomalyDetection",
                        "AnomalyDetection",
                        "AnomalyDetection",
                        "AnomalyDetection",
                    },
                    ID: "vel",
                    URI: "https://present-giggle.info",
                },
                shared.Channel{
                    EventPublishers: []shared.EventPublisherEnum{
                        "AnomalyDetection",
                        "AnomalyDetection",
                    },
                    ID: "debitis",
                    URI: "http://whirlwind-diver.info",
                },
            },
        },
        XAmzAlgorithm: "molestiae",
        XAmzContentSha256: "minus",
        XAmzCredential: "placeat",
        XAmzDate: "voluptatum",
        XAmzSecurityToken: "iusto",
        XAmzSignature: "excepturi",
        XAmzSignedHeaders: "nisi",
        ProfilingGroupName: "recusandae",
    }

    ctx := context.Background()
    res, err := s.AddNotificationChannels(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddNotificationChannelsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->