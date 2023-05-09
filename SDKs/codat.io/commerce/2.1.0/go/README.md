# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/codat.io/commerce/2.1.0/go
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
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AuthHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CompanyInfo.GetCompanyInfo(ctx, operations.GetCompanyInfoRequest{
        CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
        ConnectionID: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyInfo != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [CompanyInfo](docs/companyinfo/README.md)

* [GetCompanyInfo](docs/companyinfo/README.md#getcompanyinfo) - Get company info

### [Customers](docs/customers/README.md)

* [ListCustomers](docs/customers/README.md#listcustomers) - List customers

### [Disputes](docs/disputes/README.md)

* [ListDisputes](docs/disputes/README.md#listdisputes) - List disputes

### [Locations](docs/locations/README.md)

* [ListLocations](docs/locations/README.md#listlocations) - List locations

### [Orders](docs/orders/README.md)

* [ListOrders](docs/orders/README.md#listorders) - List orders

### [Payments](docs/payments/README.md)

* [ListPaymentMethods](docs/payments/README.md#listpaymentmethods) - List payment methods
* [ListPayments](docs/payments/README.md#listpayments) - List payments

### [Products](docs/products/README.md)

* [ListProductCategories](docs/products/README.md#listproductcategories) - List product categories
* [ListProducts](docs/products/README.md#listproducts) - List products

### [TaxComponents](docs/taxcomponents/README.md)

* [GetTaxComponents](docs/taxcomponents/README.md#gettaxcomponents) - List tax components

### [Transactions](docs/transactions/README.md)

* [ListTransactions](docs/transactions/README.md#listtransactions) - List transactions
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
