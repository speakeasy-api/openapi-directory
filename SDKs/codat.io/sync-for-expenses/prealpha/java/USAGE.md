<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompanyConfigurationRequest;
import org.openapis.openapi.models.operations.GetCompanyConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCompanyConfigurationRequest req = new GetCompanyConfigurationRequest("8a210b68-6988-11ed-a1eb-0242ac120002");            

            GetCompanyConfigurationResponse res = sdk.configuration.getCompanyConfiguration(req);

            if (res.companyConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->