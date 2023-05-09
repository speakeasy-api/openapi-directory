# disputes

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [listDisputes](#listdisputes) - List disputes

## listDisputes

List commerce disputes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDisputesRequest;
import org.openapis.openapi.models.operations.ListDisputesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDisputesRequest req = new ListDisputesRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 1) {{
                orderBy = "-modifiedDate";
                pageSize = 100;
                query = "nulla";
            }};            

            ListDisputesResponse res = sdk.disputes.listDisputes(req);

            if (res.disputes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
