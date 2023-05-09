# SDK

## Overview

The CloudTrail Data Service lets you ingest events into CloudTrail from any source in your hybrid environments, such as in-house or SaaS applications hosted on-premises or in the cloud, virtual machines, or containers. You can store, access, analyze, troubleshoot and take action on this data without maintaining multiple log aggregators and reporting tools. After you run <code>PutAuditEvents</code> to ingest your application activity into CloudTrail, you can use CloudTrail Lake to search, query, and analyze the data that is logged from your applications.

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloudtrail-data/>
### Available Operations

* [PutAuditEvents](#putauditevents) - Ingests your application events into CloudTrail Lake. A required parameter, <code>auditEvents</code>, accepts the JSON records (also called <i>payload</i>) of events that you want CloudTrail to ingest. You can add up to 100 of these events (or up to 1 MB) per <code>PutAuditEvents</code> request.

## PutAuditEvents

Ingests your application events into CloudTrail Lake. A required parameter, <code>auditEvents</code>, accepts the JSON records (also called <i>payload</i>) of events that you want CloudTrail to ingest. You can add up to 100 of these events (or up to 1 MB) per <code>PutAuditEvents</code> request.

### Example Usage

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
    res, err := s.SDK.PutAuditEvents(ctx, operations.PutAuditEventsRequest{
        RequestBody: operations.PutAuditEventsRequestBody{
            AuditEvents: []shared.AuditEvent{
                shared.AuditEvent{
                    EventData: "consequuntur",
                    EventDataChecksum: sdk.String("repellat"),
                    ID: "a9467739-251a-4a52-83f5-ad019da1ffe7",
                },
                shared.AuditEvent{
                    EventData: "praesentium",
                    EventDataChecksum: sdk.String("voluptatibus"),
                    ID: "097b0074-f154-471b-9e6e-13b99d488e1e",
                },
                shared.AuditEvent{
                    EventData: "sint",
                    EventDataChecksum: sdk.String("veritatis"),
                    ID: "e450ad2a-bd44-4269-802d-502a94bb4f63",
                },
            },
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("officia"),
        ChannelArn: "dolor",
        ExternalID: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutAuditEventsResponse != nil {
        // handle response
    }
}
```
