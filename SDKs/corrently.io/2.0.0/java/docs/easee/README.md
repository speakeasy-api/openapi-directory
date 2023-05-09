# easee

## Overview

Alternative access to EASEE.cloud Data.

### Available Operations

* [easeeSessions](#easeesessions) - Returns lastSession info for all easee wallboxes (chargers) given user has access to.

## easeeSessions

Refer to easee.cloud API for details.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EaseeSessionsRequest;
import org.openapis.openapi.models.operations.EaseeSessionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EaseeSessionsRequest req = new EaseeSessionsRequest() {{
                password = "explicabo";
                username = "Nestor.Halvorson";
            }};            

            EaseeSessionsResponse res = sdk.easee.easeeSessions(req);

            if (res.easeeChargers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
