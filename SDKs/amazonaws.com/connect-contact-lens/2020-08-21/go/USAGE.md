<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.ListRealtimeContactAnalysisSegmentsRequest{
        QueryParams: operations.ListRealtimeContactAnalysisSegmentsQueryParams{
            MaxResults: "quos",
            NextToken: "at",
        },
        Headers: operations.ListRealtimeContactAnalysisSegmentsHeaders{
            XAmzAlgorithm: "iusto",
            XAmzContentSha256: "et",
            XAmzCredential: "praesentium",
            XAmzDate: "consectetur",
            XAmzSecurityToken: "aut",
            XAmzSignature: "itaque",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.ListRealtimeContactAnalysisSegmentsRequestBody{
            ContactID: "voluptatem",
            InstanceID: "quasi",
            MaxResults: 2003396666103377113,
            NextToken: "rem",
        },
    }
    
    res, err := s.ListRealtimeContactAnalysisSegments(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRealtimeContactAnalysisSegmentsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->