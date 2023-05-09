<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ListRealtimeContactAnalysisSegments(ctx, operations.ListRealtimeContactAnalysisSegmentsRequest{
        MaxResults: sdk.String("corrupti"),
        NextToken: sdk.String("provident"),
        RequestBody: operations.ListRealtimeContactAnalysisSegmentsRequestBody{
            ContactID: "distinctio",
            InstanceID: "quibusdam",
            MaxResults: sdk.Int64(602763),
            NextToken: sdk.String("nulla"),
        },
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRealtimeContactAnalysisSegmentsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->