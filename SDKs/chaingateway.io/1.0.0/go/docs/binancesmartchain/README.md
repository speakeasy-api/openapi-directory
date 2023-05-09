# BinanceSmartChain

### Available Operations

* [Broadcasttransaction2](#broadcasttransaction2) - broadcastTransaction
* [Deleteaddress2](#deleteaddress2) - deleteAddress
* [Exportaddress2](#exportaddress2) - exportAddress
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
* [Importaddress2](#importaddress2) - importAddress
* [Listaddress](#listaddress) - listAddress
* [Listfailedipns2](#listfailedipns2) - listFailedIPNs
* [Listsubscribedaddresses2](#listsubscribedaddresses2) - listSubscribedAddresses
* [Listtransactionsbyaddress2](#listtransactionsbyaddress2) - ListTransactionsByAddress
* [Newaddress2](#newaddress2) - newAddress
* [Resendfailedipn2](#resendfailedipn2) - resendFailedIPN
* [Sendbep20](#sendbep20) - sendBEP20
* [Sendbep721](#sendbep721) - sendBEP721
* [Sendtransaction2](#sendtransaction2) - sendTransaction
* [Subscribeaddress2](#subscribeaddress2) - subscribeAddress
* [Unsubscribeaddress2](#unsubscribeaddress2) - unsubscribeAddress

## Broadcasttransaction2

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
    res, err := s.BinanceSmartChain.Broadcasttransaction2(ctx, operations.Broadcasttransaction2RequestBody{
        Data: sdk.String("0xf86b0685012a05f20082520894dfa04096652804362e4b7ae31835416974271e298609184e72a000808194a086277b0f2d7df91c9ce580171cd7f7be6e2c298727944a13fb40e5e9406ccb61a076105cefee8def061024dfb333a1bd47f629b52aae6621d2f2f39a0dccc3ac85"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Broadcasttransaction2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Deleteaddress2

deleteAddress

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
    res, err := s.BinanceSmartChain.Deleteaddress2(ctx, operations.Deleteaddress2Request{
        RequestBody: &operations.Deleteaddress2RequestBody{
            Password: sdk.String("test123"),
        },
        Address: "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deleteaddress2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Exportaddress2

exportAddress

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
    res, err := s.BinanceSmartChain.Exportaddress2(ctx, operations.Exportaddress2Request{
        RequestBody: &operations.Exportaddress2RequestBody{
            Password: sdk.String("test123"),
        },
        Address: "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Exportaddress2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

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
    res, err := s.BinanceSmartChain.Getbep20(ctx, operations.Getbep20Request{
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
    res, err := s.BinanceSmartChain.Getbep20balance(ctx, operations.Getbep20balanceRequest{
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
    res, err := s.BinanceSmartChain.Getbinancecoinbalance(ctx, operations.GetbinancecoinbalanceRequest{
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
    res, err := s.BinanceSmartChain.Getblock2(ctx, operations.Getblock2Request{
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
    res, err := s.BinanceSmartChain.Getgasprice2(ctx)
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
    res, err := s.BinanceSmartChain.Getlastblocknumber2(ctx)
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
    res, err := s.BinanceSmartChain.Getnftowner2(ctx, operations.Getnftowner2Request{
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
    res, err := s.BinanceSmartChain.Getnfturi2(ctx, operations.Getnfturi2Request{
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
    res, err := s.BinanceSmartChain.Gettransaction2(ctx, operations.Gettransaction2Request{
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
    res, err := s.BinanceSmartChain.Gettransactionreceipt2(ctx, operations.Gettransactionreceipt2Request{
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

## Importaddress2

importAddress

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
    res, err := s.BinanceSmartChain.Importaddress2(ctx, operations.Importaddress2RequestBody{
        Content: &operations.Importaddress2RequestBodyContent{
            Address: sdk.String("4fb45889cd2d3348348e39c613c41bf1dc43760a"),
            Crypto: &operations.Importaddress2RequestBodyContentCrypto{
                Cipher: sdk.String("aes-128-ctr"),
                Cipherparams: &operations.Importaddress2RequestBodyContentCryptoCipherparams{
                    Iv: sdk.String("a2b3022a9d7d76ade60dd70e5405cc09"),
                },
                Ciphertext: sdk.String("027fbbe9d7b91b1a4a3afddcb27a07ac5e7fff550fd167452a6345a961f21a4d"),
                Kdf: sdk.String("scrypt"),
                Kdfparams: &operations.Importaddress2RequestBodyContentCryptoKdfparams{
                    Dklen: sdk.Float64(32),
                    N: sdk.Float64(131056),
                    P: sdk.Float64(1),
                    R: sdk.Float64(6),
                    Salt: sdk.String("fd84f455da4ad1325cf5bc7beb06bf3052919278c76373a67507aaa68bcebab3"),
                },
                Mac: sdk.String("d46d36b6facd1f3f5549f01cb5c87de0c01b68b6445410259128c52d515a7b6d"),
            },
            ID: sdk.String("f0449f3f-1ef2-5fb9-bf09-20bb72c47167"),
            Version: sdk.Float64(3),
        },
        Filename: sdk.String("UTC--2020-05-01T12-30-12.020Z--4fb45889cd2d3348348e39c613c41bf1dc43760a"),
        Password: sdk.String("padN39QkRA2hJ"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Importaddress2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Listaddress

listAddress

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
    res, err := s.BinanceSmartChain.Listaddress(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Listaddress200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Listfailedipns2

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
    res, err := s.BinanceSmartChain.Listfailedipns2(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Listfailedipns2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Listsubscribedaddresses2

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
    res, err := s.BinanceSmartChain.Listsubscribedaddresses2(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Listsubscribedaddresses2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Listtransactionsbyaddress2

Our API provides an endpoint for retrieving all transactions associated with a particular blockchain address. To use this endpoint, you will need to provide the wallet address as a parameter in the request.

Each page of results returned by this endpoint contains up to 100 entries, and you can use a paginator to navigate through the pages of results.

To use the paginator, you can include parameter in your request: "page" . The "page" parameter specifies which page of results to retrieve,

For example, to retrieve the first 100 transactions associated with a particular blockchain address, you would make a request to the following URL:

```
/addresses//transactions/1

```

If there are more than 100 transactions associated with the blockchain address, you can retrieve additional pages of results by incrementing the "page" parameter in your request. For example, to retrieve the next 100 transactions, you would make a request to the following URL:

```
/addresses//transactions/2
```

By using the paginator, you can retrieve all transactions associated with a particular blockchain address, regardless of the total number of transactions in the blockchain.

each request tells you the max pages within the Request in the **max_pages** field

`"max_pages": 515`

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
    res, err := s.BinanceSmartChain.Listtransactionsbyaddress2(ctx, operations.Listtransactionsbyaddress2Request{
        Address: "0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5",
        Page: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Listtransactionsbyaddress2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Newaddress2

newAddress

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
    res, err := s.BinanceSmartChain.Newaddress2(ctx, operations.Newaddress2RequestBody{
        Password: sdk.String("test123"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Newaddress2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Resendfailedipn2

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
    res, err := s.BinanceSmartChain.Resendfailedipn2(ctx, operations.Resendfailedipn2Request{
        RequestBody: map[string]interface{}{
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        NotificationID: "62640817eb594da78c7bee00",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Resendfailedipn2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Sendbep20

sendBEP20

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
    res, err := s.BinanceSmartChain.Sendbep20(ctx, operations.Sendbep20RequestBody{
        Amount: sdk.String("0.1"),
        Contractaddress: sdk.String("0x55d398326f99059fF775485246999027B3197955"),
        From: sdk.String("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce"),
        Gas: sdk.Float64(4236.55),
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

## Sendbep721

sendBEP721

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
    res, err := s.BinanceSmartChain.Sendbep721(ctx, operations.Sendbep721RequestBody{
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

## Sendtransaction2

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
    res, err := s.BinanceSmartChain.Sendtransaction2(ctx, operations.Sendtransaction2RequestBody{
        Amount: sdk.String("0.1"),
        From: sdk.String("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce"),
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

## Subscribeaddress2

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
    res, err := s.BinanceSmartChain.Subscribeaddress2(ctx, operations.Subscribeaddress2RequestBody{
        Contractaddress: sdk.String("0x514910771af9ca656af840dff83e8264ecf986ca"),
        Ethereumaddress: sdk.String("0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974"),
        URL: sdk.String("https://yoururl.com/ipnreceiver.php"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscribeaddress2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Unsubscribeaddress2

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
    res, err := s.BinanceSmartChain.Unsubscribeaddress2(ctx, operations.Unsubscribeaddress2Request{
        Webhook: "624d7db34b026365cc22356b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Unsubscribeaddress2200ApplicationJSONObject != nil {
        // handle response
    }
}
```
