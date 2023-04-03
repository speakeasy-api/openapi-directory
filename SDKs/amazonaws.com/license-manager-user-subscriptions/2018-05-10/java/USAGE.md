<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateUserRequest req = new AssociateUserRequest() {{
                requestBody = new AssociateUserRequestBody() {{
                    domain = "corrupti";
                    identityProvider = new AssociateUserRequestBodyIdentityProvider() {{
                        activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider() {{
                            directoryId = "provident";
                        }};
                    }};
                    instanceId = "distinctio";
                    username = "Rosalinda_Mitchell84";
                }};
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "error";
                xAmzCredential = "deserunt";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "iure";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "debitis";
            }}            

            AssociateUserResponse res = sdk.associateUser(req);

            if (res.associateUserResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->