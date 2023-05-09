# Orders

### Available Operations

* [OrdersAll](#ordersall) - List Orders
* [OrdersOne](#ordersone) - Get Order

## OrdersAll

List Orders

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Orders.OrdersAll(ctx, operations.OrdersAllRequest{
        Cursor: sdk.String("dolorum"),
        Fields: sdk.String("dicta"),
        Filter: &shared.EcommerceOrdersFilter{
            Email: sdk.String("elon@musk.com"),
        },
        Limit: sdk.Int64(720633),
        Raw: sdk.Bool(false),
        XApideckAppID: "officia",
        XApideckConsumerID: "occaecati",
        XApideckServiceID: sdk.String("fugit"),
    }, operations.OrdersAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEcommerceOrdersResponse != nil {
        // handle response
    }
}
```

## OrdersOne

Get Order

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
    res, err := s.Orders.OrdersOne(ctx, operations.OrdersOneRequest{
        Fields: sdk.String("deleniti"),
        ID: "fc816742-cb73-4920-9929-396fea7596eb",
        Raw: sdk.Bool(false),
        XApideckAppID: "architecto",
        XApideckConsumerID: "ipsa",
        XApideckServiceID: sdk.String("reiciendis"),
    }, operations.OrdersOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEcommerceOrderResponse != nil {
        // handle response
    }
}
```
