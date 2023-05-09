# Translation

## Overview

Translate to Shakespeare English

Find out more
<http://fungenerators.com/api/shakespeare/>
### Available Operations

* [GetShakespeareTranslate](#getshakespearetranslate) - Translate from English to Shakespeare English.

## GetShakespeareTranslate

Translate from English to Shakespeare English.

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
    res, err := s.Translation.GetShakespeareTranslate(ctx, operations.GetShakespeareTranslateRequest{
        Text: "corrupti",
    }, operations.GetShakespeareTranslateSecurity{
        XFungeneratorsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
