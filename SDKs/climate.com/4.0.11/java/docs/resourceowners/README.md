# resourceOwners

## Overview

Resource Owner data endpoints.

### Available Operations

* [getResourceOwner](#getresourceowner) - Retrieve a resource owner by ID

## getResourceOwner

Retrieve a resource owner for the given `resourceOwnerId`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourceOwnerRequest;
import org.openapis.openapi.models.operations.GetResourceOwnerResponse;
import org.openapis.openapi.models.operations.GetResourceOwnerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourceOwnerRequest req = new GetResourceOwnerRequest("7bd466d2-8c10-4ab3-8dca-4251904e523c");            

            GetResourceOwnerResponse res = sdk.resourceOwners.getResourceOwner(req, new GetResourceOwnerSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.resourceOwner != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
