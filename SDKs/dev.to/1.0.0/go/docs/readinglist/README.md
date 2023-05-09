# Readinglist

### Available Operations

* [GetReadinglist](#getreadinglist) - Readinglist

## GetReadinglist

This endpoint allows the client to retrieve a list of articles that were saved to a Users readinglist.
        It supports pagination, each page will contain `30` articles by default

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Readinglist.GetReadinglist(ctx, operations.GetReadinglistRequest{
        Page: sdk.Int(820994),
        PerPage: sdk.Int(13571),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ArticleIndices != nil {
        // handle response
    }
}
```
