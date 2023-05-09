# AddressRequests12

### Available Operations

* [Deleteaddress2](#deleteaddress2) - deleteAddress
* [Exportaddress2](#exportaddress2) - exportAddress
* [Importaddress2](#importaddress2) - importAddress
* [Listaddress](#listaddress) - listAddress
* [Listtransactionsbyaddress2](#listtransactionsbyaddress2) - ListTransactionsByAddress
* [Newaddress2](#newaddress2) - newAddress

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
    res, err := s.AddressRequests12.Deleteaddress2(ctx, operations.Deleteaddress2Request{
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
    res, err := s.AddressRequests12.Exportaddress2(ctx, operations.Exportaddress2Request{
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
    res, err := s.AddressRequests12.Importaddress2(ctx, operations.Importaddress2RequestBody{
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
    res, err := s.AddressRequests12.Listaddress(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Listaddress200ApplicationJSONObject != nil {
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
    res, err := s.AddressRequests12.Listtransactionsbyaddress2(ctx, operations.Listtransactionsbyaddress2Request{
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
    res, err := s.AddressRequests12.Newaddress2(ctx, operations.Newaddress2RequestBody{
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
