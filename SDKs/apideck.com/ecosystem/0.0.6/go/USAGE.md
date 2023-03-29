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

    req := operations.CategoriesAllRequest{
        PathParams: operations.CategoriesAllPathParams{
            EcosystemID: "unde",
        },
        QueryParams: operations.CategoriesAllQueryParams{
            Cursor: "deserunt",
            Limit: 715190,
        },
    }

    ctx := context.Background()
    res, err := s.Category.CategoriesAll(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCategoriesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->