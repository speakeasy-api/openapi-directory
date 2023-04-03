# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/ecommerce/9.1.2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CustomersAllRequest{
        Cursor: "corrupti",
        Fields: "provident",
        Filter: &shared.EcommerceCustomersFilter{
            Email: "elon@musk.com",
            PhoneNumber: "111-111-1111",
        },
        Limit: 715190,
        Raw: false,
        XApideckAppID: "quibusdam",
        XApideckConsumerID: "unde",
        XApideckServiceID: "nulla",
    }

    ctx := context.Background()
    res, err := s.Customers.CustomersAll(ctx, req, operations.CustomersAllSecurity{
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


### Customers

* `CustomersAll` - List Customers
* `CustomersOne` - Get Customer

### Orders

* `OrdersAll` - List Orders
* `OrdersOne` - Get Order

### Products

* `ProductsAll` - List Products
* `ProductsOne` - Get Product

### Stores

* `StoresOne` - Get Store
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
