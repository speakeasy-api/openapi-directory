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
            NextToken: "corrupti",
        },
        Headers: operations.BatchGetTracesHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "quibusdam",
            XAmzDate: "unde",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "illum",
        },
        Request: operations.BatchGetTracesRequestBody{
            NextToken: "vel",
            TraceIds: []string{
                "deserunt",
                "suscipit",
                "iure",
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