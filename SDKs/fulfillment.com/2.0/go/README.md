# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/fulfillment.com/2.0/go
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounting.GetAccounting(ctx, operations.GetAccountingRequest{
        FromDate: "corrupti",
        Hydrate: []GetAccountingHydrateEnum{
            operations.GetAccountingHydrateEnumItems,
            operations.GetAccountingHydrateEnumItems,
            operations.GetAccountingHydrateEnumItems,
        },
        Limit: sdk.Int64(715190),
        OrderIds: []int64{
            602763,
            857946,
            544883,
            847252,
        },
        Page: sdk.Int64(423655),
        ToDate: "error",
        WarehouseIds: []int64{
            384382,
            437587,
            297534,
        },
    }, operations.GetAccountingSecurity{
        FdcAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountingArrayV2 != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Accounting](docs/accounting/README.md)

* [GetAccounting](docs/accounting/README.md#getaccounting) - List Order Accounting

### [Auth](docs/auth/README.md)

* [PostOauthAccessToken](docs/auth/README.md#postoauthaccesstoken) - Generate an Access Token

### [Inventory](docs/inventory/README.md)

* [GetInventory](docs/inventory/README.md#getinventory) - List of Item Inventories

### [Orders](docs/orders/README.md)

* [DeleteOrdersID](docs/orders/README.md#deleteordersid) - Cancel an Order
* [GetOrders](docs/orders/README.md#getorders) - List of Orders
* [GetOrder](docs/orders/README.md#getorder) - Order Details
* [PostOrders](docs/orders/README.md#postorders) - New Order

### [Partners](docs/partners/README.md)

* [PutOrdersIDShip](docs/partners/README.md#putordersidship) - Ship an Order
* [PutOrdersIDStatus](docs/partners/README.md#putordersidstatus) - Update Order Status

### [Returns](docs/returns/README.md)

* [GetReturns](docs/returns/README.md#getreturns) - List Returns
* [PutReturns](docs/returns/README.md#putreturns) - Inform us of an RMA

### [Tracking](docs/tracking/README.md)

* [GetTrack](docs/tracking/README.md#gettrack) - Tracking

### [Users](docs/users/README.md)

* [GetUsersMe](docs/users/README.md#getusersme) - About Me
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
