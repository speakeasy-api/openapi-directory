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
            EcosystemID: "itaque",
        },
        QueryParams: operations.CategoriesAllQueryParams{
            Cursor: "optio",
            Limit: 7998526504416170211,
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