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

            GetApiV1DonationsCarbonCalculateRequest req = new GetApiV1DonationsCarbonCalculateRequest() {{
                security = new GetApiV1DonationsCarbonCalculateSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                queryParams = new GetApiV1DonationsCarbonCalculateQueryParams() {{
                    destinationAddress = 74.099998;
                    distanceMi = 53.099998;
                    originAddress = 15.100000;
                    transportationMethod = "sea";
                    weightLb = 77.099998;
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