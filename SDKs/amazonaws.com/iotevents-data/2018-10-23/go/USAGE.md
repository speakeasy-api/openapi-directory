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

    req := operations.BatchAcknowledgeAlarmRequest{
        Headers: operations.BatchAcknowledgeAlarmHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.BatchAcknowledgeAlarmRequestBody{
            AcknowledgeActionRequests: []shared.AcknowledgeAlarmActionRequest{
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "vel",
                    KeyValue: "error",
                    Note: "deserunt",
                    RequestID: "suscipit",
                },
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "iure",
                    KeyValue: "magnam",
                    Note: "debitis",
                    RequestID: "ipsa",
                },
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "delectus",
                    KeyValue: "tempora",
                    Note: "suscipit",
                    RequestID: "molestiae",
                },
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "minus",
                    KeyValue: "placeat",
                    Note: "voluptatum",
                    RequestID: "iusto",
                },
            },
        },
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