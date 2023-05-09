# wiMWechselprozesseImMesswesenStromStatusAPI

## Overview

Access to status information of an existing metering change and allocation process.

### Available Operations

* [wimstatus](#wimstatus) - WiM Proess Informtion

## wimstatus

Access to status information of an existing metering change and allocation process.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WimstatusRequest;
import org.openapis.openapi.models.operations.WimstatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WimstatusRequest req = new WimstatusRequest() {{
                vid = "corporis";
            }};            

            WimstatusResponse res = sdk.wiMWechselprozesseImMesswesenStromStatusAPI.wimstatus(req);

            if (res.wimstatus200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
