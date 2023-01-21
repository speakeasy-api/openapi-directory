<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.KeywordSearchRequest{
        QueryParams: operations.KeywordSearchQueryParams{
            DomainCode: "sit",
            Keyword: "voluptas",
            NumberOfProducts: 6050128673802995827,
            SortBy: "expedita",
        },
    }
    
    res, err := s.Amz.KeywordSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.KeywordSearchResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->