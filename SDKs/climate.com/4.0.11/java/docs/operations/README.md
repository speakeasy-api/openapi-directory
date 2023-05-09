# operations

## Overview

Operation data endpoints.

### Available Operations

* [fetchOperations](#fetchoperations) - Retrieve the operations accessible to a a given user.

## fetchOperations

Retrieve the **operations** accessible to the authenticated user. Filter the results by resource owner if the `resourceOwnerId` query parameter is specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchOperationsRequest;
import org.openapis.openapi.models.operations.FetchOperationsResponse;
import org.openapis.openapi.models.operations.FetchOperationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchOperationsRequest req = new FetchOperationsRequest() {{
                resourceOwnerId = "fuga";
            }};            

            FetchOperationsResponse res = sdk.operations.fetchOperations(req, new FetchOperationsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.operations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
