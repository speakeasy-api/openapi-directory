# InfoRequests

## Overview

Requests that return information on balances, transactions, gas price, exchange rates, ...

### Available Operations

* [GetBlock](#getblock) - getBlock
* [GetEthereumBalance](#getethereumbalance) - getEthereumBalance
* [GetExchangeRate](#getexchangerate) - getExchangeRate
* [GetGasPrice](#getgasprice) - getGasPrice
* [GetLastBlockNumber](#getlastblocknumber) - getLastBlockNumber
* [GetToken](#gettoken) - getToken
* [GetTokenBalance](#gettokenbalance) - getTokenBalance
* [GetTransactions](#gettransactions) - getTransactions

## GetBlock

Returns information of an ethereum block with or without transactions

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InfoRequests.GetBlock(ctx, operations.GetBlockRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        GetBlockRequest: shared.GetBlockRequest{
            Block: "molestiae",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBlock != nil {
        // handle response
    }
}
```

## GetEthereumBalance

Returns the ethereum balance of a given address.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InfoRequests.GetEthereumBalance(ctx, operations.GetEthereumBalanceRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        GetEthereumBalanceRequest: shared.GetEthereumBalanceRequest{
            Ethereumaddress: "modi",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEthereumBalance != nil {
        // handle response
    }
}
```

## GetExchangeRate

Returns the current Ethereum price in Euro or US Dollar.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InfoRequests.GetExchangeRate(ctx, operations.GetExchangeRateRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        GetExchangeRateRequest: shared.GetExchangeRateRequest{
            Currency: "qui",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetExchangeRate != nil {
        // handle response
    }
}
```

## GetGasPrice

Returns the current gas price in GWEI.

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
    res, err := s.InfoRequests.GetGasPrice(ctx, operations.GetGasPriceRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        ContentType: "application/json",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGasPrice != nil {
        // handle response
    }
}
```

## GetLastBlockNumber

Returns the block number of the last mined ethereum block.

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
    res, err := s.InfoRequests.GetLastBlockNumber(ctx, operations.GetLastBlockNumberRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        ContentType: "application/json",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLastBlockNumber != nil {
        // handle response
    }
}
```

## GetToken

Returns information about a specific ERC20 token like name, symbol, decimal places and total supply.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InfoRequests.GetToken(ctx, operations.GetTokenRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        GetTokenRequest: shared.GetTokenRequest{
            Contractaddress: "impedit",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetToken != nil {
        // handle response
    }
}
```

## GetTokenBalance

Returns the token balance of a given address.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InfoRequests.GetTokenBalance(ctx, operations.GetTokenBalanceRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        GetTokenBalanceRequest: shared.GetTokenBalanceRequest{
            Contractaddress: "cum",
            Ethereumaddress: "esse",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTokenBalance != nil {
        // handle response
    }
}
```

## GetTransactions

Returns information like confirmations, token contract address, amount, gas price and more of a given transaction.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InfoRequests.GetTransactions(ctx, operations.GetTransactionsRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        GetTransactionsRequest: shared.GetTransactionsRequest{
            Txid: "ipsum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTransactions != nil {
        // handle response
    }
}
```
