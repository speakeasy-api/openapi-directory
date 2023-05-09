<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1DonationsCarbonCalculateRequest;
import org.openapis.openapi.models.operations.GetApiV1DonationsCarbonCalculateResponse;
import org.openapis.openapi.models.operations.GetApiV1DonationsCarbonCalculateSecurity;
import org.openapis.openapi.models.operations.GetApiV1DonationsCarbonCalculateTransportationMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1DonationsCarbonCalculateRequest req = new GetApiV1DonationsCarbonCalculateRequest(5488.14) {{
                destinationAddress = 5928.45;
                distanceMi = 7151.9;
                originAddress = 8442.66;
                transportationMethod = GetApiV1DonationsCarbonCalculateTransportationMethodEnum.RAIL;
            }};            

            GetApiV1DonationsCarbonCalculateResponse res = sdk.getApiV1DonationsCarbonCalculate(req, new GetApiV1DonationsCarbonCalculateSecurity("nulla", "corrupti") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->