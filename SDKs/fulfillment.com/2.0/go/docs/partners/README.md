# Partners

### Available Operations

* [PutOrdersIDShip](#putordersidship) - Ship an Order
* [PutOrdersIDStatus](#putordersidstatus) - Update Order Status

## PutOrdersIDShip

Note, this API is used to update orders and is reserved for our shipping partners.

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
    res, err := s.Partners.PutOrdersIDShip(ctx, operations.PutOrdersIDShipRequest{
        RequestBody: operations.PutOrdersIDShipOrderShipV2{
            TrackingNumber: "quasi",
            WeightOverride: sdk.Float32(9719.45),
        },
        ID: 976460,
    }, operations.PutOrdersIDShipSecurity{
        FdcAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OneordersPostResponses201ContentApplication1jsonSchema != nil {
        // handle response
    }
}
```

## PutOrdersIDStatus

Note, this API is used to update orders and is reserved for our shipping partners.

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
    res, err := s.Partners.PutOrdersIDStatus(ctx, operations.PutOrdersIDStatusRequest{
        RequestBody: operations.PutOrdersIDStatusStatusTypeSimpleV2{
            Reason: "vero",
            Status: operations.PutOrdersIDStatusStatusTypeSimpleV2Status{
                Code: "nihil",
            },
        },
        ID: 509624,
    }, operations.PutOrdersIDStatusSecurity{
        FdcAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OneordersPostResponses201ContentApplication1jsonSchema != nil {
        // handle response
    }
}
```
