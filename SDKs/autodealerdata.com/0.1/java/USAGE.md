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

            GetVehicleSeenVehicleSeenGetRequest req = new GetVehicleSeenVehicleSeenGetRequest() {{
                queryParams = new GetVehicleSeenVehicleSeenGetQueryParams() {{
                    afterDate = "1973-05-30";
                    jwt = "praesentium";
                    vin = "enim";
                }};
            }};

            GetVehicleSeenVehicleSeenGetResponse res = sdk.applicationAcceleration.getVehicleSeenVehicleSeenGet(req);

            if (res.booleanResp.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->