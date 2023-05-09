# AddressRequests1

### Available Operations

* [Deleteaddress1](#deleteaddress1) - deleteAddress
* [Exportaddress1](#exportaddress1) - exportAddress
* [Importaddress1](#importaddress1) - importAddress
* [Listaddresses1](#listaddresses1) - listAddresses
* [Listtransactionsbyaddress1](#listtransactionsbyaddress1) - ListTransactionsByAddress
* [Newaddress1](#newaddress1) - newAddress

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
    res, err := s.AddressRequests1.Deleteaddress1(ctx, operations.Deleteaddress1Request{
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
    res, err := s.AddressRequests1.Exportaddress1(ctx, operations.Exportaddress1Request{
        RequestBody: []byte("corrupti"),
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
    res, err := s.AddressRequests1.Importaddress1(ctx, operations.Importaddress1RequestBody{
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
    res, err := s.AddressRequests1.Listaddresses1(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Listaddresses1200ApplicationJSONObject != nil {
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
    res, err := s.AddressRequests1.Listtransactionsbyaddress1(ctx, operations.Listtransactionsbyaddress1Request{
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
    res, err := s.AddressRequests1.Newaddress1(ctx, operations.Newaddress1RequestBody{
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
