<!-- Start SDK Example Usage -->
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
                key = "corrupti";
                zip = "provident";
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
<!-- End SDK Example Usage -->