<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateUserHeaders;
import org.openapis.openapi.models.operations.AssociateUserRequestBodyIdentityProvider;
import org.openapis.openapi.models.operations.AssociateUserRequestBody;
import org.openapis.openapi.models.operations.AssociateUserRequest;
import org.openapis.openapi.models.operations.AssociateUserResponse;
import org.openapis.openapi.models.shared.ActiveDirectoryIdentityProvider;

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

            AssociateUserRequest req = new AssociateUserRequest() {{
                headers = new AssociateUserHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new AssociateUserRequestBody() {{
                    domain = "illum";
                    identityProvider = new AssociateUserRequestBodyIdentityProvider() {{
                        activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider() {{
                            directoryId = "vel";
                        }};
                    }};
                    instanceId = "error";
                    username = "Luna.Hoppe";
                }};
            }};            

            AssociateUserResponse res = sdk.associateUser(req);

            if (res.associateUserResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->