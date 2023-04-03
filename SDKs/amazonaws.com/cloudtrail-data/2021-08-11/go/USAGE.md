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

    req := operations.PutAuditEventsRequest{
        RequestBody: operations.PutAuditEventsRequestBody{
            AuditEvents: []shared.AuditEvent{
                shared.AuditEvent{
                    EventData: "provident",
                    EventDataChecksum: "distinctio",
                    ID: "quibusdam",
                },
                shared.AuditEvent{
                    EventData: "unde",
                    EventDataChecksum: "nulla",
                    ID: "corrupti",
                },
                shared.AuditEvent{
                    EventData: "illum",
                    EventDataChecksum: "vel",
                    ID: "error",
                },
            },
        },
        XAmzAlgorithm: "deserunt",
        XAmzContentSha256: "suscipit",
        XAmzCredential: "iure",
        XAmzDate: "magnam",
        XAmzSecurityToken: "debitis",
        XAmzSignature: "ipsa",
        XAmzSignedHeaders: "delectus",
        ChannelArn: "tempora",
        ExternalID: "suscipit",
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