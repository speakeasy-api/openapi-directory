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

    req := operations.BatchAcknowledgeAlarmRequest{
        RequestBody: operations.BatchAcknowledgeAlarmRequestBody{
            AcknowledgeActionRequests: []shared.AcknowledgeAlarmActionRequest{
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "provident",
                    KeyValue: "distinctio",
                    Note: "quibusdam",
                    RequestID: "unde",
                },
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "nulla",
                    KeyValue: "corrupti",
                    Note: "illum",
                    RequestID: "vel",
                },
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "error",
                    KeyValue: "deserunt",
                    Note: "suscipit",
                    RequestID: "iure",
                },
            },
        },
        XAmzAlgorithm: "magnam",
        XAmzContentSha256: "debitis",
        XAmzCredential: "ipsa",
        XAmzDate: "delectus",
        XAmzSecurityToken: "tempora",
        XAmzSignature: "suscipit",
        XAmzSignedHeaders: "molestiae",
    }

    ctx := context.Background()
    res, err := s.BatchAcknowledgeAlarm(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchAcknowledgeAlarmResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->