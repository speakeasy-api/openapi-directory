# Tron

### Available Operations

* [Getaccountresources](#getaccountresources) - getAccountResources
* [Getblock3](#getblock3) - getBlock
* [Getchainparameters](#getchainparameters) - getChainParameters
* [Getlastblocknumber3](#getlastblocknumber3) - getLastBlockNumber
* [Gettransaction3](#gettransaction3) - getTransaction
* [Gettransactionreceipt3](#gettransactionreceipt3) - getTransactionReceipt
* [Gettrc10balance](#gettrc10balance) - getTRC10Balance
* [Gettrc20balance](#gettrc20balance) - getTRC20Balance
* [Gettronbalance](#gettronbalance) - getTronBalance
* [Listfailedipns3](#listfailedipns3) - listFailedIPNs
* [Listsubscribedaddresses3](#listsubscribedaddresses3) - listSubscribedAddresses
* [Listtransactionsbyaddress3](#listtransactionsbyaddress3) - ListTransactionsByAddress
* [Newaddress3](#newaddress3) - newAddress
* [Resendfailedipn3](#resendfailedipn3) - resendFailedIPN
* [Sendtransaction3](#sendtransaction3) - sendTransaction
* [Sendtrc10](#sendtrc10) - sendTRC10
* [Sendtrc20](#sendtrc20) - sendTRC20
* [Sendtrc721](#sendtrc721) - sendTRC721
* [Subscribeaddress3](#subscribeaddress3) - subscribeAddress
* [Unsubscribeaddress3](#unsubscribeaddress3) - unsubscribeAddress

## Getaccountresources

getAccountResources

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
    res, err := s.Tron.Getaccountresources(ctx, operations.GetaccountresourcesRequest{
        Address: "TVqA9huwk2NBUxbanUNx4NVPKXjzWZqkJt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getaccountresources200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getblock3

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
    res, err := s.Tron.Getblock3(ctx, operations.Getblock3Request{
        RequestBody: []byte("esse"),
        Block: "300",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getblock3200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getchainparameters

getChainParameters

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
    res, err := s.Tron.Getchainparameters(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getchainparameters200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Getlastblocknumber3

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
    res, err := s.Tron.Getlastblocknumber3(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getlastblocknumber3200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Gettransaction3

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
    res, err := s.Tron.Gettransaction3(ctx, operations.Gettransaction3Request{
        RequestBody: []byte("ipsum"),
        Transaction: "dab6bb52e098232a2f115d56419124df1463ae60ac4f2effdb59984c550d8fa9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Gettransaction3200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Gettransactionreceipt3

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
    res, err := s.Tron.Gettransactionreceipt3(ctx, operations.Gettransactionreceipt3Request{
        Transaction: "dab6bb52e098232a2f115d56419124df1463ae60ac4f2effdb59984c550d8fa9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Gettransactionreceipt3200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Gettrc10balance

getTRC10Balance

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
    res, err := s.Tron.Gettrc10balance(ctx, operations.Gettrc10balanceRequest{
        Account: "TVqA9huwk2NBUxbanUNx4NVPKXjzWZqkJt",
        TokenID: "10020000",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Gettrc10balance200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Gettrc20balance

getTRC20Balance

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
    res, err := s.Tron.Gettrc20balance(ctx, operations.Gettrc20balanceRequest{
        RequestBody: &operations.Gettrc20balanceRequestBody{
            Contractaddress: sdk.String("TGTE9Eo4hrkotStM1iGHSKA7gobxZxPuwQ"),
            Tronaddress: sdk.String("TK84ZqTuFHUbfGs5BY5rMAbkMJAxdgbYB5"),
        },
        Account: "TVqA9huwk2NBUxbanUNx4NVPKXjzWZqkJt",
        Token: "TGTE9Eo4hrkotStM1iGHSKA7gobxZxPuwQ",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Gettrc20balance200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Gettronbalance

getTronBalance

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
    res, err := s.Tron.Gettronbalance(ctx, operations.GettronbalanceRequest{
        Address: "TSU2h3XdoW53hNkts2dQoXbJSNP1uL4r7A",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Gettronbalance200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Listfailedipns3

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
    res, err := s.Tron.Listfailedipns3(ctx, []byte("excepturi"))
    if err != nil {
        log.Fatal(err)
    }

    if res.Listfailedipns3200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Listsubscribedaddresses3

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
    res, err := s.Tron.Listsubscribedaddresses3(ctx, []byte("aspernatur"))
    if err != nil {
        log.Fatal(err)
    }

    if res.Listsubscribedaddresses3200ApplicationJSONObject != nil {
        // handle response
    }
}
```

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
    res, err := s.Tron.Listtransactionsbyaddress3(ctx, operations.Listtransactionsbyaddress3Request{
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
    res, err := s.Tron.Newaddress3(ctx, operations.Newaddress3RequestBody{
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

## Resendfailedipn3

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
    res, err := s.Tron.Resendfailedipn3(ctx, map[string]interface{}{
        "ad": "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Resendfailedipn3200ApplicationJSONObject != nil {
        // handle response
    }
}
```

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
    res, err := s.Tron.Sendtransaction3(ctx, operations.Sendtransaction3RequestBody{
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
    res, err := s.Tron.Sendtrc10(ctx, operations.Sendtrc10RequestBody{
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
    res, err := s.Tron.Sendtrc20(ctx, operations.Sendtrc20RequestBody{
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
    res, err := s.Tron.Sendtrc721(ctx, []byte("sed"))
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Subscribeaddress3

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
    res, err := s.Tron.Subscribeaddress3(ctx, operations.Subscribeaddress3RequestBody{
        From: sdk.String("TVqA9huwk2NBUxbanUNx4NVPKXjzWZqkJt"),
        URL: sdk.String("https://yoururl.com/ipnreceiver.php"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscribeaddress3200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Unsubscribeaddress3

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
    res, err := s.Tron.Unsubscribeaddress3(ctx, operations.Unsubscribeaddress3Request{
        RequestBody: &operations.Unsubscribeaddress3RequestBody{
            ID: sdk.String("624d80774b026365cc22356e"),
        },
        Webhookid: "624d7db34b026365cc22356b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Unsubscribeaddress3200ApplicationJSONObject != nil {
        // handle response
    }
}
```
