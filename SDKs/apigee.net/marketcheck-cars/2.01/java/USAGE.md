<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CrmCheckPathParams;
import org.openapis.openapi.models.operations.CrmCheckQueryParams;
import org.openapis.openapi.models.operations.CrmCheckRequest;
import org.openapis.openapi.models.operations.CrmCheckResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    authorizeEndpoint = new SchemeAuthorizeEndpoint() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CrmCheckRequest req = new CrmCheckRequest() {{
                pathParams = new CrmCheckPathParams() {{
                    vin = "corrupti";
                }};
                queryParams = new CrmCheckQueryParams() {{
                    apiKey = "provident";
                    saleDate = "distinctio";
                }};
            }};            

            CrmCheckResponse res = sdk.crmCleanseAPI.crmCheck(req);

            if (res.crmResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->