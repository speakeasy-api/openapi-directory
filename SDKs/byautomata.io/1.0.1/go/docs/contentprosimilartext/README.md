# ContentproSimilarText

### Available Operations

* [PostContentproSimilarText](#postcontentprosimilartext) - The /contentpro-similar-text endpoint accepts and arbitrary piece of text and returns similar articles and blogs written by companies.

## PostContentproSimilarText

The /contentpro-similar-text endpoint accepts and arbitrary piece of text and returns similar articles and blogs written by companies.

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
    res, err := s.ContentproSimilarText.PostContentproSimilarText(ctx, operations.PostContentproSimilarTextRequestBody{
        Text: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostContentproSimilarText200ApplicationJSONObject != nil {
        // handle response
    }
}
```
