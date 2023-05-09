# WebhooksIPNRequests1

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

* [Listfailedipns1](#listfailedipns1) - listFailedIPNs
* [Listipnsbywebhookid1](#listipnsbywebhookid1) - listIPNsByWebhookId
* [Listsubscribedaddresses1](#listsubscribedaddresses1) - listSubscribedAddresses
* [Resendfailedipn1](#resendfailedipn1) - resendFailedIPN
* [Subscribeaddress1](#subscribeaddress1) - subscribeAddress
* [Unsubscribeaddress1](#unsubscribeaddress1) - unsubscribeAddress

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
    res, err := s.WebhooksIPNRequests1.Listfailedipns1(ctx, operations.Listfailedipns1Request{
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
    res, err := s.WebhooksIPNRequests1.Listipnsbywebhookid1(ctx)
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
    res, err := s.WebhooksIPNRequests1.Listsubscribedaddresses1(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Listsubscribedaddresses1200ApplicationJSONObject != nil {
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
    res, err := s.WebhooksIPNRequests1.Resendfailedipn1(ctx, operations.Resendfailedipn1Request{
        RequestBody: map[string]interface{}{
            "ipsa": "reiciendis",
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
    res, err := s.WebhooksIPNRequests1.Subscribeaddress1(ctx, operations.Subscribeaddress1RequestBody{
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
    res, err := s.WebhooksIPNRequests1.Unsubscribeaddress1(ctx, operations.Unsubscribeaddress1Request{
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
