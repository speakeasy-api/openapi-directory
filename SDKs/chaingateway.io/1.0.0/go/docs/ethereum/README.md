# Ethereum

### Available Operations

* [Broadcasttransaction](#broadcasttransaction) - broadcastTransaction
* [Deleteaddress](#deleteaddress) - deleteAddress
* [Exportaddress](#exportaddress) - exportAddress
* [Getallerc20balance](#getallerc20balance) - getAllERC20Balance
* [Getblock](#getblock) - getBlock
* [Geterc20](#geterc20) - getERC20
* [Getethereumbalance](#getethereumbalance) - getEthereumBalance
* [Getgasprice](#getgasprice) - getGasPrice
* [Getlastblocknumber](#getlastblocknumber) - getLastBlockNumber
* [Getnftowner](#getnftowner) - getNFTOwner
* [Getnfturi](#getnfturi) - getNFTUri
* [Gettransaction](#gettransaction) - getTransaction
* [Gettransactionreceipt](#gettransactionreceipt) - getTransactionReceipt
* [Importaddress](#importaddress) - importAddress
* [Listaddresses](#listaddresses) - listAddresses
* [Listfailedipns](#listfailedipns) - listFailedIPNs
* [Listipnsbywebhookid](#listipnsbywebhookid) - listIPNsByWebhookId
* [Listsubscribedaddresses](#listsubscribedaddresses) - listSubscribedAddresses
* [Listtransactionsbyaddress](#listtransactionsbyaddress) - ListTransactionsByAddress
* [Newaddress](#newaddress) - newAddress
* [Resendfailedipn](#resendfailedipn) - resendFailedIPN
* [Senderc20](#senderc20) - sendERC20
* [Senderc721](#senderc721) - sendERC721
* [Sendtransaction](#sendtransaction) - sendTransaction
* [Subscribeaddress](#subscribeaddress) - subscribeAddress
* [Unsubscribeaddress](#unsubscribeaddress) - unsubscribeAddress

## Broadcasttransaction

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
    res, err := s.Ethereum.Broadcasttransaction(ctx, operations.BroadcasttransactionRequestBody{
        Data: sdk.String("0xf86b0685012a05f20082520894dfa04096652804362e4b7ae31835416974271e298609184e72a000808194a086277b0f2d7df91c9ce580171cd7f7be6e2c298727944a13fb40e5e9406ccb61a076105cefee8def061024dfb333a1bd47f629b52aae6621d2f2f39a0dccc3ac85"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Broadcasttransaction200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Deleteaddress

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
    res, err := s.Ethereum.Deleteaddress(ctx, operations.DeleteaddressRequest{
        RequestBody: &operations.DeleteaddressRequestBody{
            Ethereumaddress: sdk.String("0xfa343ee01667869cfb409b24ae33f7ce8b110eb0"),
            Password: sdk.String("test123"),
        },
        Address: "0xfa343ee01667869cfb409b24ae33f7ce8b110eb0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deleteaddress200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Exportaddress

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
    res, err := s.Ethereum.Exportaddress(ctx, operations.ExportaddressRequest{
        RequestBody: &operations.ExportaddressRequestBody{
            Password: sdk.String("test123"),
        },
        Address: "0xacc767f4042360c5f08c7b98bac8e66a5c679cef",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Exportaddress200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getallerc20balance

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
    res, err := s.Ethereum.Getallerc20balance(ctx, operations.Getallerc20balanceRequest{
        Address: "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce",
        Erc20Token: "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getallerc20balance200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getblock

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
    res, err := s.Ethereum.Getblock(ctx, operations.GetblockRequest{
        Block: "0xd9186b67ae0d3ee0777a607eeb195c5a9fb0affcd78ddcd7481efae4b258c9f5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getblock200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Geterc20

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
    res, err := s.Ethereum.Geterc20(ctx, operations.Geterc20Request{
        Erc20Token: "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Geterc20200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getethereumbalance

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
    res, err := s.Ethereum.Getethereumbalance(ctx, operations.GetethereumbalanceRequest{
        Address: "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getethereumbalance200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getgasprice

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
    res, err := s.Ethereum.Getgasprice(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getgasprice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getlastblocknumber

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
    res, err := s.Ethereum.Getlastblocknumber(ctx, []byte("deserunt"))
    if err != nil {
        log.Fatal(err)
    }

    if res.Getlastblocknumber200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getnftowner

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
    res, err := s.Ethereum.Getnftowner(ctx, operations.GetnftownerRequest{
        Contract: "0x9db475371b5cc2913d3219f72e16a3f101339a05",
        TokenID: "374",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getnftowner200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getnfturi

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
    res, err := s.Ethereum.Getnfturi(ctx, operations.GetnfturiRequest{
        Contract: "0x9db475371b5cc2913d3219f72e16a3f101339a05",
        TokenID: "374",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getnfturi200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Gettransaction

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
    res, err := s.Ethereum.Gettransaction(ctx, operations.GettransactionRequest{
        Transaction: "0x0b361c13214a0d498b69d6ea86039fdf8e578f4b6e3b28db52a422f8ed3ea037",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Gettransaction200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Gettransactionreceipt

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
    res, err := s.Ethereum.Gettransactionreceipt(ctx, operations.GettransactionreceiptRequest{
        Transaction: "0x0b361c13214a0d498b69d6ea86039fdf8e578f4b6e3b28db52a422f8ed3ea037",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Gettransactionreceipt200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Importaddress

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
    res, err := s.Ethereum.Importaddress(ctx, operations.ImportaddressRequestBody{
        Content: &operations.ImportaddressRequestBodyContent{
            Address: sdk.String("71892889ed4d79d88ab6ea3783b571b8ece9bef4"),
            Crypto: &operations.ImportaddressRequestBodyContentCrypto{
                Cipher: sdk.String("aes-128-ctr"),
                Cipherparams: &operations.ImportaddressRequestBodyContentCryptoCipherparams{
                    Iv: sdk.String("76e6f2497b9f2a8e024fc752a5418a6d"),
                },
                Ciphertext: sdk.String("9d74262517b984f9b0560b8f23b5e3340f7be0f56b70cd91ff445dcaf5b1968f"),
                Kdf: sdk.String("scrypt"),
                Kdfparams: &operations.ImportaddressRequestBodyContentCryptoKdfparams{
                    Dklen: sdk.Float64(32),
                    N: sdk.Float64(131072),
                    P: sdk.Float64(1),
                    R: sdk.Float64(8),
                    Salt: sdk.String("d11d996a7cc4bfad730d4c9b9057eff2c0fb3940b5bfc59db62ae218c14a54f4"),
                },
                Mac: sdk.String("dcc342bbbbb8eea97c89b47bafc23de568fc1a48e0bd21ae8d776a95c4704ac9"),
            },
            ID: sdk.String("85b790ff-408e-42b8-b123-bec9523964dc"),
            Version: sdk.Float64(3),
        },
        Filename: sdk.String("UTC--2020-09-19T10-42-26.196Z--71892889ed4d79d88ab6ea3783b571b8ece9bef4"),
        Password: sdk.String("padN39QkRA2hJ"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Importaddress200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Listaddresses

listAddresses

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
    res, err := s.Ethereum.Listaddresses(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Listaddresses200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Listfailedipns

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
    res, err := s.Ethereum.Listfailedipns(ctx, operations.ListfailedipnsRequest{
        Webhook: "626407c62e5e8235ca561dce",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Listfailedipns200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Listipnsbywebhookid

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
    res, err := s.Ethereum.Listipnsbywebhookid(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Listipnsbywebhookid200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Listsubscribedaddresses

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
    res, err := s.Ethereum.Listsubscribedaddresses(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Listsubscribedaddresses200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Listtransactionsbyaddress

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
    res, err := s.Ethereum.Listtransactionsbyaddress(ctx, operations.ListtransactionsbyaddressRequest{
        Address: "0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5",
        Page: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Listtransactionsbyaddress200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Newaddress

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
    res, err := s.Ethereum.Newaddress(ctx, operations.NewaddressRequestBody{
        Password: sdk.String("test123"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Newaddress200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Resendfailedipn

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
    res, err := s.Ethereum.Resendfailedipn(ctx, operations.ResendfailedipnRequest{
        RequestBody: map[string]interface{}{
            "ipsam": "repellendus",
        },
        Notification: "62640817eb594da78c7bee00",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Resendfailedipn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Senderc20

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
    res, err := s.Ethereum.Senderc20(ctx, operations.Senderc20RequestBody{
        Amount: sdk.Float64(0.1),
        Contractaddress: sdk.String("0x55d398326f99059fF775485246999027B3197955"),
        From: sdk.String("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce"),
        Gas: sdk.Float64(9571.56),
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

## Senderc721

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
    res, err := s.Ethereum.Senderc721(ctx, operations.Senderc721RequestBody{
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

## Sendtransaction

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
    res, err := s.Ethereum.Sendtransaction(ctx, operations.SendtransactionRequestBody{
        Amount: sdk.String("0.1"),
        From: sdk.String("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce"),
        Gas: sdk.Float64(7781.57),
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

## Subscribeaddress

Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.

You can choose one or more from following filter criterias

| **Parameter** | **Description** |
| --- | --- |
| from | ethereum address |
| to | ethereum address |
| contractaddress | contract address |
| tokenid | token id |

You also need to dpecify the parameter "type". you can choose between \['ETH', 'ERC20', 'ERC721', null\]

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
    res, err := s.Ethereum.Subscribeaddress(ctx, operations.SubscribeaddressRequestBody{
        To: sdk.String("0x2fE7dF4DAd91Ef6531Cd14fC1C109D2bA1755203"),
        Type: sdk.String("ETH"),
        URL: sdk.String("https://example.com/ipnreceiver.php"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscribeaddress200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Unsubscribeaddress

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
    res, err := s.Ethereum.Unsubscribeaddress(ctx, operations.UnsubscribeaddressRequest{
        Webhook: "626407c62e5e8235ca561dce",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Unsubscribeaddress200ApplicationJSONObject != nil {
        // handle response
    }
}
```
