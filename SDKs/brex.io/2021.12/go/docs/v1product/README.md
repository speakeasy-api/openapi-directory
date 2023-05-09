# V1Product

## Overview

Product Search, Order and Retrieve methods

### Available Operations

* [ProductAvailability](#productavailability) - Retrieves a document availability result
* [ProductCatalog](#productcatalog) - Returns a catalog of products
* [ProductNotifier](#productnotifier) - Returns metadata for a notifier
* [ProductNotifierCreate](#productnotifiercreate) - Creates a notifier for an order
* [ProductOrder](#productorder) - Places a product order
* [ProductOrderConcierge](#productorderconcierge) - Places a concierge order
* [ProductOrderUbo](#productorderubo) - Places a UBO order
* [ProductOrderWithOption](#productorderwithoption) - Places a product order
* [ProductRetrieve](#productretrieve) - Retrieves the result of an order
* [ProductSearch](#productsearch) - Returns a list of products
* [ProductStatus](#productstatus) - Returns metadata for a order
* [ProductUpdateAction](#productupdateaction) - Updates metadata of an order

## ProductAvailability

Check availability and valid options for a particular product for a particular company identfied by its id

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
    res, err := s.V1Product.ProductAvailability(ctx, operations.ProductAvailabilityRequest{
        Sku: "quam",
        SubjectID: "molestiae",
    }, operations.ProductAvailabilitySecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductAvailability200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProductCatalog

Returns a catalog of purchasable products available with some metadata for a particular country

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
    res, err := s.V1Product.ProductCatalog(ctx, operations.ProductCatalogRequest{
        Country: "velit",
    }, operations.ProductCatalogSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductCatalog200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProductNotifier

Queries and returns all metadata associated with a notifier identified by its notifer id

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
    res, err := s.V1Product.ProductNotifier(ctx, operations.ProductNotifierRequest{
        NotifierID: "error",
    }, operations.ProductNotifierSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductNotifier200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProductNotifierCreate

Create a notifier for a particular order. Parameters can be supplied in the path

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
    res, err := s.V1Product.ProductNotifierCreate(ctx, operations.ProductNotifierCreateRequest{
        OrderID: "quia",
        Type: "quis",
        URI: "vitae",
    }, operations.ProductNotifierCreateSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductNotifierCreate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProductOrder

Place an order for a particular product identified by its SKU for a particular company identified by its id

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
    res, err := s.V1Product.ProductOrder(ctx, operations.ProductOrderRequest{
        Sku: "laborum",
        SubjectID: "animi",
    }, operations.ProductOrderSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductOrder200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProductOrderConcierge

Place an order for a concierge product

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
    res, err := s.V1Product.ProductOrderConcierge(ctx, operations.ProductOrderConciergeRequestBody{
        CompanyName: sdk.String("null"),
        ContactEmail: sdk.String("null"),
        ContactPhone: sdk.String("null"),
        CostConfirmation: sdk.Bool(false),
        Country: sdk.String("null"),
        FinancialData: sdk.Bool(false),
        HistoricInformation: sdk.Bool(false),
        InformationRequirements: sdk.String("null"),
        LocationInvestigation: sdk.Bool(false),
        Priority: sdk.String("standard"),
        RegisterData: sdk.Bool(false),
        RegisterNumber: sdk.String("null"),
        SubjectID: sdk.String("null"),
    }, operations.ProductOrderConciergeSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductOrderConcierge200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProductOrderUbo

Place an order for a UBO (ultimate beneficial owner) discovery report

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
    res, err := s.V1Product.ProductOrderUbo(ctx, operations.ProductOrderUboRequestBody{
        CallbackURL: sdk.String("null"),
        Credits: sdk.Float64(-1),
        IncludeDocs: sdk.Bool(false),
        Levels: sdk.String("25,50"),
        Strategy: sdk.String("FULL"),
        SubjectID: "null",
    }, operations.ProductOrderUboSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductOrderUbo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProductOrderWithOption

Place an order for a particular product identified by its SKU with a particular option for a particular company identified by its id

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
    res, err := s.V1Product.ProductOrderWithOption(ctx, operations.ProductOrderWithOptionRequest{
        Option: "enim",
        Sku: "odit",
        SubjectID: "quo",
    }, operations.ProductOrderWithOptionSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductOrderWithOption200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProductRetrieve

Retrieves the document or structured data associated with a completed order identified with its order id

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
    res, err := s.V1Product.ProductRetrieve(ctx, operations.ProductRetrieveRequest{
        OrderID: "sequi",
    }, operations.ProductRetrieveSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductRetrieve200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## ProductSearch

Search for possible products for a particular company identified by its id

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
    res, err := s.V1Product.ProductSearch(ctx, operations.ProductSearchRequest{
        SubjectID: "tenetur",
    }, operations.ProductSearchSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductSearch200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## ProductStatus

Retrieve the current status of an order identified by its order id

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
    res, err := s.V1Product.ProductStatus(ctx, operations.ProductStatusRequest{
        OrderID: "ipsam",
    }, operations.ProductStatusSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ProductUpdateAction

Update an existing order identified by its order id

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
    res, err := s.V1Product.ProductUpdateAction(ctx, operations.ProductUpdateActionRequest{
        RequestBody: &operations.ProductUpdateActionRequestBody{
            Credits: sdk.Float64(100),
        },
        Action: "id",
        OrderID: "possimus",
    }, operations.ProductUpdateActionSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductUpdateAction200ApplicationJSONObject != nil {
        // handle response
    }
}
```
