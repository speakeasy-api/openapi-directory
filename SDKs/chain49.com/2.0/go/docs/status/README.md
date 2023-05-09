# Status

## Overview

 

### Available Operations

* [GetAvailableBlockchains](#getavailableblockchains) - List available blockchains
* [GetBlockchain](#getblockchain) - Blockchain Info Summary

## GetAvailableBlockchains

Get an array of active blockchains

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Option1: &shared.SecurityOption1{
                XAPIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Status.GetAvailableBlockchains(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAvailableBlockchains200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetBlockchain

Get basic summary of info relating to the currently selected blockchain

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Option1: &shared.SecurityOption1{
                XAPIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Status.GetBlockchain(ctx, operations.GetBlockchainRequest{
        Blockchain: "bitcoin",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBlockchain200ApplicationJSONObject != nil {
        // handle response
    }
}
```
