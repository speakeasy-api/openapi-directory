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
            MaxResults: "error",
            NextToken: "odit",
        },
        Headers: operations.ListRealtimeContactAnalysisSegmentsHeaders{
            XAmzAlgorithm: "repudiandae",
            XAmzContentSha256: "pariatur",
            XAmzCredential: "est",
            XAmzDate: "at",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "libero",
            XAmzSignedHeaders: "aperiam",
        },
        Request: operations.ListRealtimeContactAnalysisSegmentsRequestBody{
            ContactID: "voluptatem",
            InstanceID: "sunt",
            MaxResults: 5474918243671586608,
            NextToken: "quaerat",
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