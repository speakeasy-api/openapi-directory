<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppApiWMMEndpointsWMMMagneticFieldRequest;
import org.openapis.openapi.models.operations.AppApiWMMEndpointsWMMMagneticFieldResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppApiWMMEndpointsWMMMagneticFieldRequest req = new AppApiWMMEndpointsWMMMagneticFieldRequest(10, 80, 100, 2020.5);            

            AppApiWMMEndpointsWMMMagneticFieldResponse res = sdk.appApiWMMEndpointsWMMMagneticField(req);

            if (res.appApiWMMEndpointsWMMMagneticField200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->