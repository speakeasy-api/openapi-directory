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
    res, err := s.Amz.KeywordSearch(ctx, operations.KeywordSearchRequest{
        DomainCode: "corrupti",
        Keyword: "provident",
        NumberOfProducts: sdk.Int64(715190),
        SortBy: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeywordSearchResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->