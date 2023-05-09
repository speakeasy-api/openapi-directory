# ContentproSearch

### Available Operations

* [GetContentproSearch](#getcontentprosearch) - Send search terms to receive the most relevant articles and companies.

## GetContentproSearch

Send search terms to receive the most relevant articles and companies.

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
    res, err := s.ContentproSearch.GetContentproSearch(ctx, operations.GetContentproSearchRequest{
        Terms: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContentproSearch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
