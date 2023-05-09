# windowsHostings

## Overview

Manage your windows hostings.

### Available Operations

* [getWindowsHosting](#getwindowshosting) - Windows hosting detail
* [getWindowsHostings](#getwindowshostings) - Overview of windows hostings

## getWindowsHosting

Windows hosting detail

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWindowsHostingRequest;
import org.openapis.openapi.models.operations.GetWindowsHostingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWindowsHostingRequest req = new GetWindowsHostingRequest("similique", "facilis");            

            GetWindowsHostingResponse res = sdk.windowsHostings.getWindowsHosting(req);

            if (res.windowsHostingDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWindowsHostings

Overview of windows hostings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWindowsHostingsRequest;
import org.openapis.openapi.models.operations.GetWindowsHostingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWindowsHostingsRequest req = new GetWindowsHostingsRequest() {{
                skip = 874288;
                take = 498140;
            }};            

            GetWindowsHostingsResponse res = sdk.windowsHostings.getWindowsHostings(req);

            if (res.windowsHostings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
