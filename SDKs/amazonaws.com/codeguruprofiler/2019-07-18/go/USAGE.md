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

    req := operations.AddNotificationChannelsRequest{
        PathParams: operations.AddNotificationChannelsPathParams{
            ProfilingGroupName: "unde",
        },
        Headers: operations.AddNotificationChannelsHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
        },
        Request: operations.AddNotificationChannelsRequestBody{
            Channels: []shared.Channel{
                shared.Channel{
                    EventPublishers: []shared.EventPublisherEnum{
                        "AnomalyDetection",
                        "AnomalyDetection",
                        "AnomalyDetection",
                    },
                    ID: "ullam",
                    URI: "https://anahi.org",
                },
                shared.Channel{
                    EventPublishers: []shared.EventPublisherEnum{
                        "AnomalyDetection",
                        "AnomalyDetection",
                    },
                    ID: "autem",
                    URI: "https://june.info",
                },
            },
        },
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