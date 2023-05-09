# InventoryTask

### Available Operations

* [CreateInventoryTask](#createinventorytask) - This method creates an inventory-related download task for a specified feed type with optional filter criteria. When using this method, specify the <strong>feedType</strong>. <br/><br/>This method returns the location response header containing the <strong>getInventoryTask</strong> call URI to retrieve the inventory task you just created. The URL includes the eBay-assigned task ID, which you can use to reference the inventory task.<br/><br/>To retrieve the status of the task, use the <strong>getInventoryTask</strong> method to retrieve a single task ID or the <strong>getInventoryTasks</strong> method to retrieve multiple task IDs.<p> <span class="tablenote"><strong>Note:</strong> The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified.</span></p>Presently, this method supports Active Inventory Report. The <strong>ActiveInventoryReport</strong> returns a report that contains price and quantity information for all of the active listings for a specific seller. A seller can use this information to maintain their inventory on eBay.
* [GetInventoryTask](#getinventorytask) - This method retrieves the task details and status of the specified inventory-related task. The input is <strong>task_id</strong>.
* [GetInventoryTasks](#getinventorytasks) - This method searches for multiple tasks of a specific feed type, and includes date filters and pagination.

## CreateInventoryTask

This method creates an inventory-related download task for a specified feed type with optional filter criteria. When using this method, specify the <strong>feedType</strong>. <br/><br/>This method returns the location response header containing the <strong>getInventoryTask</strong> call URI to retrieve the inventory task you just created. The URL includes the eBay-assigned task ID, which you can use to reference the inventory task.<br/><br/>To retrieve the status of the task, use the <strong>getInventoryTask</strong> method to retrieve a single task ID or the <strong>getInventoryTasks</strong> method to retrieve multiple task IDs.<p> <span class="tablenote"><strong>Note:</strong> The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified.</span></p>Presently, this method supports Active Inventory Report. The <strong>ActiveInventoryReport</strong> returns a report that contains price and quantity information for all of the active listings for a specific seller. A seller can use this information to maintain their inventory on eBay.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InventoryTask.CreateInventoryTask(ctx, shared.CreateInventoryTaskRequest{
        FeedType: sdk.String("repellendus"),
        FilterCriteria: &shared.InventoryFilterCriteria{
            ListingFormat: sdk.String("sapiente"),
        },
        SchemaVersion: sdk.String("quo"),
    }, operations.CreateInventoryTaskSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetInventoryTask

This method retrieves the task details and status of the specified inventory-related task. The input is <strong>task_id</strong>.

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
    res, err := s.InventoryTask.GetInventoryTask(ctx, operations.GetInventoryTaskRequest{
        TaskID: "odit",
    }, operations.GetInventoryTaskSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InventoryTask != nil {
        // handle response
    }
}
```

## GetInventoryTasks

This method searches for multiple tasks of a specific feed type, and includes date filters and pagination.

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
    res, err := s.InventoryTask.GetInventoryTasks(ctx, operations.GetInventoryTasksRequest{
        DateRange: sdk.String("at"),
        FeedType: sdk.String("at"),
        Limit: sdk.String("maiores"),
        LookBackDays: sdk.String("molestiae"),
        Offset: sdk.String("quod"),
        ScheduleID: sdk.String("quod"),
    }, operations.GetInventoryTasksSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InventoryTaskCollection != nil {
        // handle response
    }
}
```
