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
            NextToken: "ut",
        },
        Headers: operations.BatchGetTracesHeaders{
            XAmzAlgorithm: "possimus",
            XAmzContentSha256: "iusto",
            XAmzCredential: "illum",
            XAmzDate: "ex",
            XAmzSecurityToken: "eos",
            XAmzSignature: "asperiores",
            XAmzSignedHeaders: "dicta",
        },
        Request: operations.BatchGetTracesRequestBody{
            NextToken: "sunt",
            TraceIds: []string{
                "omnis",
                "nobis",
                "et",
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