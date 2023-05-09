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
    res, err := s.GetArticles(ctx, operations.GetArticlesRequest{
        Page: sdk.Int(548814),
        PerPage: sdk.Int(592845),
        Q: sdk.String("distinctio"),
        Top: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetArticlesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->