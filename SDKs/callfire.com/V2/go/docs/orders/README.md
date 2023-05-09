# Orders

### Available Operations

* [FindOrders](#findorders) - Find orders
* [GetOrder](#getorder) - Find a specific order
* [OrderKeywords](#orderkeywords) - Purchase keywords
* [OrderNumbers](#ordernumbers) - Purchase numbers

## FindOrders

Searches for account orders

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
    res, err := s.Orders.FindOrders(ctx, operations.FindOrdersRequest{
        Fields: sdk.String("non"),
        IntervalBegin: sdk.Int64(888044),
        IntervalEnd: sdk.Int64(505866),
        Limit: sdk.Int(708609),
        Offset: sdk.Int(310381),
        Status: []string{
            "ipsam",
            "debitis",
        },
    }, operations.FindOrdersSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PageNumberOrder != nil {
        // handle response
    }
}
```

## GetOrder

Returns a single NumberOrder instance for a given order id. Order contains information about purchased keywords, local, toll-free numbers

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
    res, err := s.Orders.GetOrder(ctx, operations.GetOrderRequest{
        Fields: sdk.String("rem"),
        ID: 26522,
    }, operations.GetOrderSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NumberOrder != nil {
        // handle response
    }
}
```

## OrderKeywords

Purchase keywords. Send a list of available keywords into this API to purchase them using CallFire credits. Make sure the account has enough credits before trying to purchase the keywords. Keyword should only consist of uppercase and lowercase letters and numbers. Number of characters must be greater than 2, but less than 65.

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
    res, err := s.Orders.OrderKeywords(ctx, operations.OrderKeywordsRequest{
        KeywordPurchaseRequest: &shared.KeywordPurchaseRequest{
            Keywords: []string{
                "error",
                "veniam",
                "minima",
                "recusandae",
            },
        },
        Fields: sdk.String("reiciendis"),
    }, operations.OrderKeywordsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceID != nil {
        // handle response
    }
}
```

## OrderNumbers

Purchase numbers. There are many ways to purchase a number. Set either 'tollFreeCount' or 'localCount' along with some querying fields to purchase numbers by bulk query. Set the list of numbers to purchase by list. Available numbers will be purchased using CallFire credits owned by the user. Make sure the account has enough credits before trying to purchase

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
    res, err := s.Orders.OrderNumbers(ctx, operations.OrderNumbersRequest{
        NumberPurchaseRequest: &shared.NumberPurchaseRequest{
            City: sdk.String("Chattanooga"),
            LocalCount: sdk.Int(48690),
            Numbers: []string{
                "numquam",
                "veniam",
                "in",
                "officiis",
            },
            Prefix: sdk.String("beatae"),
            Promo: sdk.String("laudantium"),
            State: sdk.String("exercitationem"),
            TollFreeCount: sdk.Int(510629),
            Zipcode: sdk.String("36569-7826"),
        },
        Fields: sdk.String("nostrum"),
    }, operations.OrderNumbersSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceID != nil {
        // handle response
    }
}
```
