# WebhooksIPNRequests1234

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

* [Listfailedipns4](#listfailedipns4) - listFailedIPNs
* [Listsubscribedaddresses4](#listsubscribedaddresses4) - listSubscribedAddresses
* [Resendfailedipn4](#resendfailedipn4) - resendFailedIPN
* [Subscribeaddress4](#subscribeaddress4) - subscribeAddress
* [Unsubscribeaddress4](#unsubscribeaddress4) - unsubscribeAddress

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
    res, err := s.WebhooksIPNRequests1234.Listfailedipns4(ctx, []byte("doloribus"))
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
    res, err := s.WebhooksIPNRequests1234.Listsubscribedaddresses4(ctx, []byte("sapiente"))
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
    res, err := s.WebhooksIPNRequests1234.Resendfailedipn4(ctx, operations.Resendfailedipn4Request{
        RequestBody: map[string]interface{}{
            "mollitia": "dolorem",
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
    res, err := s.WebhooksIPNRequests1234.Subscribeaddress4(ctx, operations.Subscribeaddress4RequestBody{
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
    res, err := s.WebhooksIPNRequests1234.Unsubscribeaddress4(ctx, operations.Unsubscribeaddress4Request{
        RequestBody: []byte("culpa"),
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
