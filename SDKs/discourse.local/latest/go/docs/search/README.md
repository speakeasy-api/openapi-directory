# Search

### Available Operations

* [Search](#search) - Search for a term

## Search

Search for a term

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
    res, err := s.Search.Search(ctx, operations.SearchRequest{
        Page: sdk.Int64(831049),
        Q: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Search200ApplicationJSONObject != nil {
        // handle response
    }
}
```
