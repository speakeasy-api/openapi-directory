<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateFirewallPolicyXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateFirewallPolicyRequest;
import org.openapis.openapi.models.operations.AssociateFirewallPolicyResponse;
import org.openapis.openapi.models.shared.AssociateFirewallPolicyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateFirewallPolicyRequest req = new AssociateFirewallPolicyRequest() {{
                associateFirewallPolicyRequest = new AssociateFirewallPolicyRequest() {{
                    firewallArn = "corrupti";
                    firewallName = "provident";
                    firewallPolicyArn = "distinctio";
                    updateToken = "quibusdam";
                }};
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
                xAmzTarget = "NetworkFirewall_20201112.AssociateFirewallPolicy";
            }}            

            AssociateFirewallPolicyResponse res = sdk.associateFirewallPolicy(req);

            if (res.associateFirewallPolicyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->