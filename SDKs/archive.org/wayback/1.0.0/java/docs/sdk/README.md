# SDK

## Overview

API for Internet Archive's Wayback Machine

### Available Operations

* [getWaybackV1Available](#getwaybackv1available)

## getWaybackV1Available

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWaybackV1AvailableRequest;
import org.openapis.openapi.models.operations.GetWaybackV1AvailableResponse;
import org.openapis.openapi.models.shared.ClosestEnum;
import org.openapis.openapi.models.shared.StatusCodeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWaybackV1AvailableRequest req = new GetWaybackV1AvailableRequest("illum") {{
                callback = "vel";
                closest = ClosestEnum.BEFORE;
                statusCode = StatusCodeEnum.FOUR_HUNDRED_AND_FIFTEEN;
                tag = "suscipit";
                timeout = 4375.87;
                timestamp = "magnam";
            }};            

            GetWaybackV1AvailableResponse res = sdk.sdk.getWaybackV1Available(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
