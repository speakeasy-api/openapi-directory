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
                    xAmzAlgorithm = "ut";
                    xAmzContentSha256 = "non";
                    xAmzCredential = "nulla";
                    xAmzDate = "numquam";
                    xAmzSecurityToken = "quia";
                    xAmzSignature = "fugiat";
                    xAmzSignedHeaders = "laboriosam";
                    xAmzTarget = "Route53Resolver.AssociateFirewallRuleGroup";
                }};
                request = new AssociateFirewallRuleGroupRequest() {{
                    creatorRequestId = "nam";
                    firewallRuleGroupId = "delectus";
                    mutationProtection = "ENABLED";
                    name = "incidunt";
                    priority = 7383927136453695366;
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "iste";
                            value = "fuga";
                        }}),
                    }};
                    vpcId = "at";
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