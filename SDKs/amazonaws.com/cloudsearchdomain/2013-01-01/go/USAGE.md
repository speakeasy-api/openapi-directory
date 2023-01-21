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
    
    req := operations.SearchRequest{
        QueryParams: operations.SearchQueryParams{
            Cursor: "sit",
            Expr: "voluptas",
            Facet: "culpa",
            Format: "sdk",
            Fq: "consequuntur",
            Highlight: "dolor",
            Partial: true,
            Pretty: "true",
            Q: "fugit",
            QOptions: "et",
            QParser: "simple",
            Return: "rerum",
            Size: 7837839688282259259,
            Sort: "debitis",
            Start: 5617773211005988520,
            Stats: "et",
        },
        Headers: operations.SearchHeaders{
            XAmzAlgorithm: "ut",
            XAmzContentSha256: "dolorem",
            XAmzCredential: "et",
            XAmzDate: "voluptate",
            XAmzSecurityToken: "iste",
            XAmzSignature: "vitae",
            XAmzSignedHeaders: "totam",
        },
    }
    
    res, err := s.Search(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->