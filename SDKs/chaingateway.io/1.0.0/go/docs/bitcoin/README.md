# Bitcoin

### Available Operations

* [Createwallet](#createwallet) - createWallet
* [Createwalletaddress](#createwalletaddress) - createWalletAddress
* [Deletewallet](#deletewallet) - deleteWallet
* [Exportaddressprivatekey](#exportaddressprivatekey) - exportAddressPrivateKey
* [Getblock4](#getblock4) - getBlock
* [Getblockchaininfo](#getblockchaininfo) - getBlockchaIninfo
* [Getfees](#getfees) - getFees
* [Getlastblocknumber4](#getlastblocknumber4) - getLastBlockNumber
* [Gettransaction4](#gettransaction4) - getTransaction
* [Getwallet](#getwallet) - getWallet
* [Getwalletaddresses](#getwalletaddresses) - getWalletAddresses
* [Listfailedipns4](#listfailedipns4) - listFailedIPNs
* [Listsubscribedaddresses4](#listsubscribedaddresses4) - listSubscribedAddresses
* [Resendfailedipn4](#resendfailedipn4) - resendFailedIPN
* [Sendtransaction4](#sendtransaction4) - sendTransaction
* [Subscribeaddress4](#subscribeaddress4) - subscribeAddress
* [Unsubscribeaddress4](#unsubscribeaddress4) - unsubscribeAddress

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
    res, err := s.Bitcoin.Createwallet(ctx, operations.CreatewalletRequestBody{
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
    res, err := s.Bitcoin.Createwalletaddress(ctx, operations.CreatewalletaddressRequest{
        RequestBody: map[string]interface{}{
            "deserunt": "suscipit",
            "iure": "magnam",
            "debitis": "ipsa",
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
    res, err := s.Bitcoin.Deletewallet(ctx, operations.DeletewalletRequest{
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
    res, err := s.Bitcoin.Exportaddressprivatekey(ctx, operations.ExportaddressprivatekeyRequest{
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
    res, err := s.Bitcoin.Getblock4(ctx, operations.Getblock4Request{
        RequestBody: []byte("delectus"),
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
    res, err := s.Bitcoin.Getblockchaininfo(ctx)
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
    res, err := s.Bitcoin.Getfees(ctx)
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
    res, err := s.Bitcoin.Getlastblocknumber4(ctx)
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
    res, err := s.Bitcoin.Gettransaction4(ctx, operations.Gettransaction4Request{
        RequestBody: []byte("tempora"),
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
    res, err := s.Bitcoin.Getwallet(ctx, []byte("suscipit"))
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
    res, err := s.Bitcoin.Getwalletaddresses(ctx, operations.GetwalletaddressesRequest{
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

## Listfailedipns4

Returns all subscriptions/IPNs created with an account.

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
    res, err := s.Bitcoin.Listfailedipns4(ctx, []byte("molestiae"))
    if err != nil {
        log.Fatal(err)
    }

    if res.Listfailedipns4200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Listsubscribedaddresses4

Returns all subscriptions/IPNs created with an account.

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
    res, err := s.Bitcoin.Listsubscribedaddresses4(ctx, []byte("minus"))
    if err != nil {
        log.Fatal(err)
    }

    if res.Listsubscribedaddresses4200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Resendfailedipn4

Returns all subscriptions/IPNs created with an account.

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
    res, err := s.Bitcoin.Resendfailedipn4(ctx, operations.Resendfailedipn4Request{
        RequestBody: map[string]interface{}{
            "voluptatum": "iusto",
            "excepturi": "nisi",
            "recusandae": "temporibus",
            "ab": "quis",
        },
        NotificationID: "62640817eb594da78c7bee00",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Resendfailedipn4200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Sendtransaction4

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
    res, err := s.Bitcoin.Sendtransaction4(ctx, operations.Sendtransaction4RequestBody{
        Amount: sdk.String("1"),
        Password: sdk.String("Test123"),
        Speed: sdk.String("fast"),
        Subtractfee: sdk.Bool(false),
        To: sdk.String("bc1qzq8m9ukvvgvj7kmlejnfr2q4ndmk2e4ndtr9rn"),
        Walletname: sdk.String("Evolo_6928232"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Subscribeaddress4

Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.


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
    res, err := s.Bitcoin.Subscribeaddress4(ctx, operations.Subscribeaddress4RequestBody{
        From: sdk.String("TVqA9huwk2NBUxbanUNx4NVPKXjzWZqkJt"),
        URL: sdk.String("https://yoururl.com/ipnreceiver.php"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscribeaddress4200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Unsubscribeaddress4

Deletes an existing subscription/IPN for the given address (and contractaddress).

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
    res, err := s.Bitcoin.Unsubscribeaddress4(ctx, operations.Unsubscribeaddress4Request{
        RequestBody: []byte("veritatis"),
        ID: "63ef470294d74b0f290b4b64",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Unsubscribeaddress4200ApplicationJSONObject != nil {
        // handle response
    }
}
```
