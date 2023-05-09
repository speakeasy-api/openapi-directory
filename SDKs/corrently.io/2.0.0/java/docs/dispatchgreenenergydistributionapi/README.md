# dispatchGreenEnergyDistributionAPI

## Overview

Provides latest dispatch information of green energy at a specific location in Germany (Herkunft/GrünstromMix). It allows to do schedule management (Fahrplanmanagement) of green energy generation facilities, demand and resilience management for grid operators. The public version (OpenAPI) is always post fact. If you are interessted in pre fact (forecast) data, you might get in contact with STROMDAO GmbH.


### Available Operations

* [gsiDispatch](#gsidispatch) - Dispatch (Green Energy Distribution Schedule)

## gsiDispatch

Dispatch of green energy has two aspects to consider:
  - Availability of gerneration facility (depends on weather and installed capacity)
  - Demand of energy
Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GsiDispatchRequest;
import org.openapis.openapi.models.operations.GsiDispatchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GsiDispatchRequest req = new GsiDispatchRequest() {{
                key = "distinctio";
                zip = "quibusdam";
            }};            

            GsiDispatchResponse res = sdk.dispatchGreenEnergyDistributionAPI.gsiDispatch(req);

            if (res.gsiDispatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
