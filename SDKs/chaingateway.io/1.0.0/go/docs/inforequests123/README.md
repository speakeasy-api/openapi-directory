# InfoRequests123

### Available Operations

* [Getaccountresources](#getaccountresources) - getAccountResources
* [Getblock3](#getblock3) - getBlock
* [Getchainparameters](#getchainparameters) - getChainParameters
* [Getlastblocknumber3](#getlastblocknumber3) - getLastBlockNumber
* [Gettransaction3](#gettransaction3) - getTransaction
* [Gettransactionreceipt3](#gettransactionreceipt3) - getTransactionReceipt
* [Gettrc10balance](#gettrc10balance) - getTRC10Balance
* [Gettrc20balance](#gettrc20balance) - getTRC20Balance
* [Gettronbalance](#gettronbalance) - getTronBalance

## Getaccountresources

getAccountResources

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
    res, err := s.InfoRequests123.Getaccountresources(ctx, operations.GetaccountresourcesRequest{
        Address: "TVqA9huwk2NBUxbanUNx4NVPKXjzWZqkJt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getaccountresources200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getblock3

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
    res, err := s.InfoRequests123.Getblock3(ctx, operations.Getblock3Request{
        RequestBody: []byte("molestiae"),
        Block: "300",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getblock3200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getchainparameters

getChainParameters

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
    res, err := s.InfoRequests123.Getchainparameters(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getchainparameters200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getlastblocknumber3

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
    res, err := s.InfoRequests123.Getlastblocknumber3(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getlastblocknumber3200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Gettransaction3

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
    res, err := s.InfoRequests123.Gettransaction3(ctx, operations.Gettransaction3Request{
        RequestBody: []byte("quod"),
        Transaction: "dab6bb52e098232a2f115d56419124df1463ae60ac4f2effdb59984c550d8fa9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Gettransaction3200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Gettransactionreceipt3

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
    res, err := s.InfoRequests123.Gettransactionreceipt3(ctx, operations.Gettransactionreceipt3Request{
        Transaction: "dab6bb52e098232a2f115d56419124df1463ae60ac4f2effdb59984c550d8fa9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Gettransactionreceipt3200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Gettrc10balance

getTRC10Balance

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
    res, err := s.InfoRequests123.Gettrc10balance(ctx, operations.Gettrc10balanceRequest{
        Account: "TVqA9huwk2NBUxbanUNx4NVPKXjzWZqkJt",
        TokenID: "10020000",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Gettrc10balance200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Gettrc20balance

getTRC20Balance

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
    res, err := s.InfoRequests123.Gettrc20balance(ctx, operations.Gettrc20balanceRequest{
        RequestBody: &operations.Gettrc20balanceRequestBody{
            Contractaddress: sdk.String("TGTE9Eo4hrkotStM1iGHSKA7gobxZxPuwQ"),
            Tronaddress: sdk.String("TK84ZqTuFHUbfGs5BY5rMAbkMJAxdgbYB5"),
        },
        Account: "TVqA9huwk2NBUxbanUNx4NVPKXjzWZqkJt",
        Token: "TGTE9Eo4hrkotStM1iGHSKA7gobxZxPuwQ",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Gettrc20balance200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Gettronbalance

getTronBalance

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
    res, err := s.InfoRequests123.Gettronbalance(ctx, operations.GettronbalanceRequest{
        Address: "TSU2h3XdoW53hNkts2dQoXbJSNP1uL4r7A",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Gettronbalance200ApplicationJSONObject != nil {
        // handle response
    }
}
```
