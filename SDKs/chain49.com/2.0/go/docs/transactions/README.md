# Transactions

## Overview

 

### Available Operations

* [GetMempoolV2](#getmempoolv2) - Get Mempool V2
* [GetSendTxV2](#getsendtxv2) - Send transaction (in URL) V2
* [GetTransactionV2](#gettransactionv2) - Get transaction V2
* [GetTxSpecificV2](#gettxspecificv2) - Get transaction (as is from Backend) V2
* [PostSendTxV2](#postsendtxv2) - Send transaction (POST) V2

## GetMempoolV2

Get a list of transaction IDs currently in the mempool of the node (meaning unconfirmed transactions not included in any block yet)

Note: this route was implemented by us and is therefore not yet supported by existing blockbook clients.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Option1: &shared.SecurityOption1{
                XAPIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Transactions.GetMempoolV2(ctx, operations.GetMempoolV2Request{
        Blockchain: "bitcoin",
        Page: sdk.Int64(1),
        PageSize: sdk.Int64(1000),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMempoolV2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSendTxV2

Sends new transaction to backend

It is recommended to use POST for sending transactions as there is a limit on how much data can be sent in the URL itself.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Option1: &shared.SecurityOption1{
                XAPIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Transactions.GetSendTxV2(ctx, operations.GetSendTxV2Request{
        Blockchain: "bitcoin",
        Hex: "01000000017f9a22c9cbf54bd902400df746f138f37bcf5b4d93eb755820e974ba43ed5f42040000006a4730440220037f4ed5427cde81d55b9b6a2fd08c8a25090c2c2fff3a75c1a57625ca8a7118022076c702fe55969fa08137f71afd4851c48e31082dd3c40c919c92cdbc826758d30121029f6da5623c9f9b68a9baf9c1bc7511df88fa34c6c2f71f7c62f2f03ff48dca80feffffff019c9700000000000017a9146144d57c8aff48492c9dfb914e120b20bad72d6f8773d00700",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSendTxV2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTransactionV2

Get transaction returns "normalized" data about transaction, which has the same general structure for all supported coins. It does not return coin specific fields (for example information about Zcash shielded addresses).

A note about the blockTime field:
for already mined transaction (confirmations > 0), the field blockTime contains time of the block
for transactions in mempool (confirmations == 0), the field contains time when the running instance of Blockbook was first time notified about the transaction. This time may be different in different instances of Blockbook.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Option1: &shared.SecurityOption1{
                XAPIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Transactions.GetTransactionV2(ctx, operations.GetTransactionV2Request{
        Blockchain: "bitcoin",
        TxID: "cd8ec77174e426070d0a50779232bba7312b712e2c6843d82d963d7076c61366",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTransactionV2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetTxSpecificV2

Returns transaction data in the exact format as returned by backend, including all coin specific fields

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Option1: &shared.SecurityOption1{
                XAPIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Transactions.GetTxSpecificV2(ctx, operations.GetTxSpecificV2Request{
        Blockchain: "bitcoin",
        TxID: "cd8ec77174e426070d0a50779232bba7312b712e2c6843d82d963d7076c61366",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTxSpecificV2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSendTxV2

Sends new transaction to backend for broadcasting

The trailing slash '/' at the end is mandatory


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Option1: &shared.SecurityOption1{
                XAPIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Transactions.PostSendTxV2(ctx, operations.PostSendTxV2Request{
        RequestBody: []byte("corrupti"),
        Blockchain: "bitcoin",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSendTxV2200ApplicationJSONObject != nil {
        // handle response
    }
}
```
