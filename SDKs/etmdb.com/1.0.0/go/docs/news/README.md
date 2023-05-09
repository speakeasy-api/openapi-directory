# News

### Available Operations

* [NewsSearchRead](#newssearchread) - Return news or article search result

## NewsSearchRead

Return news or article search result

### Response Class (Status 200)

* __{title}__: Used as a key word to search news and articles,

For more details on how news & articles are listed [see here][ref].
[ref]: https://etmdb.com/en/news-list/-updated_date

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.News.NewsSearchRead(ctx, operations.NewsSearchReadRequest{
        Title: "Mr.",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
