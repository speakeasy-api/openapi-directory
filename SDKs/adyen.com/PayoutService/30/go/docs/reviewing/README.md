# Reviewing

### Available Operations

* [PostConfirmThirdParty](#postconfirmthirdparty) - Confirm a payout
* [PostDeclineThirdParty](#postdeclinethirdparty) - Cancel a payout

## PostConfirmThirdParty

Confirms a previously submitted payout.

To cancel a payout, use the `/declineThirdParty` endpoint.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Reviewing.PostConfirmThirdParty(ctx, shared.ModifyRequest{
        AdditionalData: map[string]string{
            "quibusdam": "sed",
            "saepe": "pariatur",
            "accusantium": "consequuntur",
            "praesentium": "natus",
        },
        MerchantAccount: "magni",
        OriginalReference: "sunt",
    }, operations.PostConfirmThirdPartySecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyResponse != nil {
        // handle response
    }
}
```

## PostDeclineThirdParty

Cancels a previously submitted payout.

To confirm and send a payout, use the `/confirmThirdParty` endpoint.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Reviewing.PostDeclineThirdParty(ctx, shared.ModifyRequest{
        AdditionalData: map[string]string{
            "illum": "pariatur",
            "maxime": "ea",
            "excepturi": "odit",
            "ea": "accusantium",
        },
        MerchantAccount: "ab",
        OriginalReference: "maiores",
    }, operations.PostDeclineThirdPartySecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModifyResponse != nil {
        // handle response
    }
}
```
