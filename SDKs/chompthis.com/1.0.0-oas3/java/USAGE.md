<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFoodBrandedBarcodePhpRequest;
import org.openapis.openapi.models.operations.GetFoodBrandedBarcodePhpResponse;
import org.openapis.openapi.models.operations.GetFoodBrandedBarcodePhpSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFoodBrandedBarcodePhpRequest req = new GetFoodBrandedBarcodePhpRequest("corrupti");            

            GetFoodBrandedBarcodePhpResponse res = sdk.getFoodBrandedBarcodePhp(req, new GetFoodBrandedBarcodePhpSecurity("provident") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.brandedFoodObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->