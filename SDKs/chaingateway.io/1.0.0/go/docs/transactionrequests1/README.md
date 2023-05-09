# TransactionRequests1

### Available Operations

* [Broadcasttransaction1](#broadcasttransaction1) - broadcastTransaction
* [Senderc201](#senderc201) - sendERC20
* [Senderc7211](#senderc7211) - sendERC721
* [Sendtransaction1](#sendtransaction1) - sendTransaction

## Broadcasttransaction1

Broadcast raw transactions

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
    res, err := s.TransactionRequests1.Broadcasttransaction1(ctx, operations.Broadcasttransaction1RequestBody{
        Data: sdk.String("0xf86b0685012a05f20082520894dfa04096652804362e4b7ae31835416974271e298609184e72a000808194a086277b0f2d7df91c9ce580171cd7f7be6e2c298727944a13fb40e5e9406ccb61a076105cefee8def061024dfb333a1bd47f629b52aae6621d2f2f39a0dccc3ac85"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Broadcasttransaction1200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Senderc201

sendERC20

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
    res, err := s.TransactionRequests1.Senderc201(ctx, operations.Senderc201RequestBody{
        Amount: sdk.Float64(0.1),
        Contractaddress: sdk.String("0x55d398326f99059fF775485246999027B3197955"),
        From: sdk.String("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce"),
        Gas: sdk.Float64(2645.55),
        Password: sdk.String("test123"),
        To: sdk.String("0xef4943d727e34280a2efa0b3352dfd61f508ee48"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Senderc7211

sendERC721

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
    res, err := s.TransactionRequests1.Senderc7211(ctx, operations.Senderc7211RequestBody{
        Contractaddress: sdk.String("0x55d398326f99059fF775485246999027B3197955"),
        From: sdk.String("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce"),
        Password: sdk.String("test123"),
        To: sdk.String("0xef4943d727e34280a2efa0b3352dfd61f508ee48"),
        Tokenid: sdk.Float64(123),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Sendtransaction1

sendTransaction

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
    res, err := s.TransactionRequests1.Sendtransaction1(ctx, operations.Sendtransaction1RequestBody{
        Amount: sdk.String("0.1"),
        From: sdk.String("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce"),
        Gas: sdk.Float64(1863.32),
        Password: sdk.String("test123"),
        To: sdk.String("0xef4943d727e34280a2efa0b3352dfd61f508ee48"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
