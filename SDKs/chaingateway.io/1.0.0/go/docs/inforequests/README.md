# InfoRequests

### Available Operations

* [Getallerc20balance](#getallerc20balance) - getAllERC20Balance
* [Getblock](#getblock) - getBlock
* [Geterc20](#geterc20) - getERC20
* [Getethereumbalance](#getethereumbalance) - getEthereumBalance
* [Getgasprice](#getgasprice) - getGasPrice
* [Getlastblocknumber](#getlastblocknumber) - getLastBlockNumber
* [Getnftowner](#getnftowner) - getNFTOwner
* [Getnfturi](#getnfturi) - getNFTUri
* [Gettransaction](#gettransaction) - getTransaction
* [Gettransactionreceipt](#gettransactionreceipt) - getTransactionReceipt

## Getallerc20balance

Get the balance of an ERC20 address

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
    res, err := s.InfoRequests.Getallerc20balance(ctx, operations.Getallerc20balanceRequest{
        Address: "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce",
        Erc20Token: "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getallerc20balance200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getblock

Get information of a specific block

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
    res, err := s.InfoRequests.Getblock(ctx, operations.GetblockRequest{
        Block: "0xd9186b67ae0d3ee0777a607eeb195c5a9fb0affcd78ddcd7481efae4b258c9f5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getblock200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Geterc20

Get information about an ERC20 token

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
    res, err := s.InfoRequests.Geterc20(ctx, operations.Geterc20Request{
        Erc20Token: "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Geterc20200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getethereumbalance

Get the balance of an address

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
    res, err := s.InfoRequests.Getethereumbalance(ctx, operations.GetethereumbalanceRequest{
        Address: "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getethereumbalance200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getgasprice

Get gas price

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
    res, err := s.InfoRequests.Getgasprice(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getgasprice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getlastblocknumber

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
    res, err := s.InfoRequests.Getlastblocknumber(ctx, []byte("odit"))
    if err != nil {
        log.Fatal(err)
    }

    if res.Getlastblocknumber200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getnftowner

Get the Owner of an NFT

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
    res, err := s.InfoRequests.Getnftowner(ctx, operations.GetnftownerRequest{
        Contract: "0x9db475371b5cc2913d3219f72e16a3f101339a05",
        TokenID: "374",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getnftowner200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getnfturi

Get the URI of an NFT

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
    res, err := s.InfoRequests.Getnfturi(ctx, operations.GetnfturiRequest{
        Contract: "0x9db475371b5cc2913d3219f72e16a3f101339a05",
        TokenID: "374",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getnfturi200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Gettransaction

Get info about a transaction

You can choose if you want to get the Transaction encoded or decoded by add /decoded to your request. See examlpes for details

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
    res, err := s.InfoRequests.Gettransaction(ctx, operations.GettransactionRequest{
        Transaction: "0x0b361c13214a0d498b69d6ea86039fdf8e578f4b6e3b28db52a422f8ed3ea037",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Gettransaction200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Gettransactionreceipt

Get info about a transaction receipt

You can choose if you want to get the Transaction encoded or decoded by add /decoded to your request. See examlpes for details

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
    res, err := s.InfoRequests.Gettransactionreceipt(ctx, operations.GettransactionreceiptRequest{
        Transaction: "0x0b361c13214a0d498b69d6ea86039fdf8e578f4b6e3b28db52a422f8ed3ea037",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Gettransactionreceipt200ApplicationJSONObject != nil {
        // handle response
    }
}
```
