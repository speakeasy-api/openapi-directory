# TransactionRequests

## Overview

Requests to send Tokens, Ethereum and clear addresses

### Available Operations

* [ClearAddress](#clearaddress) - clearAddress
* [SendEthereum](#sendethereum) - sendEthereum
* [SendToken](#sendtoken) - sendToken

## ClearAddress

Sends all available ethereum funds of an address to a specified receiver address.

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
    res, err := s.TransactionRequests.ClearAddress(ctx, operations.ClearAddressRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        ClearAddressRequest: shared.ClearAddressRequest{
            Ethereumaddress: "dolor",
            Newaddress: "natus",
            Password: "laboriosam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClearAddress != nil {
        // handle response
    }
}
```

## SendEthereum

Sends ethereum from an address controlled by the account to a specified receiver address.

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
    res, err := s.TransactionRequests.SendEthereum(ctx, operations.SendEthereumRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        SendEthereumRequest: shared.SendEthereumRequest{
            Amount: 9437.49,
            From: "saepe",
            Password: "fuga",
            To: "in",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendEthereum != nil {
        // handle response
    }
}
```

## SendToken

Sends ERC20 tokens from an address controlled by the account to a specified receiver address. The token contract address is needed to specify the token. The use of the identifier parameter is recommend and awaits an unique string. Whenever a transaction is beeing sent, the identifier is checked and the transaction gets dropped if there is one with that identifier already.

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
    res, err := s.TransactionRequests.SendToken(ctx, operations.SendTokenRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        SendTokenRequest: shared.SendTokenRequest{
            Amount: 359508,
            Contractaddress: "iste",
            From: "iure",
            Identifier: "saepe",
            Password: "quidem",
            To: "architecto",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendToken != nil {
        // handle response
    }
}
```
