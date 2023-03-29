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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.BatchAcknowledgeAlarmRequestBody{
            AcknowledgeActionRequests: []shared.AcknowledgeAlarmActionRequest{
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "nihil",
                    KeyValue: "fuga",
                    Note: "facilis",
                    RequestID: "eum",
                },
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "iusto",
                    KeyValue: "ullam",
                    Note: "saepe",
                    RequestID: "inventore",
                },
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "sapiente",
                    KeyValue: "enim",
                    Note: "eum",
                    RequestID: "voluptatum",
                },
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "autem",
                    KeyValue: "vel",
                    Note: "non",
                    RequestID: "deleniti",
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