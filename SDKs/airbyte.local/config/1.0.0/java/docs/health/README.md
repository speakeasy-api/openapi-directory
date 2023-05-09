# health

## Overview

Healthchecks

### Available Operations

* [getHealthCheck](#gethealthcheck) - Health Check

## getHealthCheck

Health Check

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHealthCheckResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHealthCheckResponse res = sdk.health.getHealthCheck();

            if (res.healthCheckRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
