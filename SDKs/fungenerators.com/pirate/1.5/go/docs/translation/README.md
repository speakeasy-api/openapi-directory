# Translation

## Overview

Translate to pirate lingo

Find out more
<http://fungenerators.com/api/pirate/>
### Available Operations

* [GetPirateTranslate](#getpiratetranslate) - Translate from English to pirate.

## GetPirateTranslate

Translate from English to pirate.

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
    res, err := s.Translation.GetPirateTranslate(ctx, operations.GetPirateTranslateRequest{
        Text: "corrupti",
    }, operations.GetPirateTranslateSecurity{
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
