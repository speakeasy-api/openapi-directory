<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AttachCustomerManagedPolicyReferenceToPermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.operations.AttachCustomerManagedPolicyReferenceToPermissionSetRequest;
import org.openapis.openapi.models.operations.AttachCustomerManagedPolicyReferenceToPermissionSetResponse;
import org.openapis.openapi.models.shared.AttachCustomerManagedPolicyReferenceToPermissionSetRequest;
import org.openapis.openapi.models.shared.CustomerManagedPolicyReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AttachCustomerManagedPolicyReferenceToPermissionSetRequest req = new AttachCustomerManagedPolicyReferenceToPermissionSetRequest() {{
                attachCustomerManagedPolicyReferenceToPermissionSetRequest = new AttachCustomerManagedPolicyReferenceToPermissionSetRequest() {{
                    customerManagedPolicyReference = new CustomerManagedPolicyReference() {{
                        name = "corrupti";
                        path = "provident";
                    }};
                    instanceArn = "distinctio";
                    permissionSetArn = "quibusdam";
                }};
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
                xAmzTarget = "SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet";
            }}            

            AttachCustomerManagedPolicyReferenceToPermissionSetResponse res = sdk.attachCustomerManagedPolicyReferenceToPermissionSet(req);

            if (res.attachCustomerManagedPolicyReferenceToPermissionSetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->