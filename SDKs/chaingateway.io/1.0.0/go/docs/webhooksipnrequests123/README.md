# WebhooksIPNRequests123

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

* [Listfailedipns3](#listfailedipns3) - listFailedIPNs
* [Listsubscribedaddresses3](#listsubscribedaddresses3) - listSubscribedAddresses
* [Resendfailedipn3](#resendfailedipn3) - resendFailedIPN
* [Subscribeaddress3](#subscribeaddress3) - subscribeAddress
* [Unsubscribeaddress3](#unsubscribeaddress3) - unsubscribeAddress

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
    res, err := s.WebhooksIPNRequests123.Listfailedipns3(ctx, []byte("nobis"))
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
    res, err := s.WebhooksIPNRequests123.Listsubscribedaddresses3(ctx, []byte("enim"))
    if err != nil {
        log.Fatal(err)
    }

    if res.Listsubscribedaddresses3200ApplicationJSONObject != nil {
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
    res, err := s.WebhooksIPNRequests123.Resendfailedipn3(ctx, map[string]interface{}{
        "nemo": "minima",
        "excepturi": "accusantium",
        "iure": "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Resendfailedipn3200ApplicationJSONObject != nil {
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
    res, err := s.WebhooksIPNRequests123.Subscribeaddress3(ctx, operations.Subscribeaddress3RequestBody{
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
    res, err := s.WebhooksIPNRequests123.Unsubscribeaddress3(ctx, operations.Unsubscribeaddress3Request{
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
