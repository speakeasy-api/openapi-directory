# AddressRequests

### Available Operations

* [Deleteaddress](#deleteaddress) - deleteAddress
* [Exportaddress](#exportaddress) - exportAddress
* [Importaddress](#importaddress) - importAddress
* [Listaddresses](#listaddresses) - listAddresses
* [Listtransactionsbyaddress](#listtransactionsbyaddress) - ListTransactionsByAddress
* [Newaddress](#newaddress) - newAddress

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
    res, err := s.AddressRequests.Deleteaddress(ctx, operations.DeleteaddressRequest{
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
    res, err := s.AddressRequests.Exportaddress(ctx, operations.ExportaddressRequest{
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
    res, err := s.AddressRequests.Importaddress(ctx, operations.ImportaddressRequestBody{
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
    res, err := s.AddressRequests.Listaddresses(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Listaddresses200ApplicationJSONObject != nil {
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
    res, err := s.AddressRequests.Listtransactionsbyaddress(ctx, operations.ListtransactionsbyaddressRequest{
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
    res, err := s.AddressRequests.Newaddress(ctx, operations.NewaddressRequestBody{
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
