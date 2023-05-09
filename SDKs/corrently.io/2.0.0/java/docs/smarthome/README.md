# smartHome

## Overview

Helper services and endpoints for smarthome and home automation systems.

### Available Operations

* [gsiBesthour](#gsibesthour) - Get best hour (with most regional green energy) in a given timeframe.

## gsiBesthour

Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GsiBesthourRequest;
import org.openapis.openapi.models.operations.GsiBesthourResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GsiBesthourRequest req = new GsiBesthourRequest() {{
                hours = 791725L;
                key = "placeat";
                timeframe = 528895L;
                zip = "iusto";
            }};            

            GsiBesthourResponse res = sdk.smartHome.gsiBesthour(req);

            if (res.gsiBesthour200ApplicationJSONBoolean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
