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

    req := operations.BatchGetTracesRequest{
        QueryParams: operations.BatchGetTracesQueryParams{
            NextToken: "unde",
        },
        Headers: operations.BatchGetTracesHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
        },
        Request: operations.BatchGetTracesRequestBody{
            NextToken: "nihil",
            TraceIds: []string{
                "facilis",
                "eum",
                "iusto",
            },
        },
    }

    ctx := context.Background()
    res, err := s.BatchGetTraces(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetTracesResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->