# Polygon

### Available Operations

* [Broadcasttransaction1](#broadcasttransaction1) - broadcastTransaction
* [Deleteaddress1](#deleteaddress1) - deleteAddress
* [Exportaddress1](#exportaddress1) - exportAddress
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
* [Importaddress1](#importaddress1) - importAddress
* [Listaddresses1](#listaddresses1) - listAddresses
* [Listfailedipns1](#listfailedipns1) - listFailedIPNs
* [Listipnsbywebhookid1](#listipnsbywebhookid1) - listIPNsByWebhookId
* [Listsubscribedaddresses1](#listsubscribedaddresses1) - listSubscribedAddresses
* [Listtransactionsbyaddress1](#listtransactionsbyaddress1) - ListTransactionsByAddress
* [Newaddress1](#newaddress1) - newAddress
* [Resendfailedipn1](#resendfailedipn1) - resendFailedIPN
* [Senderc201](#senderc201) - sendERC20
* [Senderc7211](#senderc7211) - sendERC721
* [Sendtransaction1](#sendtransaction1) - sendTransaction
* [Subscribeaddress1](#subscribeaddress1) - subscribeAddress
* [Unsubscribeaddress1](#unsubscribeaddress1) - unsubscribeAddress

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
    res, err := s.Polygon.Broadcasttransaction1(ctx, operations.Broadcasttransaction1RequestBody{
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

## Deleteaddress1

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
    res, err := s.Polygon.Deleteaddress1(ctx, operations.Deleteaddress1Request{
        RequestBody: &operations.Deleteaddress1RequestBody{
            Ethereumaddress: sdk.String("0xfa343ee01667869cfb409b24ae33f7ce8b110eb0"),
            Password: sdk.String("test123"),
        },
        Address: "0xfa343ee01667869cfb409b24ae33f7ce8b110eb0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Deleteaddress1200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Exportaddress1

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
    res, err := s.Polygon.Exportaddress1(ctx, operations.Exportaddress1Request{
        RequestBody: []byte("totam"),
        Address: "0xfa343ee01667869cfb409b24ae33f7ce8b110eb0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Exportaddress1200ApplicationJSONObject != nil {
        // handle response
    }
}
```

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
    res, err := s.Polygon.Getblock1(ctx, operations.Getblock1Request{
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
    res, err := s.Polygon.Geterc201(ctx, operations.Geterc201Request{
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
    res, err := s.Polygon.Geterc20balance1(ctx, operations.Geterc20balance1Request{
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
    res, err := s.Polygon.Getgasprice1(ctx)
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
    res, err := s.Polygon.Getlastblocknumber1(ctx, []byte("porro"))
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
    res, err := s.Polygon.Getnftowner1(ctx, operations.Getnftowner1Request{
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
    res, err := s.Polygon.Getnfturi1(ctx, operations.Getnfturi1Request{
        FtContract: "dolorum",
        TokenID: "dicta",
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
    res, err := s.Polygon.Getpolygonbalance(ctx, operations.GetpolygonbalanceRequest{
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
    res, err := s.Polygon.Gettransaction1(ctx, operations.Gettransaction1Request{
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
    res, err := s.Polygon.Gettransactionreceipt1(ctx, operations.Gettransactionreceipt1Request{
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

## Importaddress1

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
    res, err := s.Polygon.Importaddress1(ctx, operations.Importaddress1RequestBody{
        Content: &operations.Importaddress1RequestBodyContent{
            Address: sdk.String("71892889ed4d79d88ab6ea3783b571b8ece9bef4"),
            Crypto: &operations.Importaddress1RequestBodyContentCrypto{
                Cipher: sdk.String("aes-128-ctr"),
                Cipherparams: &operations.Importaddress1RequestBodyContentCryptoCipherparams{
                    Iv: sdk.String("76e6f2497b9f2a8e024fc752a5418a6d"),
                },
                Ciphertext: sdk.String("9d74262517b984f9b0560b8f23b5e3340f7be0f56b70cd91ff445dcaf5b1968f"),
                Kdf: sdk.String("scrypt"),
                Kdfparams: &operations.Importaddress1RequestBodyContentCryptoKdfparams{
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

    if res.Importaddress1200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Listaddresses1

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
    res, err := s.Polygon.Listaddresses1(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Listaddresses1200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Listfailedipns1

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
    res, err := s.Polygon.Listfailedipns1(ctx, operations.Listfailedipns1Request{
        Webhook: "626407c62e5e8235ca561dce",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Listfailedipns1200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Listipnsbywebhookid1

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
    res, err := s.Polygon.Listipnsbywebhookid1(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Listipnsbywebhookid1200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Listsubscribedaddresses1

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
    res, err := s.Polygon.Listsubscribedaddresses1(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Listsubscribedaddresses1200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Listtransactionsbyaddress1

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
    res, err := s.Polygon.Listtransactionsbyaddress1(ctx, operations.Listtransactionsbyaddress1Request{
        Address: "0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5",
        Page: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Listtransactionsbyaddress1200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Newaddress1

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
    res, err := s.Polygon.Newaddress1(ctx, operations.Newaddress1RequestBody{
        Password: sdk.String("test123"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Newaddress1200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Resendfailedipn1

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
    res, err := s.Polygon.Resendfailedipn1(ctx, operations.Resendfailedipn1Request{
        RequestBody: map[string]interface{}{
            "officia": "occaecati",
            "fugit": "deleniti",
            "hic": "optio",
        },
        NotificationID: "626407c62e5e8235ca561dce",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Resendfailedipn1200ApplicationJSONObject != nil {
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
    res, err := s.Polygon.Senderc201(ctx, operations.Senderc201RequestBody{
        Amount: sdk.Float64(0.1),
        Contractaddress: sdk.String("0x55d398326f99059fF775485246999027B3197955"),
        From: sdk.String("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce"),
        Gas: sdk.Float64(5218.48),
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
    res, err := s.Polygon.Senderc7211(ctx, operations.Senderc7211RequestBody{
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
    res, err := s.Polygon.Sendtransaction1(ctx, operations.Sendtransaction1RequestBody{
        Amount: sdk.String("0.1"),
        From: sdk.String("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce"),
        Gas: sdk.Float64(1059.07),
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

## Subscribeaddress1

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
    res, err := s.Polygon.Subscribeaddress1(ctx, operations.Subscribeaddress1RequestBody{
        To: sdk.String("0x2fE7dF4DAd91Ef6531Cd14fC1C109D2bA1755203"),
        Type: sdk.String("ETH"),
        URL: sdk.String("https://example.com/ipnreceiver.php"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscribeaddress1200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Unsubscribeaddress1

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
    res, err := s.Polygon.Unsubscribeaddress1(ctx, operations.Unsubscribeaddress1Request{
        Webhook: "626407c62e5e8235ca561dce",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Unsubscribeaddress1200ApplicationJSONObject != nil {
        // handle response
    }
}
```
