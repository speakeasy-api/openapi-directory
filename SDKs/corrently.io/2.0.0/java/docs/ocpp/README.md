# ocpp

## Overview

Alternative access to Corrently OCPP Data (hosted cloud backend).

### Available Operations

* [ocppSessions](#ocppsessions) - Last Session Info

## ocppSessions

Returns lastSession info of OCCP Cloud service for clearing in corrently ecosystem. Might be tested via [OCPP cloud simulator](https://ocpp.corrently.cloud).
Last session Info of managed EV charging stations connected to the correnty ecosystem.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OcppSessionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OcppSessionsResponse res = sdk.ocpp.ocppSessions();

            if (res.easeeChargers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
