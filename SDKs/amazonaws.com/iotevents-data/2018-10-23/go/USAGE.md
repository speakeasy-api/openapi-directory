<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.BatchAcknowledgeAlarmRequest{
        Headers: operations.BatchAcknowledgeAlarmHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.BatchAcknowledgeAlarmRequestBody{
            AcknowledgeActionRequests: []shared.AcknowledgeAlarmActionRequest{
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "fugit",
                    KeyValue: "et",
                    Note: "nihil",
                    RequestID: "rerum",
                },
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "dicta",
                    KeyValue: "debitis",
                    Note: "voluptatum",
                    RequestID: "et",
                },
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "ut",
                    KeyValue: "dolorem",
                    Note: "et",
                    RequestID: "voluptate",
                },
            },
        },
    }
    
    res, err := s.BatchAcknowledgeAlarm(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchAcknowledgeAlarmResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->