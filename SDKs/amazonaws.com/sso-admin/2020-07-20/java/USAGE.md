<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AttachCustomerManagedPolicyReferenceToPermissionSetRequest;
import org.openapis.openapi.models.operations.AttachCustomerManagedPolicyReferenceToPermissionSetResponse;
import org.openapis.openapi.models.operations.AttachCustomerManagedPolicyReferenceToPermissionSetXAmzTargetEnum;
import org.openapis.openapi.models.shared.AttachCustomerManagedPolicyReferenceToPermissionSetRequest;
import org.openapis.openapi.models.shared.CustomerManagedPolicyReference;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AttachCustomerManagedPolicyReferenceToPermissionSetRequest req = new AttachCustomerManagedPolicyReferenceToPermissionSetRequest(                new AttachCustomerManagedPolicyReferenceToPermissionSetRequest(                new CustomerManagedPolicyReference("provident") {{
                                                path = "distinctio";
                                            }};, "quibusdam", "unde");, AttachCustomerManagedPolicyReferenceToPermissionSetXAmzTargetEnum.SWB_EXTERNAL_SERVICE_ATTACH_CUSTOMER_MANAGED_POLICY_REFERENCE_TO_PERMISSION_SET) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
            }};            

            AttachCustomerManagedPolicyReferenceToPermissionSetResponse res = sdk.attachCustomerManagedPolicyReferenceToPermissionSet(req);

            if (res.attachCustomerManagedPolicyReferenceToPermissionSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->