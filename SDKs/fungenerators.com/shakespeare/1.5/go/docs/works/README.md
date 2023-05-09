# Works

## Overview

Get Shakespeare Works via API

Find out more
<http://fungenerators.com/api/shakespeare/>
### Available Operations

* [GetShakespeareQuote](#getshakespearequote) - Get a random Shakespeare quote.

## GetShakespeareQuote

Get a random Shakespeare quote.

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
    res, err := s.Works.GetShakespeareQuote(ctx, operations.GetShakespeareQuoteSecurity{
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
