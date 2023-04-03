<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetVehicleDetailsByRegistrationNumberRequest;
import org.openapis.openapi.models.operations.GetVehicleDetailsByRegistrationNumberResponse;
import org.openapis.openapi.models.shared.VehicleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVehicleDetailsByRegistrationNumberRequest req = new GetVehicleDetailsByRegistrationNumberRequest() {{
                vehicleRequest = new VehicleRequest() {{
                    registrationNumber = "corrupti";
                }};
                xCorrelationId = "provident";
                xApiKey = "distinctio";
            }}            

            GetVehicleDetailsByRegistrationNumberResponse res = sdk.vehicle.getVehicleDetailsByRegistrationNumber(req);

            if (res.vehicle.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->