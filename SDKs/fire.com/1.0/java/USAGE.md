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
                    applicationName = "eum";
                    enabled = true;
                    expiry = "1973-08-29T09:00:45Z";
                    ican = 3921169290827299935;
                    numberOfPayeeApprovalsRequired = 6167316338759183977;
                    numberOfPaymentApprovalsRequired = 2826820190694642039;
                    permissions = new String[]() {{
                        add("quaerat"),
                        add("ea"),
                        add("et"),
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