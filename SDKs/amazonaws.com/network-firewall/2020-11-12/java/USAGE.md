<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateFirewallPolicyRequest;
import org.openapis.openapi.models.operations.AssociateFirewallPolicyResponse;
import org.openapis.openapi.models.operations.AssociateFirewallPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateFirewallPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateFirewallPolicyRequest req = new AssociateFirewallPolicyRequest(                new AssociateFirewallPolicyRequest("provident") {{
                                firewallArn = "distinctio";
                                firewallName = "quibusdam";
                                updateToken = "unde";
                            }};, AssociateFirewallPolicyXAmzTargetEnum.NETWORK_FIREWALL20201112_ASSOCIATE_FIREWALL_POLICY) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
            }};            

            AssociateFirewallPolicyResponse res = sdk.associateFirewallPolicy(req);

            if (res.associateFirewallPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->