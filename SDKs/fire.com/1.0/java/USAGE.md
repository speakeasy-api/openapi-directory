<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    bearerAuth = new SchemeBearerAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateApiApplicationRequest req = new CreateApiApplicationRequest() {{
                request = new CreateApiApplicationNewApiApplication() {{
                    applicationName = "sit";
                    enabled = false;
                    expiry = "1978-05-13T03:50:47Z";
                    ican = 501233450539197794;
                    numberOfPayeeApprovalsRequired = 3390393562759376202;
                    numberOfPaymentApprovalsRequired = 2669985732393126063;
                    permissions = new String[]() {{
                        add("voluptas"),
                        add("fugit"),
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