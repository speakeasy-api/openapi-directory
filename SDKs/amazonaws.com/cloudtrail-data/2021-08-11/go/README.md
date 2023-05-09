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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PutAuditEvents(ctx, operations.PutAuditEventsRequest{
        RequestBody: operations.PutAuditEventsRequestBody{
            AuditEvents: []shared.AuditEvent{
                shared.AuditEvent{
                    EventData: "provident",
                    EventDataChecksum: sdk.String("distinctio"),
                    ID: "d9d8d69a-674e-40f4-a7cc-8796ed151a05",
                },
                shared.AuditEvent{
                    EventData: "repellendus",
                    EventDataChecksum: sdk.String("sapiente"),
                    ID: "c2ddf7cc-78ca-41ba-928f-c816742cb739",
                },
                shared.AuditEvent{
                    EventData: "aspernatur",
                    EventDataChecksum: sdk.String("perferendis"),
                    ID: "5929396f-ea75-496e-b10f-aaa2352c5955",
                },
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("culpa"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("architecto"),
        ChannelArn: "mollitia",
        ExternalID: sdk.String("dolorem"),
    })
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

### [SDK](docs/sdk/README.md)

* [PutAuditEvents](docs/sdk/README.md#putauditevents) - Ingests your application events into CloudTrail Lake. A required parameter, <code>auditEvents</code>, accepts the JSON records (also called <i>payload</i>) of events that you want CloudTrail to ingest. You can add up to 100 of these events (or up to 1 MB) per <code>PutAuditEvents</code> request.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
