# TerminalOrdersCompanyLevel

### Available Operations

* [GetCompaniesCompanyIDBillingEntities](#getcompaniescompanyidbillingentities) - Get a list of billing entities
* [GetCompaniesCompanyIDShippingLocations](#getcompaniescompanyidshippinglocations) - Get a list of shipping locations
* [GetCompaniesCompanyIDTerminalModels](#getcompaniescompanyidterminalmodels) - Get a list of terminal models
* [GetCompaniesCompanyIDTerminalOrders](#getcompaniescompanyidterminalorders) - Get a list of orders
* [GetCompaniesCompanyIDTerminalOrdersOrderID](#getcompaniescompanyidterminalordersorderid) - Get an order
* [GetCompaniesCompanyIDTerminalProducts](#getcompaniescompanyidterminalproducts) - Get a list of terminal products
* [PatchCompaniesCompanyIDTerminalOrdersOrderID](#patchcompaniescompanyidterminalordersorderid) - Update an order
* [PostCompaniesCompanyIDShippingLocations](#postcompaniescompanyidshippinglocations) - Create a shipping location
* [PostCompaniesCompanyIDTerminalOrders](#postcompaniescompanyidterminalorders) - Create an order
* [PostCompaniesCompanyIDTerminalOrdersOrderIDCancel](#postcompaniescompanyidterminalordersorderidcancel) - Cancel an order

## GetCompaniesCompanyIDBillingEntities

Returns the billing entities of the company identified in the path and all merchant accounts belonging to the company.
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
    res, err := s.TerminalOrdersCompanyLevel.GetCompaniesCompanyIDBillingEntities(ctx, operations.GetCompaniesCompanyIDBillingEntitiesRequest{
        CompanyID: "deleniti",
        Name: sdk.String("Terence Rau"),
    }, operations.GetCompaniesCompanyIDBillingEntitiesSecurity{
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

## GetCompaniesCompanyIDShippingLocations

Returns the shipping locations for the company identified in the path and all merchant accounts belonging to the company.
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
    res, err := s.TerminalOrdersCompanyLevel.GetCompaniesCompanyIDShippingLocations(ctx, operations.GetCompaniesCompanyIDShippingLocationsRequest{
        CompanyID: "ipsum",
        Limit: sdk.Int(456015),
        Name: sdk.String("Elbert Gislason I"),
        Offset: sdk.Int(758379),
    }, operations.GetCompaniesCompanyIDShippingLocationsSecurity{
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

## GetCompaniesCompanyIDTerminalModels

Returns a list of payment terminal models that the company identified in the path has access to.
The response includes the terminal model ID, which can be used as a query parameter when getting a list of terminals or a list of products for ordering.

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
    res, err := s.TerminalOrdersCompanyLevel.GetCompaniesCompanyIDTerminalModels(ctx, operations.GetCompaniesCompanyIDTerminalModelsRequest{
        CompanyID: "accusamus",
    }, operations.GetCompaniesCompanyIDTerminalModelsSecurity{
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

## GetCompaniesCompanyIDTerminalOrders

Returns a lists of terminal products orders for the company identified in the path.
To filter the list, use one or more of the query parameters.

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
    res, err := s.TerminalOrdersCompanyLevel.GetCompaniesCompanyIDTerminalOrders(ctx, operations.GetCompaniesCompanyIDTerminalOrdersRequest{
        CompanyID: "ad",
        CustomerOrderReference: sdk.String("saepe"),
        Limit: sdk.Int(383464),
        Offset: sdk.Int(645785),
        Status: sdk.String("provident"),
    }, operations.GetCompaniesCompanyIDTerminalOrdersSecurity{
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

## GetCompaniesCompanyIDTerminalOrdersOrderID

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
    res, err := s.TerminalOrdersCompanyLevel.GetCompaniesCompanyIDTerminalOrdersOrderID(ctx, operations.GetCompaniesCompanyIDTerminalOrdersOrderIDRequest{
        CompanyID: "minima",
        OrderID: "repellendus",
    }, operations.GetCompaniesCompanyIDTerminalOrdersOrderIDSecurity{
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

## GetCompaniesCompanyIDTerminalProducts

Returns a country-specific list of payment terminal packages and parts that the company identified in the path has access to.
 
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
    res, err := s.TerminalOrdersCompanyLevel.GetCompaniesCompanyIDTerminalProducts(ctx, operations.GetCompaniesCompanyIDTerminalProductsRequest{
        CompanyID: "totam",
        Country: "Netherlands",
        Limit: sdk.Int(55),
        Offset: sdk.Int(872651),
        TerminalModelID: sdk.String("quaerat"),
    }, operations.GetCompaniesCompanyIDTerminalProductsSecurity{
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

## PatchCompaniesCompanyIDTerminalOrdersOrderID

Updates the terminal products order identified in the path.
Updating is only possible while the order has the status **Placed**.

The request body only needs to contain what you want to change. 
However, to update the products in the `items` array, you must provide the entire array. For example, if the array has three items:
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
    res, err := s.TerminalOrdersCompanyLevel.PatchCompaniesCompanyIDTerminalOrdersOrderID(ctx, operations.PatchCompaniesCompanyIDTerminalOrdersOrderIDRequest{
        TerminalOrderRequest: &shared.TerminalOrderRequest{
            BillingEntityID: sdk.String("tempora"),
            CustomerOrderReference: sdk.String("vel"),
            Items: []shared.OrderItem{
                shared.OrderItem{
                    ID: sdk.String("e2af7a73-cf3b-4e45-bf87-0b326b5a7342"),
                    Installments: sdk.Int64(586784),
                    Name: sdk.String("Miss Jody Rogahn"),
                    Quantity: sdk.Int(276894),
                },
                shared.OrderItem{
                    ID: sdk.String("22bb679d-2322-4715-bf0c-bb1e31b8b90f"),
                    Installments: sdk.Int64(209157),
                    Name: sdk.String("Clara Fisher Jr."),
                    Quantity: sdk.Int(16429),
                },
                shared.OrderItem{
                    ID: sdk.String("8e0adcf4-b921-4879-bce9-53f73ef7fbc7"),
                    Installments: sdk.Int64(630448),
                    Name: sdk.String("Hugo Kuphal"),
                    Quantity: sdk.Int(848944),
                },
                shared.OrderItem{
                    ID: sdk.String("39c0f5d2-cff7-4c70-a456-26d436813f16"),
                    Installments: sdk.Int64(862192),
                    Name: sdk.String("Boyd Heathcote"),
                    Quantity: sdk.Int(906556),
                },
            },
            ShippingLocationID: sdk.String("ea"),
            TaxID: sdk.String("impedit"),
        },
        CompanyID: "corporis",
        OrderID: "veniam",
    }, operations.PatchCompaniesCompanyIDTerminalOrdersOrderIDSecurity{
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

## PostCompaniesCompanyIDShippingLocations

Creates a shipping location for the company identified in the path. A shipping location defines an address where orders can be delivered.

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
    res, err := s.TerminalOrdersCompanyLevel.PostCompaniesCompanyIDShippingLocations(ctx, operations.PostCompaniesCompanyIDShippingLocationsRequest{
        ShippingLocation: &shared.ShippingLocation{
            Address: &shared.Address{
                City: sdk.String("North Elissa"),
                CompanyName: sdk.String("ea"),
                Country: sdk.String("San Marino"),
                PostalCode: sdk.String("91309"),
                StateOrProvince: sdk.String("libero"),
                StreetAddress: sdk.String("aut"),
                StreetAddress2: sdk.String("aut"),
            },
            Contact: &shared.Contact{
                Email: sdk.String("Olaf88@yahoo.com"),
                FirstName: sdk.String("Arjun"),
                Infix: sdk.String("non"),
                LastName: sdk.String("Borer"),
                PhoneNumber: sdk.String("dolorum"),
            },
            ID: sdk.String("ac366c8d-d6b1-4442-9074-74778a7bd466"),
            Name: sdk.String("Alan Lang Jr."),
        },
        CompanyID: "id",
    }, operations.PostCompaniesCompanyIDShippingLocationsSecurity{
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

## PostCompaniesCompanyIDTerminalOrders

Creates an order for payment terminal products for the company identified in the path.

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
    res, err := s.TerminalOrdersCompanyLevel.PostCompaniesCompanyIDTerminalOrders(ctx, operations.PostCompaniesCompanyIDTerminalOrdersRequest{
        TerminalOrderRequest: &shared.TerminalOrderRequest{
            BillingEntityID: sdk.String("quidem"),
            CustomerOrderReference: sdk.String("neque"),
            Items: []shared.OrderItem{
                shared.OrderItem{
                    ID: sdk.String("dca42519-04e5-423c-be0b-c7178e4796f2"),
                    Installments: sdk.Int64(645570),
                    Name: sdk.String("Carol Sawayn"),
                    Quantity: sdk.Int(510017),
                },
                shared.OrderItem{
                    ID: sdk.String("282aa482-562f-4222-a981-7ee17cbe61e6"),
                    Installments: sdk.Int64(690025),
                    Name: sdk.String("Luz McClure"),
                    Quantity: sdk.Int(756779),
                },
                shared.OrderItem{
                    ID: sdk.String("0ab3c20c-4f37-489f-9871-f99dd2efd121"),
                    Installments: sdk.Int64(628899),
                    Name: sdk.String("Dr. Gene Wiegand"),
                    Quantity: sdk.Int(447378),
                },
                shared.OrderItem{
                    ID: sdk.String("4bdb04f1-5756-4082-968e-a19f1d170513"),
                    Installments: sdk.Int64(237173),
                    Name: sdk.String("Lionel Bartoletti IV"),
                    Quantity: sdk.Int(428796),
                },
            },
            ShippingLocationID: sdk.String("mollitia"),
            TaxID: sdk.String("ab"),
        },
        CompanyID: "corrupti",
    }, operations.PostCompaniesCompanyIDTerminalOrdersSecurity{
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

## PostCompaniesCompanyIDTerminalOrdersOrderIDCancel

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
    res, err := s.TerminalOrdersCompanyLevel.PostCompaniesCompanyIDTerminalOrdersOrderIDCancel(ctx, operations.PostCompaniesCompanyIDTerminalOrdersOrderIDCancelRequest{
        CompanyID: "non",
        OrderID: "voluptatem",
    }, operations.PostCompaniesCompanyIDTerminalOrdersOrderIDCancelSecurity{
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
