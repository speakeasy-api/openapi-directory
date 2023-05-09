# Blocks

## Overview

 

### Available Operations

* [GetBlockHashV2](#getblockhashv2) - Get block hash V2
* [GetBlockV2](#getblockv2) - Get Block V2
* [GetRawBlockV2](#getrawblockv2) - Get raw block data V2

## GetBlockHashV2

Get block hash by its height

Note: Blockbook always follows the main chain of the backend it is attached to.

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
    res, err := s.Blocks.GetBlockHashV2(ctx, operations.GetBlockHashV2Request{
        BlockHeight: 15,
        Blockchain: "bitcoin",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBlockHashV2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetBlockV2

Returns information about block with transactions, subject to paging.

Note: Blockbook always follows the main chain of the backend it is attached to. If there is a rollback-reorg in the backend, Blockbook will also do rollback. When you ask for block by height, you will always get the main chain block. If you ask for block by hash, you may get the block from another fork but it is not guaranteed (backend may not keep it)

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
    res, err := s.Blocks.GetBlockV2(ctx, operations.GetBlockV2Request{
        BlockHashOrHeight: "00000000000000000035835503f43c878ebb643f3b40bdfd0dfda760da74e73c",
        Blockchain: "bitcoin",
        Page: sdk.Int64(1),
        PageSize: sdk.Int64(1000),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBlockV2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetRawBlockV2

Returns the raw hex-encoded block data for a given block hash or height

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
    res, err := s.Blocks.GetRawBlockV2(ctx, operations.GetRawBlockV2Request{
        BlockHashOrHeight: "00000000000000000035835503f43c878ebb643f3b40bdfd0dfda760da74e73c",
        Blockchain: "bitcoin",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRawBlockV2200ApplicationJSONObject != nil {
        // handle response
    }
}
```
