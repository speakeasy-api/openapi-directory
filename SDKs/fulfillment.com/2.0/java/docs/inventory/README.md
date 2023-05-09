# inventory

### Available Operations

* [getInventory](#getinventory) - List of Item Inventories

## getInventory

Retrieve inventory for one or more items. This API requires elevated permissions, please speak to your success manager.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInventoryRequest;
import org.openapis.openapi.models.operations.GetInventoryResponse;
import org.openapis.openapi.models.operations.GetInventorySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInventoryRequest req = new GetInventoryRequest() {{
                externalSkuNames = new String[]{{
                    add("odit"),
                    add("at"),
                    add("at"),
                    add("maiores"),
                }};
                limit = 473608L;
                merchantIds = new Long[]{{
                    add(800911L),
                    add(461479L),
                    add(520478L),
                    add(780529L),
                }};
                page = 678880L;
                warehouseIds = new Long[]{{
                    add(720633L),
                }};
            }};            

            GetInventoryResponse res = sdk.inventory.getInventory(req, new GetInventorySecurity("officia") {{
                fdcAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itemInventoryArrayV2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
