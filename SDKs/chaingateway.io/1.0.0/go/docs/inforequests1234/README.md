# InfoRequests1234

### Available Operations

* [Getblock4](#getblock4) - getBlock
* [Getblockchaininfo](#getblockchaininfo) - getBlockchaIninfo
* [Getfees](#getfees) - getFees
* [Getlastblocknumber4](#getlastblocknumber4) - getLastBlockNumber
* [Gettransaction4](#gettransaction4) - getTransaction

## Getblock4

getBlock

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
    res, err := s.InfoRequests1234.Getblock4(ctx, operations.Getblock4Request{
        RequestBody: []byte("quod"),
        Block: "737832",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getblock4200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getblockchaininfo

getBlockchaIninfo

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InfoRequests1234.Getblockchaininfo(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getblockchaininfo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getfees

The fees are parted into three categroies

fast (10min / 1 block)  
medium (30 min / 3 blocks)  
slow (60 min / 6 blocks)

this tells you in wich block distance your transaction get confirmed. A block is around \~10 minutes.

Please note that fees are dynamic by transaction size. This is only an estimation!

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InfoRequests1234.Getfees(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getfees200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getlastblocknumber4

Get the latest block number

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InfoRequests1234.Getlastblocknumber4(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getlastblocknumber4200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Gettransaction4

You can get your transaction decoded by add /decoded to your api call. If you want to get the transaction encoded, youst remove the /decoded part

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
    res, err := s.InfoRequests1234.Gettransaction4(ctx, operations.Gettransaction4Request{
        RequestBody: []byte("esse"),
        ID: "abf9fdf4144c999034075815455285c5a475d6e0203e4af7050844c8264f16e3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Gettransaction4200ApplicationJSONObject != nil {
        // handle response
    }
}
```
