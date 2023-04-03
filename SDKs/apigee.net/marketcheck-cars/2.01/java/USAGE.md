<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CrmCheckRequest;
import org.openapis.openapi.models.operations.CrmCheckResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            CrmCheckRequest req = new CrmCheckRequest() {{
                apiKey = "corrupti";
                saleDate = "provident";
                vin = "distinctio";
            }}            

            CrmCheckResponse res = sdk.crmCleanseAPI.crmCheck(req);

            if (res.crmResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->