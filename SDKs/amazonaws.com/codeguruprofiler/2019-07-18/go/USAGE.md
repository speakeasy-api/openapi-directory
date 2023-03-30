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
            ProfilingGroupName: "corrupti",
        },
        Headers: operations.AddNotificationChannelsHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "quibusdam",
            XAmzDate: "unde",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "illum",
        },
        Request: operations.AddNotificationChannelsRequestBody{
            Channels: []shared.Channel{
                shared.Channel{
                    EventPublishers: []shared.EventPublisherEnum{
                        "AnomalyDetection",
                        "AnomalyDetection",
                        "AnomalyDetection",
                    },
                    ID: "deserunt",
                    URI: "http://innocent-effect.org",
                },
                shared.Channel{
                    EventPublishers: []shared.EventPublisherEnum{
                        "AnomalyDetection",
                    },
                    ID: "delectus",
                    URI: "http://hideous-jam.net",
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