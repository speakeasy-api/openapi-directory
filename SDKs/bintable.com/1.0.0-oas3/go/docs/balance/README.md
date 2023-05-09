# Balance

## Overview

Authorized users with API Key can call endpoints under this tag.

### Available Operations

* [BalanceLookup](#balancelookup) - Check Balance

## BalanceLookup

Get Account balance and expiry

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
    res, err := s.Balance.BalanceLookup(ctx, operations.BalanceLookupRequest{
        APIKey: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
