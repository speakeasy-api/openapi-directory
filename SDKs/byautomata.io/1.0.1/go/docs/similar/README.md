# Similar

### Available Operations

* [GetSimilar](#getsimilar) - Send a company website to receive a list of companies related to them.

## GetSimilar

Send a company website to receive a list of companies related to them.

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
    res, err := s.Similar.GetSimilar(ctx, operations.GetSimilarRequest{
        Link: "nulla",
        Page: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSimilar200ApplicationJSONObject != nil {
        // handle response
    }
}
```
