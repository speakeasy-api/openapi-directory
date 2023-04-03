<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateFirewallRuleGroupXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateFirewallRuleGroupRequest;
import org.openapis.openapi.models.operations.AssociateFirewallRuleGroupResponse;
import org.openapis.openapi.models.shared.AssociateFirewallRuleGroupRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.MutationProtectionStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateFirewallRuleGroupRequest req = new AssociateFirewallRuleGroupRequest() {{
                associateFirewallRuleGroupRequest = new AssociateFirewallRuleGroupRequest() {{
                    creatorRequestId = "corrupti";
                    firewallRuleGroupId = "provident";
                    mutationProtection = "DISABLED";
                    name = "quibusdam";
                    priority = 602763;
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "corrupti";
                            value = "illum";
                        }}),
                        add(new Tag() {{
                            key = "vel";
                            value = "error";
                        }}),
                        add(new Tag() {{
                            key = "deserunt";
                            value = "suscipit";
                        }}),
                        add(new Tag() {{
                            key = "iure";
                            value = "magnam";
                        }}),
                    }};
                    vpcId = "debitis";
                }};
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempora";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "placeat";
                xAmzTarget = "Route53Resolver.AssociateFirewallRuleGroup";
            }}            

            AssociateFirewallRuleGroupResponse res = sdk.associateFirewallRuleGroup(req);

            if (res.associateFirewallRuleGroupResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->