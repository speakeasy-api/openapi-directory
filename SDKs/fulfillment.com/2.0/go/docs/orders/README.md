# Orders

## Overview

Creating, viewing, and canceling orders.

### Available Operations

* [DeleteOrdersID](#deleteordersid) - Cancel an Order
* [GetOrders](#getorders) - List of Orders
* [GetOrder](#getorder) - Order Details
* [PostOrders](#postorders) - New Order

## DeleteOrdersID

Request an order is canceled to prevent shipment.

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
    res, err := s.Orders.DeleteOrdersID(ctx, operations.DeleteOrdersIDRequest{
        ID: 978619,
    }, operations.DeleteOrdersIDSecurity{
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

## GetOrders

Retrieve many orders at once

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
    res, err := s.Orders.GetOrders(ctx, operations.GetOrdersRequest{
        FromDate: "molestiae",
        Hydrate: []shared.HydrateParamEnum{
            shared.HydrateParamEnumTrackingNumbersCarrier,
            shared.HydrateParamEnumLineItems,
            shared.HydrateParamEnumLineItems,
            shared.HydrateParamEnumTrackingNumbersCarrier,
        },
        Limit: sdk.Int64(678880),
        MerchantIds: []int64{
            720633,
        },
        Page: sdk.Int64(639921),
        ToDate: "occaecati",
        WarehouseIds: []int64{
            537373,
        },
    }, operations.GetOrdersSecurity{
        FdcAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderResponseOneOfV2 != nil {
        // handle response
    }
}
```

## GetOrder

For the fastest results use the FDC provided `id` however you can use your `merchantOrderId` as the `id`.

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
    res, err := s.Orders.GetOrder(ctx, operations.GetOrderRequest{
        Hydrate: []shared.HydrateParamEnum{
            shared.HydrateParamEnumTrackingNumbersCarrier,
            shared.HydrateParamEnumLineItems,
            shared.HydrateParamEnumIntegrator,
            shared.HydrateParamEnumLineItems,
        },
        ID: "742cb739-2059-4293-96fe-a7596eb10faa",
        MerchantID: sdk.Int64(670638),
    }, operations.GetOrderSecurity{
        FdcAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OneordersGetResponses200ContentApplication1jsonSchema != nil {
        // handle response
    }
}
```

## PostOrders

Error Notes&#58;
* When `409 Conflict` is a 'Duplicate Order' the `context` will include the FDC `id`, see samples.


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
    res, err := s.Orders.PostOrders(ctx, operations.PostOrdersOrderRequestV2{
        Integrator: operations.PostOrdersOrderRequestV2IntegratorEnumCelery.ToPointer(),
        Items: []PostOrdersOrderRequestV2Items{
            operations.PostOrdersOrderRequestV2Items{
                DeclaredValue: "129.99",
                Quantity: 358152,
                Sku: "explicabo",
            },
        },
        MerchantID: sdk.Int64(750686),
        MerchantOrderID: "enim",
        Notes: sdk.String("omnis"),
        Recipient: operations.PostOrdersOrderRequestV2ConsigneeNewV2{
            Address1: "nemo",
            Address2: sdk.String("minima"),
            AddressLocality: "excepturi",
            AddressRegion: "accusantium",
            CompanyName: sdk.String("iure"),
            Country: "New Caledonia",
            Email: "Veronica.Brakus@hotmail.com",
            FirstName: "Lorine",
            LastName: "Crooks",
            Phone: "752.544.2613 x16631",
            PostalCode: sdk.String("19368-0068"),
        },
        ShippingMethod: "Ground",
        Warehouse: &operations.PostOrdersOrderRequestV2Warehouse{
            ID: sdk.Int64(673660),
        },
    }, operations.PostOrdersSecurity{
        FdcAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderResponseV2 != nil {
        // handle response
    }
}
```
