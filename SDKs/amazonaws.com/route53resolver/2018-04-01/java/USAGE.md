<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateFirewallRuleGroupXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateFirewallRuleGroupHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AssociateFirewallRuleGroupRequest req = new AssociateFirewallRuleGroupRequest() {{
                headers = new AssociateFirewallRuleGroupHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "Route53Resolver.AssociateFirewallRuleGroup";
                }};
                request = new AssociateFirewallRuleGroupRequest() {{
                    creatorRequestId = "illum";
                    firewallRuleGroupId = "vel";
                    mutationProtection = "DISABLED";
                    name = "deserunt";
                    priority = 384382;
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "magnam";
                            value = "debitis";
                        }}),
                        add(new Tag() {{
                            key = "ipsa";
                            value = "delectus";
                        }}),
                    }};
                    vpcId = "tempora";
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