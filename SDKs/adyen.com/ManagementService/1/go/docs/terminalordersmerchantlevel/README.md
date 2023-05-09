# TerminalOrdersMerchantLevel

### Available Operations

* [GetMerchantsMerchantIDBillingEntities](#getmerchantsmerchantidbillingentities) - Get a list of billing entities
* [GetMerchantsMerchantIDShippingLocations](#getmerchantsmerchantidshippinglocations) - Get a list of shipping locations
* [GetMerchantsMerchantIDTerminalModels](#getmerchantsmerchantidterminalmodels) - Get a list of terminal models
* [GetMerchantsMerchantIDTerminalOrders](#getmerchantsmerchantidterminalorders) - Get a list of orders
* [GetMerchantsMerchantIDTerminalOrdersOrderID](#getmerchantsmerchantidterminalordersorderid) - Get an order
* [GetMerchantsMerchantIDTerminalProducts](#getmerchantsmerchantidterminalproducts) - Get a list of terminal products
* [PatchMerchantsMerchantIDTerminalOrdersOrderID](#patchmerchantsmerchantidterminalordersorderid) - Update an order
* [PostMerchantsMerchantIDShippingLocations](#postmerchantsmerchantidshippinglocations) - Create a shipping location
* [PostMerchantsMerchantIDTerminalOrders](#postmerchantsmerchantidterminalorders) - Create an order
* [PostMerchantsMerchantIDTerminalOrdersOrderIDCancel](#postmerchantsmerchantidterminalordersorderidcancel) - Cancel an order

## GetMerchantsMerchantIDBillingEntities

Returns the billing entities of the merchant account identified in the path.
A billing entity is a legal entity where we charge orders to. An order for terminal products must contain the ID of a billing entity.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

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
    res, err := s.TerminalOrdersMerchantLevel.GetMerchantsMerchantIDBillingEntities(ctx, operations.GetMerchantsMerchantIDBillingEntitiesRequest{
        MerchantID: "dolor",
        Name: sdk.String("Francis Russel"),
    }, operations.GetMerchantsMerchantIDBillingEntitiesSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingEntitiesResponse != nil {
        // handle response
    }
}
```

## GetMerchantsMerchantIDShippingLocations

Returns the shipping locations for the merchant account identified in the path.
A shipping location includes the address where orders can be delivered, and an ID which you need to specify when ordering terminal products.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

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
    res, err := s.TerminalOrdersMerchantLevel.GetMerchantsMerchantIDShippingLocations(ctx, operations.GetMerchantsMerchantIDShippingLocationsRequest{
        Limit: sdk.Int(12036),
        MerchantID: "dignissimos",
        Name: sdk.String("Elisa Mosciski"),
        Offset: sdk.Int(374323),
    }, operations.GetMerchantsMerchantIDShippingLocationsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShippingLocationsResponse != nil {
        // handle response
    }
}
```

## GetMerchantsMerchantIDTerminalModels

Returns the payment terminal models that merchant account identified in the path has access to. The response includes the terminal model ID, which can be used as a query parameter when getting a list of terminals or a list of products for ordering.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

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
    res, err := s.TerminalOrdersMerchantLevel.GetMerchantsMerchantIDTerminalModels(ctx, operations.GetMerchantsMerchantIDTerminalModelsRequest{
        MerchantID: "asperiores",
    }, operations.GetMerchantsMerchantIDTerminalModelsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerminalModelsResponse != nil {
        // handle response
    }
}
```

## GetMerchantsMerchantIDTerminalOrders

Returns a list of terminal products orders for the merchant account identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

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
    res, err := s.TerminalOrdersMerchantLevel.GetMerchantsMerchantIDTerminalOrders(ctx, operations.GetMerchantsMerchantIDTerminalOrdersRequest{
        CustomerOrderReference: sdk.String("aperiam"),
        Limit: sdk.Int(409054),
        MerchantID: "quaerat",
        Offset: sdk.Int(162954),
        Status: sdk.String("repellendus"),
    }, operations.GetMerchantsMerchantIDTerminalOrdersSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerminalOrdersResponse != nil {
        // handle response
    }
}
```

## GetMerchantsMerchantIDTerminalOrdersOrderID

Returns the details of the terminal products order identified in the path.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

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
    res, err := s.TerminalOrdersMerchantLevel.GetMerchantsMerchantIDTerminalOrdersOrderID(ctx, operations.GetMerchantsMerchantIDTerminalOrdersOrderIDRequest{
        MerchantID: "officia",
        OrderID: "maxime",
    }, operations.GetMerchantsMerchantIDTerminalOrdersOrderIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerminalOrder != nil {
        // handle response
    }
}
```

## GetMerchantsMerchantIDTerminalProducts

Returns a country-specific list of payment terminal packages and parts that the merchant account identified in the path has access to.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read
* Management API—Terminal ordering read and write

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
    res, err := s.TerminalOrdersMerchantLevel.GetMerchantsMerchantIDTerminalProducts(ctx, operations.GetMerchantsMerchantIDTerminalProductsRequest{
        Country: "Lebanon",
        Limit: sdk.Int(640024),
        MerchantID: "asperiores",
        Offset: sdk.Int(368102),
        TerminalModelID: sdk.String("quae"),
    }, operations.GetMerchantsMerchantIDTerminalProductsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerminalProductsResponse != nil {
        // handle response
    }
}
```

## PatchMerchantsMerchantIDTerminalOrdersOrderID

Updates the terminal products order identified in the path.
Updating is only possible while the order has the status **Placed**.

The request body only needs to contain what you want to change. 
However, to update the products in the `items` array, you must provice the entire array. For example, if the array has three items:
 To remove one item, the array must include the remaining two items. Or to add one item, the array must include all four items.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

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
    res, err := s.TerminalOrdersMerchantLevel.PatchMerchantsMerchantIDTerminalOrdersOrderID(ctx, operations.PatchMerchantsMerchantIDTerminalOrdersOrderIDRequest{
        TerminalOrderRequest: &shared.TerminalOrderRequest{
            BillingEntityID: sdk.String("quaerat"),
            CustomerOrderReference: sdk.String("porro"),
            Items: []shared.OrderItem{
                shared.OrderItem{
                    ID: sdk.String("413aa63a-ae8d-4678-a4db-b675fd5e60b3"),
                    Installments: sdk.Int64(449083),
                    Name: sdk.String("Lila Schultz"),
                    Quantity: sdk.Int(381760),
                },
                shared.OrderItem{
                    ID: sdk.String("fbee41f3-3317-4fe3-9b60-eb1ea426555b"),
                    Installments: sdk.Int64(680116),
                    Name: sdk.String("Bethany D'Amore"),
                    Quantity: sdk.Int(296242),
                },
                shared.OrderItem{
                    ID: sdk.String("4ed53b88-f3a8-4d8f-9c0b-2f2fb7b194a2"),
                    Installments: sdk.Int64(447516),
                    Name: sdk.String("Melody Cole"),
                    Quantity: sdk.Int(100032),
                },
                shared.OrderItem{
                    ID: sdk.String("6fe1f08f-4294-4e36-98f4-47f603e8b445"),
                    Installments: sdk.Int64(894864),
                    Name: sdk.String("Mark Rolfson"),
                    Quantity: sdk.Int(329543),
                },
            },
            ShippingLocationID: sdk.String("recusandae"),
            TaxID: sdk.String("reiciendis"),
        },
        MerchantID: "nulla",
        OrderID: "magni",
    }, operations.PatchMerchantsMerchantIDTerminalOrdersOrderIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerminalOrder != nil {
        // handle response
    }
}
```

## PostMerchantsMerchantIDShippingLocations

Creates a shipping location for the merchant account identified in the path. A shipping location defines an address where orders can be shipped to. 

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

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
    res, err := s.TerminalOrdersMerchantLevel.PostMerchantsMerchantIDShippingLocations(ctx, operations.PostMerchantsMerchantIDShippingLocationsRequest{
        ShippingLocation: &shared.ShippingLocation{
            Address: &shared.Address{
                City: sdk.String("Fort Deondreborough"),
                CompanyName: sdk.String("in"),
                Country: sdk.String("Timor-Leste"),
                PostalCode: sdk.String("53573"),
                StateOrProvince: sdk.String("dolorum"),
                StreetAddress: sdk.String("voluptatum"),
                StreetAddress2: sdk.String("error"),
            },
            Contact: &shared.Contact{
                Email: sdk.String("Meredith67@hotmail.com"),
                FirstName: sdk.String("Evangeline"),
                Infix: sdk.String("officia"),
                LastName: sdk.String("Padberg"),
                PhoneNumber: sdk.String("corrupti"),
            },
            ID: sdk.String("e4824d0a-b407-4508-8e51-862065e904f3"),
            Name: sdk.String("Gerald Bradtke"),
        },
        MerchantID: "quidem",
    }, operations.PostMerchantsMerchantIDShippingLocationsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShippingLocation != nil {
        // handle response
    }
}
```

## PostMerchantsMerchantIDTerminalOrders

Creates an order for payment terminal products for the merchant account identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

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
    res, err := s.TerminalOrdersMerchantLevel.PostMerchantsMerchantIDTerminalOrders(ctx, operations.PostMerchantsMerchantIDTerminalOrdersRequest{
        TerminalOrderRequest: &shared.TerminalOrderRequest{
            BillingEntityID: sdk.String("atque"),
            CustomerOrderReference: sdk.String("laborum"),
            Items: []shared.OrderItem{
                shared.OrderItem{
                    ID: sdk.String("f603a79f-9dfe-40ab-bda8-a50ce187f86b"),
                    Installments: sdk.Int64(806670),
                    Name: sdk.String("Georgia Farrell"),
                    Quantity: sdk.Int(539118),
                },
                shared.OrderItem{
                    ID: sdk.String("9eee9526-f8d9-486e-881e-ad4f0e101256"),
                    Installments: sdk.Int64(246535),
                    Name: sdk.String("Ross Gusikowski"),
                    Quantity: sdk.Int(580107),
                },
                shared.OrderItem{
                    ID: sdk.String("e973e922-a57a-415b-a3e0-60807e2b6e3a"),
                    Installments: sdk.Int64(715208),
                    Name: sdk.String("Jordan Haag"),
                    Quantity: sdk.Int(3099),
                },
            },
            ShippingLocationID: sdk.String("corporis"),
            TaxID: sdk.String("perspiciatis"),
        },
        MerchantID: "nihil",
    }, operations.PostMerchantsMerchantIDTerminalOrdersSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerminalOrder != nil {
        // handle response
    }
}
```

## PostMerchantsMerchantIDTerminalOrdersOrderIDCancel

Cancels the terminal products order identified in the path.
Cancelling is only possible while the order has the status **Placed**.
To cancel an order, make a POST call without a request body. The response returns the full order details, but with the status changed to **Cancelled**.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal ordering read and write

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
    res, err := s.TerminalOrdersMerchantLevel.PostMerchantsMerchantIDTerminalOrdersOrderIDCancel(ctx, operations.PostMerchantsMerchantIDTerminalOrdersOrderIDCancelRequest{
        MerchantID: "mollitia",
        OrderID: "voluptas",
    }, operations.PostMerchantsMerchantIDTerminalOrdersOrderIDCancelSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerminalOrder != nil {
        // handle response
    }
}
```
