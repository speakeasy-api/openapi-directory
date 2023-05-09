# Search

### Available Operations

* [GetSearch](#getsearch) - Send search terms to receive the most relevant companies along with text snippets.

## GetSearch

Send search terms to receive the most relevant companies along with text snippets.

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
    res, err := s.Search.GetSearch(ctx, operations.GetSearchRequest{
        Page: sdk.String("quibusdam"),
        Terms: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSearch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
