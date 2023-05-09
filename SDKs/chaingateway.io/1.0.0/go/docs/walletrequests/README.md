# WalletRequests

### Available Operations

* [Createwallet](#createwallet) - createWallet
* [Createwalletaddress](#createwalletaddress) - createWalletAddress
* [Deletewallet](#deletewallet) - deleteWallet
* [Exportaddressprivatekey](#exportaddressprivatekey) - exportAddressPrivateKey
* [Getwallet](#getwallet) - getWallet
* [Getwalletaddresses](#getwalletaddresses) - getWalletAddresses

## Createwallet

createWallet

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
    res, err := s.WalletRequests.Createwallet(ctx, operations.CreatewalletRequestBody{
        Password: sdk.String("test123"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Createwallet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Createwalletaddress

createWalletAddress

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
    res, err := s.WalletRequests.Createwalletaddress(ctx, operations.CreatewalletaddressRequest{
        RequestBody: map[string]interface{}{
            "dolor": "natus",
            "laboriosam": "hic",
            "saepe": "fuga",
        },
        WalletName: "Evolo_2163532",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Createwalletaddress200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Deletewallet

deleteWallet

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
    res, err := s.WalletRequests.Deletewallet(ctx, operations.DeletewalletRequest{
        RequestBody: &operations.DeletewalletRequestBody{
            Password: sdk.String("test123"),
        },
        Walletname: "Evolo_4215179",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deletewallet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Exportaddressprivatekey

exportAddressPrivateKey

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
    res, err := s.WalletRequests.Exportaddressprivatekey(ctx, operations.ExportaddressprivatekeyRequest{
        RequestBody: &operations.ExportaddressprivatekeyRequestBody{
            Password: sdk.String("test123"),
        },
        Address: "bc1qz3hdws5lt5ug7qwfv4m4ttanaq67ts77ekv95x",
        Name: "Evolo_4215179",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Exportaddressprivatekey200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getwallet

getWallet

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
    res, err := s.WalletRequests.Getwallet(ctx, []byte("in"))
    if err != nil {
        log.Fatal(err)
    }

    if res.Getwallet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getwalletaddresses

getWalletAddresses

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
    res, err := s.WalletRequests.Getwalletaddresses(ctx, operations.GetwalletaddressesRequest{
        WalletName: "Evolo_2163532",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getwalletaddresses200ApplicationJSONObject != nil {
        // handle response
    }
}
```
