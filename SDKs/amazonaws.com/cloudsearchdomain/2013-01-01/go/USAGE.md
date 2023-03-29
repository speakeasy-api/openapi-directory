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
            Cursor: "unde",
            Expr: "deserunt",
            Facet: "porro",
            Format: "sdk",
            Fq: "id",
            Highlight: "vero",
            Partial: false,
            Pretty: "true",
            Q: "nulla",
            QOptions: "nihil",
            QParser: "lucene",
            Return: "facilis",
            Size: 384382,
            Sort: "iusto",
            Start: 297534,
            Stats: "saepe",
        },
        Headers: operations.SearchHeaders{
            XAmzAlgorithm: "inventore",
            XAmzContentSha256: "sapiente",
            XAmzCredential: "enim",
            XAmzDate: "eum",
            XAmzSecurityToken: "voluptatum",
            XAmzSignature: "autem",
            XAmzSignedHeaders: "vel",
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