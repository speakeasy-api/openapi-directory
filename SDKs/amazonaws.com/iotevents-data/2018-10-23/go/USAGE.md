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
    res, err := s.BatchAcknowledgeAlarm(ctx, operations.BatchAcknowledgeAlarmRequest{
        RequestBody: operations.BatchAcknowledgeAlarmRequestBody{
            AcknowledgeActionRequests: []shared.AcknowledgeAlarmActionRequest{
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "provident",
                    KeyValue: sdk.String("distinctio"),
                    Note: sdk.String("quibusdam"),
                    RequestID: "unde",
                },
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "nulla",
                    KeyValue: sdk.String("corrupti"),
                    Note: sdk.String("illum"),
                    RequestID: "vel",
                },
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "error",
                    KeyValue: sdk.String("deserunt"),
                    Note: sdk.String("suscipit"),
                    RequestID: "iure",
                },
            },
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchAcknowledgeAlarmResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->