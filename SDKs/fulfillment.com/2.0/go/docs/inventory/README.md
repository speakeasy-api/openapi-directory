# Inventory

### Available Operations

* [GetInventory](#getinventory) - List of Item Inventories

## GetInventory

Retrieve inventory for one or more items. This API requires elevated permissions, please speak to your success manager.

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
    res, err := s.Inventory.GetInventory(ctx, operations.GetInventoryRequest{
        ExternalSkuNames: []string{
            "temporibus",
            "ab",
            "quis",
            "veritatis",
        },
        Limit: sdk.Int64(648172),
        MerchantIds: []int64{
            368241,
        },
        Page: sdk.Int64(832620),
        WarehouseIds: []int64{
            778157,
            140350,
            870013,
            870088,
        },
    }, operations.GetInventorySecurity{
        FdcAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemInventoryArrayV2 != nil {
        // handle response
    }
}
```
