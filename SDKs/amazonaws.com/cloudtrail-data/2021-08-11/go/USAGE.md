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

    req := operations.PutAuditEventsRequest{
        QueryParams: operations.PutAuditEventsQueryParams{
            ChannelArn: "corrupti",
            ExternalID: "provident",
        },
        Headers: operations.PutAuditEventsHeaders{
            XAmzAlgorithm: "distinctio",
            XAmzContentSha256: "quibusdam",
            XAmzCredential: "unde",
            XAmzDate: "nulla",
            XAmzSecurityToken: "corrupti",
            XAmzSignature: "illum",
            XAmzSignedHeaders: "vel",
        },
        Request: operations.PutAuditEventsRequestBody{
            AuditEvents: []shared.AuditEvent{
                shared.AuditEvent{
                    EventData: "deserunt",
                    EventDataChecksum: "suscipit",
                    ID: "iure",
                },
                shared.AuditEvent{
                    EventData: "magnam",
                    EventDataChecksum: "debitis",
                    ID: "ipsa",
                },
                shared.AuditEvent{
                    EventData: "delectus",
                    EventDataChecksum: "tempora",
                    ID: "suscipit",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.PutAuditEvents(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAuditEventsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->