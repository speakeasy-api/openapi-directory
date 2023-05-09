<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Category.CategoriesAll(ctx, operations.CategoriesAllRequest{
        Cursor: sdk.String("corrupti"),
        EcosystemID: "provident",
        Limit: sdk.Int64(715190),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCategoriesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->