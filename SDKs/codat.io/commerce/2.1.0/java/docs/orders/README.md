# orders

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [listOrders](#listorders) - List orders

## listOrders

Get a list of orders placed or held on the linked commerce platform

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOrdersRequest;
import org.openapis.openapi.models.operations.ListOrdersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOrdersRequest req = new ListOrdersRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 1) {{
                orderBy = "-modifiedDate";
                pageSize = 100;
                query = "vel";
            }};            

            ListOrdersResponse res = sdk.orders.listOrders(req);

            if (res.orders != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
