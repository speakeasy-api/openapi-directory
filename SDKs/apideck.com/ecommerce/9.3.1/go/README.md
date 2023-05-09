# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/ecommerce/9.3.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        Fields: sdk.String("provident"),
        Filter: &shared.EcommerceCustomersFilter{
            Email: sdk.String("elon@musk.com"),
            PhoneNumber: sdk.String("111-111-1111"),
        },
        Limit: sdk.Int64(715190),
        Raw: sdk.Bool(false),
        XApideckAppID: "quibusdam",
        XApideckConsumerID: "unde",
        XApideckServiceID: sdk.String("nulla"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Customers](docs/customers/README.md)

* [CustomersAll](docs/customers/README.md#customersall) - List Customers
* [CustomersOne](docs/customers/README.md#customersone) - Get Customer

### [Orders](docs/orders/README.md)

* [OrdersAll](docs/orders/README.md#ordersall) - List Orders
* [OrdersOne](docs/orders/README.md#ordersone) - Get Order

### [Products](docs/products/README.md)

* [ProductsAll](docs/products/README.md#productsall) - List Products
* [ProductsOne](docs/products/README.md#productsone) - Get Product

### [Stores](docs/stores/README.md)

* [StoresOne](docs/stores/README.md#storesone) - Get Store
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
