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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetAccountingRequest{
        FromDate: "corrupti",
        Hydrate: []GetAccountingHydrateEnum{
            "items",
            "items",
            "items",
        },
        Limit: 715190,
        OrderIds: []int64{
            602763,
            857946,
            544883,
            847252,
        },
        Page: 423655,
        ToDate: "error",
        WarehouseIds: []int64{
            384382,
            437587,
            297534,
        },
    }

    ctx := context.Background()
    res, err := s.Accounting.GetAccounting(ctx, req, operations.GetAccountingSecurity{
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


### Accounting

* `GetAccounting` - List Order Accounting

### Auth

* `PostOauthAccessToken` - Generate an Access Token

### Inventory

* `GetInventory` - List of Item Inventories

### Orders

* `DeleteOrdersID` - Cancel an Order
* `GetOrders` - List of Orders
* `GetOrder` - Order Details
* `PostOrders` - New Order

### Partners

* `PutOrdersIDShip` - Ship an Order
* `PutOrdersIDStatus` - Update Order Status

### Returns

* `GetReturns` - List Returns
* `PutReturns` - Inform us of an RMA

### Tracking

* `GetTrack` - Tracking

### Users

* `GetUsersMe` - About Me
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
