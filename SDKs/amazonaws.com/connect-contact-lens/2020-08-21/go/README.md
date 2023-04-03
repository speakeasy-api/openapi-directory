# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/connect-contact-lens/2020-08-21/go
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

    req := operations.ListRealtimeContactAnalysisSegmentsRequest{
        MaxResults: "corrupti",
        NextToken: "provident",
        RequestBody: operations.ListRealtimeContactAnalysisSegmentsRequestBody{
            ContactID: "distinctio",
            InstanceID: "quibusdam",
            MaxResults: 602763,
            NextToken: "nulla",
        },
        XAmzAlgorithm: "corrupti",
        XAmzContentSha256: "illum",
        XAmzCredential: "vel",
        XAmzDate: "error",
        XAmzSecurityToken: "deserunt",
        XAmzSignature: "suscipit",
        XAmzSignedHeaders: "iure",
    }

    ctx := context.Background()
    res, err := s.ListRealtimeContactAnalysisSegments(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRealtimeContactAnalysisSegmentsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `ListRealtimeContactAnalysisSegments` - Provides a list of analysis segments for a real-time analysis session.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
