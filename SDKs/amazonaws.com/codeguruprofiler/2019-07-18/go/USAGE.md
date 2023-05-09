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
    res, err := s.AddNotificationChannels(ctx, operations.AddNotificationChannelsRequest{
        RequestBody: operations.AddNotificationChannelsRequestBody{
            Channels: []shared.Channel{
                shared.Channel{
                    EventPublishers: []shared.EventPublisherEnum{
                        shared.EventPublisherEnumAnomalyDetection,
                        shared.EventPublisherEnumAnomalyDetection,
                        shared.EventPublisherEnumAnomalyDetection,
                    },
                    ID: sdk.String("bd9d8d69-a674-4e0f-867c-c8796ed151a0"),
                    URI: "http://sympathetic-viewer.net",
                },
                shared.Channel{
                    EventPublishers: []shared.EventPublisherEnum{
                        shared.EventPublisherEnumAnomalyDetection,
                    },
                    ID: sdk.String("ddf7cc78-ca1b-4a92-8fc8-16742cb73920"),
                    URI: "http://perky-charset.name",
                },
                shared.Channel{
                    EventPublishers: []shared.EventPublisherEnum{
                        shared.EventPublisherEnumAnomalyDetection,
                    },
                    ID: sdk.String("96fea759-6eb1-40fa-aa23-52c5955907af"),
                    URI: "https://buttery-petitioner.biz",
                },
            },
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("commodi"),
        ProfilingGroupName: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddNotificationChannelsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->