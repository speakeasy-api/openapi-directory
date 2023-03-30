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

    req := operations.SearchRequest{
        QueryParams: operations.SearchQueryParams{
            Cursor: "corrupti",
            Expr: "provident",
            Facet: "distinctio",
            Format: "sdk",
            Fq: "quibusdam",
            Highlight: "unde",
            Partial: false,
            Pretty: "true",
            Q: "nulla",
            QOptions: "corrupti",
            QParser: "dismax",
            Return: "vel",
            Size: 623564,
            Sort: "deserunt",
            Start: 384382,
            Stats: "iure",
        },
        Headers: operations.SearchHeaders{
            XAmzAlgorithm: "magnam",
            XAmzContentSha256: "debitis",
            XAmzCredential: "ipsa",
            XAmzDate: "delectus",
            XAmzSecurityToken: "tempora",
            XAmzSignature: "suscipit",
            XAmzSignedHeaders: "molestiae",
        },
    }

    ctx := context.Background()
    res, err := s.Search(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->