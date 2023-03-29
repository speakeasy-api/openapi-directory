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

    req := operations.ListRealtimeContactAnalysisSegmentsRequest{
        QueryParams: operations.ListRealtimeContactAnalysisSegmentsQueryParams{
            MaxResults: "unde",
            NextToken: "deserunt",
        },
        Headers: operations.ListRealtimeContactAnalysisSegmentsHeaders{
            XAmzAlgorithm: "porro",
            XAmzContentSha256: "nulla",
            XAmzCredential: "id",
            XAmzDate: "vero",
            XAmzSecurityToken: "perspiciatis",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "nihil",
        },
        Request: operations.ListRealtimeContactAnalysisSegmentsRequestBody{
            ContactID: "fuga",
            InstanceID: "facilis",
            MaxResults: 384382,
            NextToken: "iusto",
        },
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