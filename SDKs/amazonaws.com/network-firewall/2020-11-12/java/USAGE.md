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

            AssociateFirewallPolicyRequest req = new AssociateFirewallPolicyRequest() {{
                headers = new AssociateFirewallPolicyHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "NetworkFirewall_20201112.AssociateFirewallPolicy";
                }};
                request = new AssociateFirewallPolicyRequest() {{
                    firewallArn = "fugit";
                    firewallName = "et";
                    firewallPolicyArn = "nihil";
                    updateToken = "rerum";
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