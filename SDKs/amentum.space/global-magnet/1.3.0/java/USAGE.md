<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AppApiWMMEndpointsWMMMagneticFieldQueryParams;
import org.openapis.openapi.models.operations.AppApiWMMEndpointsWMMMagneticFieldRequest;
import org.openapis.openapi.models.operations.AppApiWMMEndpointsWMMMagneticFieldResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppApiWMMEndpointsWMMMagneticFieldRequest req = new AppApiWMMEndpointsWMMMagneticFieldRequest() {{
                queryParams = new AppApiWMMEndpointsWMMMagneticFieldQueryParams() {{
                    altitude = 10;
                    latitude = 80;
                    longitude = 100;
                    year = 2020.5;
                }};
            }};            

            AppApiWMMEndpointsWMMMagneticFieldResponse res = sdk.appApiWMMEndpointsWMMMagneticField(req);

            if (res.appApiWMMEndpointsWMMMagneticField200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->