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
            XAmzAlgorithm: "maxime",
            XAmzContentSha256: "quibusdam",
            XAmzCredential: "asperiores",
            XAmzDate: "provident",
            XAmzSecurityToken: "doloribus",
            XAmzSignature: "architecto",
            XAmzSignedHeaders: "est",
        },
        Request: operations.BatchAcknowledgeAlarmRequestBody{
            AcknowledgeActionRequests: []shared.AcknowledgeAlarmActionRequest{
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "odio",
                    KeyValue: "blanditiis",
                    Note: "voluptatem",
                    RequestID: "ea",
                },
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "eum",
                    KeyValue: "at",
                    Note: "fugit",
                    RequestID: "dolore",
                },
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "voluptatem",
                    KeyValue: "recusandae",
                    Note: "impedit",
                    RequestID: "odio",
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