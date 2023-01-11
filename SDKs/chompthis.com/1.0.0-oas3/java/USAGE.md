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

            GetFoodBrandedBarcodePhpRequest req = new GetFoodBrandedBarcodePhpRequest() {{
                security = new GetFoodBrandedBarcodePhpSecurity() {{
                    apiKeyAuth = new SchemeApiKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetFoodBrandedBarcodePhpQueryParams() {{
                    code = "velit";
                }};
            }};

            GetFoodBrandedBarcodePhpResponse res = sdk.getFoodBrandedBarcodePhp(req);

            if (res.brandedFoodObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->