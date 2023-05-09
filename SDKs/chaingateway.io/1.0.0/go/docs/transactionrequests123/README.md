# TransactionRequests123

### Available Operations

* [Sendtransaction3](#sendtransaction3) - sendTransaction
* [Sendtrc10](#sendtrc10) - sendTRC10
* [Sendtrc20](#sendtrc20) - sendTRC20
* [Sendtrc721](#sendtrc721) - sendTRC721

## Sendtransaction3

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
    res, err := s.TransactionRequests123.Sendtransaction3(ctx, operations.Sendtransaction3RequestBody{
        Amount: sdk.String("1"),
        Privatekey: sdk.String("92a5a62fdf7290244b564450f4ab10a5ea796f234aa6aded322c826ad40efb9c"),
        To: sdk.String("TEZU8f2twTLYJ8XPfLrRAXNCNqVt5xtV1M"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Sendtransaction3200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Sendtrc10

sendTRC10

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
    res, err := s.TransactionRequests123.Sendtrc10(ctx, operations.Sendtrc10RequestBody{
        Amount: sdk.String("0.000001"),
        Privatekey: sdk.String("92a5a62fdf7290244b564450f4ab10a5ea796f234aa6aded322c826ad40efb9c"),
        To: sdk.String("TEZU8f2twTLYJ8XPfLrRAXNCNqVt5xtV1M"),
        TokenID: sdk.Float64(1002000),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Sendtrc10200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Sendtrc20

sendTRC20

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
    res, err := s.TransactionRequests123.Sendtrc20(ctx, operations.Sendtrc20RequestBody{
        Amount: sdk.String("0.1"),
        Contractaddress: sdk.String("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"),
        From: sdk.String("TPbJ4q2wZP2UpsE7ME3bxewS5pKAdWZwCj"),
        Privatekey: sdk.String("privatekey"),
        To: sdk.String("TEZU8f2twTLYJ8XPfLrRAXNCNqVt5xtV1M"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Sendtrc20200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Sendtrc721

sendTRC721

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
    res, err := s.TransactionRequests123.Sendtrc721(ctx, []byte("cum"))
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
