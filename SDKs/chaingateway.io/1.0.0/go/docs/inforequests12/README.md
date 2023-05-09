# InfoRequests12

### Available Operations

* [Getbep20](#getbep20) - getBEP20
* [Getbep20balance](#getbep20balance) - getBEP20Balance
* [Getbinancecoinbalance](#getbinancecoinbalance) - getBinanceCoinBalance
* [Getblock2](#getblock2) - getBlock
* [Getgasprice2](#getgasprice2) - getGasPrice
* [Getlastblocknumber2](#getlastblocknumber2) - getLastBlocknumber
* [Getnftowner2](#getnftowner2) - getNFTOwner
* [Getnfturi2](#getnfturi2) - getNFTUri
* [Gettransaction2](#gettransaction2) - getTransaction
* [Gettransactionreceipt2](#gettransactionreceipt2) - getTransactionReceipt

## Getbep20

Receive information of a BEP20 address

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
    res, err := s.InfoRequests12.Getbep20(ctx, operations.Getbep20Request{
        Contract: "0xE6965B4F189DBDB2BD65e60aBAeb531B6fE9580B",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getbep20200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getbep20balance

Get the balance of a BEP20 address

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
    res, err := s.InfoRequests12.Getbep20balance(ctx, operations.Getbep20balanceRequest{
        Contract: "0x1dDB2C0897daF18632662E71fdD2dbDC0eB3a9Ec",
        TokenID: "0x9dB475371B5cC2913D3219f72e16a3F101339a05",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getbep20balance200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getbinancecoinbalance

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
    res, err := s.InfoRequests12.Getbinancecoinbalance(ctx, operations.GetbinancecoinbalanceRequest{
        Address: "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getbinancecoinbalance200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getblock2

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
    res, err := s.InfoRequests12.Getblock2(ctx, operations.Getblock2Request{
        Block: "2000",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getblock2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getgasprice2

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
    res, err := s.InfoRequests12.Getgasprice2(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getgasprice2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getlastblocknumber2

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
    res, err := s.InfoRequests12.Getlastblocknumber2(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getlastblocknumber2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getnftowner2

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
    res, err := s.InfoRequests12.Getnftowner2(ctx, operations.Getnftowner2Request{
        Contract: "0xE6965B4F189DBDB2BD65e60aBAeb531B6fE9580B",
        TokenID: "403706",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getnftowner2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getnfturi2

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
    res, err := s.InfoRequests12.Getnfturi2(ctx, operations.Getnfturi2Request{
        Contract: "0xE6965B4F189DBDB2BD65e60aBAeb531B6fE9580B",
        TokenID: "403706",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getnfturi2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Gettransaction2

Get info about a transaction

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
    res, err := s.InfoRequests12.Gettransaction2(ctx, operations.Gettransaction2Request{
        Transaction: "0x59ca89ea05be9a9e83958404924a2ae450fe8e691b1aeedecf3a3645c6f64534",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Gettransaction2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Gettransactionreceipt2

Get info about a transaction receipt

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
    res, err := s.InfoRequests12.Gettransactionreceipt2(ctx, operations.Gettransactionreceipt2Request{
        Transaction: "0x59ca89ea05be9a9e83958404924a2ae450fe8e691b1aeedecf3a3645c6f64534",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Gettransactionreceipt2200ApplicationJSONObject != nil {
        // handle response
    }
}
```
