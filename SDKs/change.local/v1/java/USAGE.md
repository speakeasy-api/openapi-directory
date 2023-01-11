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
                    destinationAddress = 90.199997;
                    distanceMi = 69.199997;
                    originAddress = 7.100000;
                    transportationMethod = "air";
                    weightLb = 88.199997;
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