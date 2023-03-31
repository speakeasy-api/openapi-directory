<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetFoodBrandedBarcodePhpSecurity;
import org.openapis.openapi.models.operations.GetFoodBrandedBarcodePhpQueryParams;
import org.openapis.openapi.models.operations.GetFoodBrandedBarcodePhpRequest;
import org.openapis.openapi.models.operations.GetFoodBrandedBarcodePhpResponse;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFoodBrandedBarcodePhpRequest req = new GetFoodBrandedBarcodePhpRequest() {{
                security = new GetFoodBrandedBarcodePhpSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetFoodBrandedBarcodePhpQueryParams() {{
                    code = "corrupti";
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