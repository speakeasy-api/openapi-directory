<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateApiApplicationNewApiApplication;
import org.openapis.openapi.models.operations.CreateApiApplicationRequest;
import org.openapis.openapi.models.operations.CreateApiApplicationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }})
                .build();

            CreateApiApplicationRequest req = new CreateApiApplicationRequest() {{
                request = new CreateApiApplicationNewApiApplication() {{
                    applicationName = "Batch Processing API";
                    enabled = true;
                    expiry = "2019-08-22T07:48:56.460Z";
                    ican = 548814;
                    numberOfPayeeApprovalsRequired = 1;
                    numberOfPaymentApprovalsRequired = 1;
                    permissions = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                }};
            }};            

            CreateApiApplicationResponse res = sdk.api.createApiApplication(req);

            if (res.apiApplication.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->