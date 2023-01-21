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
            MaxResults: "sit",
            NextToken: "voluptas",
        },
        Headers: operations.ListRealtimeContactAnalysisSegmentsHeaders{
            XAmzAlgorithm: "culpa",
            XAmzContentSha256: "expedita",
            XAmzCredential: "consequuntur",
            XAmzDate: "dolor",
            XAmzSecurityToken: "expedita",
            XAmzSignature: "voluptas",
            XAmzSignedHeaders: "fugit",
        },
        Request: operations.ListRealtimeContactAnalysisSegmentsRequestBody{
            ContactID: "et",
            InstanceID: "nihil",
            MaxResults: 8325060299420976708,
            NextToken: "dicta",
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