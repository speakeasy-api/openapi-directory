# Lookup

## Overview

Authorized users with API Key can call this service

### Available Operations

* [BinLookup](#binlookup) - Lookup for bin

## BinLookup

By passing in the appropriate BIN, you can lookup for
card meta data in bintable.com API


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
    res, err := s.Lookup.BinLookup(ctx, operations.BinLookupRequest{
        APIKey: "distinctio",
        Bin: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseItems != nil {
        // handle response
    }
}
```
