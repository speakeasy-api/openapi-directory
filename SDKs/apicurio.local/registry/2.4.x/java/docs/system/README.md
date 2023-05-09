# system

## Overview

System level functionality, including versioning and status information.

### Available Operations

* [getResourceLimits](#getresourcelimits) - Get resource limits information
* [getSystemInfo](#getsysteminfo) - Get system information

## getResourceLimits

This operation retrieves the list of limitations on used resources, that are applied on the current instance of Registry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourceLimitsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourceLimitsResponse res = sdk.system.getResourceLimits();

            if (res.limits != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSystemInfo

This operation retrieves information about the running registry system, such as the version
of the software and when it was built.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSystemInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSystemInfoResponse res = sdk.system.getSystemInfo();

            if (res.systemInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
