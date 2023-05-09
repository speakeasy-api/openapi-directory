# AddressRequests123

### Available Operations

* [Listtransactionsbyaddress3](#listtransactionsbyaddress3) - ListTransactionsByAddress
* [Newaddress3](#newaddress3) - newAddress

## Listtransactionsbyaddress3

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
    res, err := s.AddressRequests123.Listtransactionsbyaddress3(ctx, operations.Listtransactionsbyaddress3Request{
        Address: "0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5",
        Page: "1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Listtransactionsbyaddress3200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Newaddress3

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
    res, err := s.AddressRequests123.Newaddress3(ctx, operations.Newaddress3RequestBody{
        Password: sdk.String("test123"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Newaddress3200ApplicationJSONObject != nil {
        // handle response
    }
}
```
