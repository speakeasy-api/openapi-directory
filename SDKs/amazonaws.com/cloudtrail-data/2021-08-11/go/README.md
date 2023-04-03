# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/cloudtrail-data/2021-08-11/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `PutAuditEvents` - Ingests your application events into CloudTrail Lake. A required parameter, <code>auditEvents</code>, accepts the JSON records (also called <i>payload</i>) of events that you want CloudTrail to ingest. You can add up to 100 of these events (or up to 1 MB) per <code>PutAuditEvents</code> request.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
