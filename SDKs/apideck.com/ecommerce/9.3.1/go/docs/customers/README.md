# Customers

### Available Operations

* [CustomersAll](#customersall) - List Customers
* [CustomersOne](#customersone) - Get Customer

## CustomersAll

List Customers

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
    res, err := s.Customers.CustomersAll(ctx, operations.CustomersAllRequest{
        Cursor: sdk.String("corrupti"),
        Fields: sdk.String("illum"),
        Filter: &shared.EcommerceCustomersFilter{
            Email: sdk.String("elon@musk.com"),
            PhoneNumber: sdk.String("111-111-1111"),
        },
        Limit: sdk.Int64(423655),
        Raw: sdk.Bool(false),
        XApideckAppID: "error",
        XApideckConsumerID: "deserunt",
        XApideckServiceID: sdk.String("suscipit"),
    }, operations.CustomersAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEcommerceCustomersResponse != nil {
        // handle response
    }
}
```

## CustomersOne

Get Customer

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
    res, err := s.Customers.CustomersOne(ctx, operations.CustomersOneRequest{
        Fields: sdk.String("iure"),
        ID: "4e0f467c-c879-46ed-951a-05dfc2ddf7cc",
        Raw: sdk.Bool(false),
        XApideckAppID: "esse",
        XApideckConsumerID: "totam",
        XApideckServiceID: sdk.String("porro"),
    }, operations.CustomersOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEcommerceCustomerResponse != nil {
        // handle response
    }
}
```
