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
            Cursor: "cumque",
            Expr: "occaecati",
            Facet: "iusto",
            Format: "sdk",
            Fq: "deserunt",
            Highlight: "maiores",
            Partial: false,
            Pretty: "true",
            Q: "dolorem",
            QOptions: "ratione",
            QParser: "dismax",
            Return: "excepturi",
            Size: 3784438660469815446,
            Sort: "quo",
            Start: 4099325840936144508,
            Stats: "vel",
        },
        Headers: operations.SearchHeaders{
            XAmzAlgorithm: "optio",
            XAmzContentSha256: "at",
            XAmzCredential: "a",
            XAmzDate: "rerum",
            XAmzSecurityToken: "repudiandae",
            XAmzSignature: "praesentium",
            XAmzSignedHeaders: "tempora",
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