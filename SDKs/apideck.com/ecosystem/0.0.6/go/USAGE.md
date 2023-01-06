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
            EcosystemID: "nisi",
        },
        QueryParams: operations.CategoriesAllQueryParams{
            Cursor: "nihil",
            Limit: 7283220397995781483,
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