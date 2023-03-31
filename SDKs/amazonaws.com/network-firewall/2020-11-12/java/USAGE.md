<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateFirewallPolicyXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateFirewallPolicyHeaders;
import org.openapis.openapi.models.operations.AssociateFirewallPolicyRequest;
import org.openapis.openapi.models.operations.AssociateFirewallPolicyResponse;
import org.openapis.openapi.models.shared.AssociateFirewallPolicyRequest;

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

            AssociateFirewallPolicyRequest req = new AssociateFirewallPolicyRequest() {{
                headers = new AssociateFirewallPolicyHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "NetworkFirewall_20201112.AssociateFirewallPolicy";
                }};
                request = new AssociateFirewallPolicyRequest() {{
                    firewallArn = "illum";
                    firewallName = "vel";
                    firewallPolicyArn = "error";
                    updateToken = "deserunt";
                }};
            }};            

            AssociateFirewallPolicyResponse res = sdk.associateFirewallPolicy(req);

            if (res.associateFirewallPolicyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->