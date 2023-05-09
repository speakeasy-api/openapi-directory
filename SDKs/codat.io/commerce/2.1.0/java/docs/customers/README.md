# customers

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [listCustomers](#listcustomers) - List customers

## listCustomers

List all commerce customers for the given company and data connection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomersRequest;
import org.openapis.openapi.models.operations.ListCustomersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCustomersRequest req = new ListCustomersRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 1) {{
                orderBy = "-modifiedDate";
                pageSize = 100;
                query = "quibusdam";
            }};            

            ListCustomersResponse res = sdk.customers.listCustomers(req);

            if (res.customers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
