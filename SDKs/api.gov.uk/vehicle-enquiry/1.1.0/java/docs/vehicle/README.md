# vehicle

### Available Operations

* [getVehicleDetailsByRegistrationNumber](#getvehicledetailsbyregistrationnumber) - Get vehicle details by registration number

## getVehicleDetailsByRegistrationNumber

Returns vehicle details based on registration number

### Example Usage

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

            GetVehicleDetailsByRegistrationNumberRequest req = new GetVehicleDetailsByRegistrationNumberRequest(                new VehicleRequest() {{
                                registrationNumber = "quibusdam";
                            }};, "unde") {{
                xCorrelationId = "nulla";
            }};            

            GetVehicleDetailsByRegistrationNumberResponse res = sdk.vehicle.getVehicleDetailsByRegistrationNumber(req);

            if (res.vehicle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
