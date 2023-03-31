<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateServiceRoleToAccountHeaders;
import org.openapis.openapi.models.operations.AssociateServiceRoleToAccountRequestBody;
import org.openapis.openapi.models.operations.AssociateServiceRoleToAccountRequest;
import org.openapis.openapi.models.operations.AssociateServiceRoleToAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AssociateServiceRoleToAccountRequest req = new AssociateServiceRoleToAccountRequest() {{
                headers = new AssociateServiceRoleToAccountHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new AssociateServiceRoleToAccountRequestBody() {{
                    roleArn = "illum";
                }};
            }};            

            AssociateServiceRoleToAccountResponse res = sdk.associateServiceRoleToAccount(req);

            if (res.associateServiceRoleToAccountResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->