<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            AppApiWmmEndpointsWmmMagneticFieldRequest req = new AppApiWmmEndpointsWmmMagneticFieldRequest() {{
                queryParams = new AppApiWmmEndpointsWmmMagneticFieldQueryParams() {{
                    altitude = 74.099998;
                    latitude = 53.099998;
                    longitude = 15.100000;
                    year = 67.199997;
                }};
            }};

            AppApiWmmEndpointsWmmMagneticFieldResponse res = sdk.appApiWmmEndpointsWmmMagneticField(req);

            if (res.appApiWMMEndpointsWMMMagneticField200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->