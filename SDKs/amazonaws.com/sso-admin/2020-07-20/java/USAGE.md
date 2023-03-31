<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AttachCustomerManagedPolicyReferenceToPermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.operations.AttachCustomerManagedPolicyReferenceToPermissionSetHeaders;
import org.openapis.openapi.models.operations.AttachCustomerManagedPolicyReferenceToPermissionSetRequest;
import org.openapis.openapi.models.operations.AttachCustomerManagedPolicyReferenceToPermissionSetResponse;
import org.openapis.openapi.models.shared.AttachCustomerManagedPolicyReferenceToPermissionSetRequest;
import org.openapis.openapi.models.shared.CustomerManagedPolicyReference;

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

            AttachCustomerManagedPolicyReferenceToPermissionSetRequest req = new AttachCustomerManagedPolicyReferenceToPermissionSetRequest() {{
                headers = new AttachCustomerManagedPolicyReferenceToPermissionSetHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet";
                }};
                request = new AttachCustomerManagedPolicyReferenceToPermissionSetRequest() {{
                    customerManagedPolicyReference = new CustomerManagedPolicyReference() {{
                        name = "illum";
                        path = "vel";
                    }};
                    instanceArn = "error";
                    permissionSetArn = "deserunt";
                }};
            }};            

            AttachCustomerManagedPolicyReferenceToPermissionSetResponse res = sdk.attachCustomerManagedPolicyReferenceToPermissionSet(req);

            if (res.attachCustomerManagedPolicyReferenceToPermissionSetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->