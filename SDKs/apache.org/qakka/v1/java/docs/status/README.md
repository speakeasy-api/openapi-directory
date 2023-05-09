# status

## Overview

Status end-point.

### Available Operations

* [status](#status) - Status of webapp.

## status

Status of webapp.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StatusResponse res = sdk.status.status();

            if (res.status200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
