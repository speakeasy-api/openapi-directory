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

            GetVehicleDetailsByRegistrationNumberRequest req = new GetVehicleDetailsByRegistrationNumberRequest() {{
                headers = new GetVehicleDetailsByRegistrationNumberHeaders() {{
                    xCorrelationId = "ducimus";
                    xApiKey = "repellendus";
                }};
                request = new VehicleRequest() {{
                    registrationNumber = "officia";
                }};
            }};

            GetVehicleDetailsByRegistrationNumberResponse res = sdk.vehicle.getVehicleDetailsByRegistrationNumber(req);

            if (res.vehicle.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->