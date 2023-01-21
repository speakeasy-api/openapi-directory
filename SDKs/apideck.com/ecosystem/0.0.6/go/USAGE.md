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
    
    req := operations.CategoriesAllRequest{
        PathParams: operations.CategoriesAllPathParams{
            EcosystemID: "sit",
        },
        QueryParams: operations.CategoriesAllQueryParams{
            Cursor: "voluptas",
            Limit: 6050128673802995827,
        },
    }
    
    res, err := s.Category.CategoriesAll(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCategoriesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->