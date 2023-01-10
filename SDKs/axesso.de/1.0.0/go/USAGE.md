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
            DomainCode: "aut",
            Keyword: "velit",
            NumberOfProducts: 8628636448964422193,
            SortBy: "non",
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