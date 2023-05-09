# inventoryTask

### Available Operations

* [createInventoryTask](#createinventorytask) - This method creates an inventory-related download task for a specified feed type with optional filter criteria. When using this method, specify the <strong>feedType</strong>. <br/><br/>This method returns the location response header containing the <strong>getInventoryTask</strong> call URI to retrieve the inventory task you just created. The URL includes the eBay-assigned task ID, which you can use to reference the inventory task.<br/><br/>To retrieve the status of the task, use the <strong>getInventoryTask</strong> method to retrieve a single task ID or the <strong>getInventoryTasks</strong> method to retrieve multiple task IDs.<p> <span class="tablenote"><strong>Note:</strong> The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified.</span></p>Presently, this method supports Active Inventory Report. The <strong>ActiveInventoryReport</strong> returns a report that contains price and quantity information for all of the active listings for a specific seller. A seller can use this information to maintain their inventory on eBay.
* [getInventoryTask](#getinventorytask) - This method retrieves the task details and status of the specified inventory-related task. The input is <strong>task_id</strong>.
* [getInventoryTasks](#getinventorytasks) - This method searches for multiple tasks of a specific feed type, and includes date filters and pagination.

## createInventoryTask

This method creates an inventory-related download task for a specified feed type with optional filter criteria. When using this method, specify the <strong>feedType</strong>. <br/><br/>This method returns the location response header containing the <strong>getInventoryTask</strong> call URI to retrieve the inventory task you just created. The URL includes the eBay-assigned task ID, which you can use to reference the inventory task.<br/><br/>To retrieve the status of the task, use the <strong>getInventoryTask</strong> method to retrieve a single task ID or the <strong>getInventoryTasks</strong> method to retrieve multiple task IDs.<p> <span class="tablenote"><strong>Note:</strong> The scope depends on the feed type. An error message results when an unsupported scope or feed type is specified.</span></p>Presently, this method supports Active Inventory Report. The <strong>ActiveInventoryReport</strong> returns a report that contains price and quantity information for all of the active listings for a specific seller. A seller can use this information to maintain their inventory on eBay.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInventoryTaskResponse;
import org.openapis.openapi.models.operations.CreateInventoryTaskSecurity;
import org.openapis.openapi.models.shared.CreateInventoryTaskRequest;
import org.openapis.openapi.models.shared.InventoryFilterCriteria;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateInventoryTaskRequest req = new CreateInventoryTaskRequest() {{
                feedType = "quo";
                filterCriteria = new InventoryFilterCriteria() {{
                    listingFormat = "odit";
                }};;
                schemaVersion = "at";
            }};            

            CreateInventoryTaskResponse res = sdk.inventoryTask.createInventoryTask(req, new CreateInventoryTaskSecurity("at") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInventoryTask

This method retrieves the task details and status of the specified inventory-related task. The input is <strong>task_id</strong>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInventoryTaskRequest;
import org.openapis.openapi.models.operations.GetInventoryTaskResponse;
import org.openapis.openapi.models.operations.GetInventoryTaskSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInventoryTaskRequest req = new GetInventoryTaskRequest("maiores");            

            GetInventoryTaskResponse res = sdk.inventoryTask.getInventoryTask(req, new GetInventoryTaskSecurity("molestiae") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.inventoryTask != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInventoryTasks

This method searches for multiple tasks of a specific feed type, and includes date filters and pagination.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInventoryTasksRequest;
import org.openapis.openapi.models.operations.GetInventoryTasksResponse;
import org.openapis.openapi.models.operations.GetInventoryTasksSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInventoryTasksRequest req = new GetInventoryTasksRequest() {{
                dateRange = "quod";
                feedType = "quod";
                limit = "esse";
                lookBackDays = "totam";
                offset = "porro";
                scheduleId = "dolorum";
            }};            

            GetInventoryTasksResponse res = sdk.inventoryTask.getInventoryTasks(req, new GetInventoryTasksSecurity("dicta") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.inventoryTaskCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
