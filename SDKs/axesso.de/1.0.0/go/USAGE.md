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
    s := sdk.New()

    req := operations.KeywordSearchRequest{
        QueryParams: operations.KeywordSearchQueryParams{
            DomainCode: "corrupti",
            Keyword: "provident",
            NumberOfProducts: 715190,
            SortBy: "quibusdam",
        },
    }

    ctx := context.Background()
    res, err := s.Amz.KeywordSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.KeywordSearchResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->