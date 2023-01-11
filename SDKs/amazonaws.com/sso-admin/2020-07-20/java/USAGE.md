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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AttachManagedPolicyToPermissionSetRequest req = new AttachManagedPolicyToPermissionSetRequest() {{
                headers = new AttachManagedPolicyToPermissionSetHeaders() {{
                    xAmzAlgorithm = "ea";
                    xAmzContentSha256 = "pariatur";
                    xAmzCredential = "eligendi";
                    xAmzDate = "sit";
                    xAmzSecurityToken = "libero";
                    xAmzSignature = "quia";
                    xAmzSignedHeaders = "ipsa";
                    xAmzTarget = "SWBExternalService.AttachManagedPolicyToPermissionSet";
                }};
                request = new AttachManagedPolicyToPermissionSetRequest() {{
                    instanceArn = "quis";
                    managedPolicyArn = "necessitatibus";
                    permissionSetArn = "sint";
                }};
            }};

            AttachManagedPolicyToPermissionSetResponse res = sdk.attachManagedPolicyToPermissionSet(req);

            if (res.attachManagedPolicyToPermissionSetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->