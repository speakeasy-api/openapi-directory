<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetApiV1DonationsCarbonCalculateSecurity;
import org.openapis.openapi.models.operations.GetApiV1DonationsCarbonCalculateTransportationMethodEnum;
import org.openapis.openapi.models.operations.GetApiV1DonationsCarbonCalculateQueryParams;
import org.openapis.openapi.models.operations.GetApiV1DonationsCarbonCalculateRequest;
import org.openapis.openapi.models.operations.GetApiV1DonationsCarbonCalculateResponse;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1DonationsCarbonCalculateRequest req = new GetApiV1DonationsCarbonCalculateRequest() {{
                security = new GetApiV1DonationsCarbonCalculateSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                queryParams = new GetApiV1DonationsCarbonCalculateQueryParams() {{
                    destinationAddress = 5488.14;
                    distanceMi = 5928.45;
                    originAddress = 7151.9;
                    transportationMethod = "sea";
                    weightLb = 6027.63;
                }};
            }};            

            GetApiV1DonationsCarbonCalculateResponse res = sdk.getApiV1DonationsCarbonCalculate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->