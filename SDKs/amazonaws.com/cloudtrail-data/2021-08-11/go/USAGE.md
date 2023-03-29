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
            ChannelArn: "unde",
            ExternalID: "deserunt",
        },
        Headers: operations.PutAuditEventsHeaders{
            XAmzAlgorithm: "porro",
            XAmzContentSha256: "nulla",
            XAmzCredential: "id",
            XAmzDate: "vero",
            XAmzSecurityToken: "perspiciatis",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "nihil",
        },
        Request: operations.PutAuditEventsRequestBody{
            AuditEvents: []shared.AuditEvent{
                shared.AuditEvent{
                    EventData: "facilis",
                    EventDataChecksum: "eum",
                    ID: "iusto",
                },
                shared.AuditEvent{
                    EventData: "ullam",
                    EventDataChecksum: "saepe",
                    ID: "inventore",
                },
                shared.AuditEvent{
                    EventData: "sapiente",
                    EventDataChecksum: "enim",
                    ID: "eum",
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