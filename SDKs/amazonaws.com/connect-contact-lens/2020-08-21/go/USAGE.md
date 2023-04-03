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