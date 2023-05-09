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
    res, err := s.PutAuditEvents(ctx, operations.PutAuditEventsRequest{
        RequestBody: operations.PutAuditEventsRequestBody{
            AuditEvents: []shared.AuditEvent{
                shared.AuditEvent{
                    EventData: "provident",
                    EventDataChecksum: sdk.String("distinctio"),
                    ID: "d9d8d69a-674e-40f4-a7cc-8796ed151a05",
                },
                shared.AuditEvent{
                    EventData: "repellendus",
                    EventDataChecksum: sdk.String("sapiente"),
                    ID: "c2ddf7cc-78ca-41ba-928f-c816742cb739",
                },
                shared.AuditEvent{
                    EventData: "aspernatur",
                    EventDataChecksum: sdk.String("perferendis"),
                    ID: "5929396f-ea75-496e-b10f-aaa2352c5955",
                },
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("architecto"),
        ChannelArn: "mollitia",
        ExternalID: sdk.String("dolorem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAuditEventsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->