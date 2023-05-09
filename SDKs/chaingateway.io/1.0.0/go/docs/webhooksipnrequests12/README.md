# WebhooksIPNRequests12

## Overview

With webhooks, you can get notified about various events in the blockchain. E.g:

Receipt of payment to a specific address  
Outgoing payment from a specific address  
Exchange of sats between two specific addresses  
Execution of a contract  
Change of ownership of a token

For this you have to create a webhook with certain filter criteria. The following values are available as filter criteria:

from: Outgoing address  
to: Incoming address  
contract: Contract that should be monitored  
tokenid: ID of a token that should be monitored.  
type: Token type (\[ETH', 'ERC20', 'ERC721', null)

Parameter "url" defines the url we are calling with a POST Request.. The request body will have your filter criterias and some additional informatiion about your transaction:

``` json
{
 "id": "63a1ae0887ca3625b82b4924",
  "webhook_id": "63a1ad0e87ca3625b82b4923",
  "from": "0x0000000000000000000000000000000000000000",
  "to": "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43",
  "blocknumber": "123",
  "datetime": "22-12-20 13:43:52",
  "tokenid": "0x0000000000000000000000000000000000000000",
  "type": null,
  "txid": "000000000000000000000000000000000000000000000000000",
  "amount": "000000000000000000000000000000000000000000000000000"
}

```

### Available Operations

* [Listfailedipns2](#listfailedipns2) - listFailedIPNs
* [Listsubscribedaddresses2](#listsubscribedaddresses2) - listSubscribedAddresses
* [Resendfailedipn2](#resendfailedipn2) - resendFailedIPN
* [Subscribeaddress2](#subscribeaddress2) - subscribeAddress
* [Unsubscribeaddress2](#unsubscribeaddress2) - unsubscribeAddress

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
    res, err := s.WebhooksIPNRequests12.Listfailedipns2(ctx)
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
    res, err := s.WebhooksIPNRequests12.Listsubscribedaddresses2(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Listsubscribedaddresses2200ApplicationJSONObject != nil {
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
    res, err := s.WebhooksIPNRequests12.Resendfailedipn2(ctx, operations.Resendfailedipn2Request{
        RequestBody: map[string]interface{}{
            "mollitia": "laborum",
            "dolores": "dolorem",
            "corporis": "explicabo",
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
    res, err := s.WebhooksIPNRequests12.Subscribeaddress2(ctx, operations.Subscribeaddress2RequestBody{
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
    res, err := s.WebhooksIPNRequests12.Unsubscribeaddress2(ctx, operations.Unsubscribeaddress2Request{
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
