# Language

### Available Operations

* [Translate](#translate) - Translates input text inot a given language.

## Translate

Translates input text inot a given language.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Language.Translate(ctx, shared.TranslateRequest{
        From: sdk.String("illum"),
        Text: []string{
            "error",
            "deserunt",
        },
        To: sdk.String("suscipit"),
        TranslationContext: sdk.String("iure"),
    }, operations.TranslateSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TranslateResponse != nil {
        // handle response
    }
}
```
