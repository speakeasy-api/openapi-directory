# InfoRequests1

### Available Operations

* [Getblock1](#getblock1) - getBlock
* [Geterc201](#geterc201) - getERC20
* [Geterc20balance1](#geterc20balance1) - getERC20Balance
* [Getgasprice1](#getgasprice1) - getGasPrice
* [Getlastblocknumber1](#getlastblocknumber1) - getLastBlockNumber
* [Getnftowner1](#getnftowner1) - getNFTOwner
* [Getnfturi1](#getnfturi1) - getNFTUri
* [Getpolygonbalance](#getpolygonbalance) - getPolygonBalance
* [Gettransaction1](#gettransaction1) - getTransaction
* [Gettransactionreceipt1](#gettransactionreceipt1) - getTransactionReceipt

## Getblock1

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
    res, err := s.InfoRequests1.Getblock1(ctx, operations.Getblock1Request{
        Block: "0xd9186b67ae0d3ee0777a607eeb195c5a9fb0affcd78ddcd7481efae4b258c9f5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getblock1200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Geterc201

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
    res, err := s.InfoRequests1.Geterc201(ctx, operations.Geterc201Request{
        Erc20Token: "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Geterc201200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Geterc20balance1

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
    res, err := s.InfoRequests1.Geterc20balance1(ctx, operations.Geterc20balance1Request{
        Address: "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce",
        Erc20Token: "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Geterc20balance1200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getgasprice1

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
    res, err := s.InfoRequests1.Getgasprice1(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getgasprice1200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getlastblocknumber1

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
    res, err := s.InfoRequests1.Getlastblocknumber1(ctx, []byte("at"))
    if err != nil {
        log.Fatal(err)
    }

    if res.Getlastblocknumber1200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getnftowner1

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
    res, err := s.InfoRequests1.Getnftowner1(ctx, operations.Getnftowner1Request{
        Contract: "0xd9186b67ae0d3ee0777a607eeb195c5a9fb0affcd78ddcd7481efae4b258c9f5",
        TokenID: "374",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getnftowner1200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getnfturi1

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
    res, err := s.InfoRequests1.Getnfturi1(ctx, operations.Getnfturi1Request{
        FtContract: "at",
        TokenID: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getnfturi1200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getpolygonbalance

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
    res, err := s.InfoRequests1.Getpolygonbalance(ctx, operations.GetpolygonbalanceRequest{
        Address: "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getpolygonbalance200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Gettransaction1

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
    res, err := s.InfoRequests1.Gettransaction1(ctx, operations.Gettransaction1Request{
        Transaction: "0x0b361c13214a0d498b69d6ea86039fdf8e578f4b6e3b28db52a422f8ed3ea037",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Gettransaction1200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Gettransactionreceipt1

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
    res, err := s.InfoRequests1.Gettransactionreceipt1(ctx, operations.Gettransactionreceipt1Request{
        Transaction: "0x0b361c13214a0d498b69d6ea86039fdf8e578f4b6e3b28db52a422f8ed3ea037",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Gettransactionreceipt1200ApplicationJSONObject != nil {
        // handle response
    }
}
```
