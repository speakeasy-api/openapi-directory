<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateUserRequest;
import org.openapis.openapi.models.operations.AssociateUserRequestBody;
import org.openapis.openapi.models.operations.AssociateUserRequestBodyIdentityProvider;
import org.openapis.openapi.models.operations.AssociateUserResponse;
import org.openapis.openapi.models.shared.ActiveDirectoryIdentityProvider;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateUserRequest req = new AssociateUserRequest(                new AssociateUserRequestBody(                new AssociateUserRequestBodyIdentityProvider() {{
                                                activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider() {{
                                                    directoryId = "provident";
                                                }};;
                                            }};, "distinctio", "quibusdam") {{
                                domain = "unde";
                            }};) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
            }};            

            AssociateUserResponse res = sdk.associateUser(req);

            if (res.associateUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->