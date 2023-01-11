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

            AssociateFirewallRuleGroupRequest req = new AssociateFirewallRuleGroupRequest() {{
                headers = new AssociateFirewallRuleGroupHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "Route53Resolver.AssociateFirewallRuleGroup";
                }};
                request = new AssociateFirewallRuleGroupRequest() {{
                    creatorRequestId = "fugit";
                    firewallRuleGroupId = "et";
                    mutationProtection = "ENABLED";
                    name = "rerum";
                    priority = 7837839688282259259;
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "voluptatum";
                            value = "et";
                        }}),
                    }};
                    vpcId = "ut";
                }};
            }};

            AssociateFirewallRuleGroupResponse res = sdk.associateFirewallRuleGroup(req);

            if (res.associateFirewallRuleGroupResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->