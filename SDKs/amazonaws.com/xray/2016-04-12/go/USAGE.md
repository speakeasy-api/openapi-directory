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
    
    req := operations.BatchGetTracesRequest{
        QueryParams: operations.BatchGetTracesQueryParams{
            NextToken: "modi",
        },
        Headers: operations.BatchGetTracesHeaders{
            XAmzAlgorithm: "doloribus",
            XAmzContentSha256: "dolorem",
            XAmzCredential: "quis",
            XAmzDate: "vel",
            XAmzSecurityToken: "magni",
            XAmzSignature: "architecto",
            XAmzSignedHeaders: "est",
        },
        Request: operations.BatchGetTracesRequestBody{
            NextToken: "consectetur",
            TraceIds: []string{
                "in",
                "aperiam",
                "possimus",
            },
        },
    }
    
    res, err := s.BatchGetTraces(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetTracesResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->