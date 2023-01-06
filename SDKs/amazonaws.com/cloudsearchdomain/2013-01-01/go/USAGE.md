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
            Cursor: "aliquid",
            Expr: "quo",
            Facet: "quo",
            Format: "sdk",
            Fq: "illo",
            Highlight: "enim",
            Partial: true,
            Pretty: "true",
            Q: "eum",
            QOptions: "mollitia",
            QParser: "simple",
            Return: "inventore",
            Size: 5324849402215173012,
            Sort: "sint",
            Start: 6739391682417389115,
            Stats: "sed",
        },
        Headers: operations.SearchHeaders{
            XAmzAlgorithm: "omnis",
            XAmzContentSha256: "consectetur",
            XAmzCredential: "ducimus",
            XAmzDate: "consequatur",
            XAmzSecurityToken: "non",
            XAmzSignature: "vel",
            XAmzSignedHeaders: "at",
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