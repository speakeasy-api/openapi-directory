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
            XAmzAlgorithm: "adipisci",
            XAmzContentSha256: "suscipit",
            XAmzCredential: "tempora",
            XAmzDate: "illum",
            XAmzSecurityToken: "quae",
            XAmzSignature: "aut",
            XAmzSignedHeaders: "consectetur",
        },
        Request: operations.BatchAcknowledgeAlarmRequestBody{
            AcknowledgeActionRequests: []shared.AcknowledgeAlarmActionRequest{
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "doloremque",
                    KeyValue: "neque",
                    Note: "sint",
                    RequestID: "iste",
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