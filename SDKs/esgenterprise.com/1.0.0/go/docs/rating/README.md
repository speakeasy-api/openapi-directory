# Rating

### Available Operations

* [GetSearch](#getsearch) - List all company ESG Ratings

## GetSearch

List all company ESG Ratings

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
    res, err := s.Rating.GetSearch(ctx, operations.GetSearchRequest{
        Q: "provident",
    }, operations.GetSearchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSearch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
