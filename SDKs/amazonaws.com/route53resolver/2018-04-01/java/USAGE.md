<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateFirewallRuleGroupRequest;
import org.openapis.openapi.models.operations.AssociateFirewallRuleGroupResponse;
import org.openapis.openapi.models.operations.AssociateFirewallRuleGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateFirewallRuleGroupRequest;
import org.openapis.openapi.models.shared.MutationProtectionStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateFirewallRuleGroupRequest req = new AssociateFirewallRuleGroupRequest(                new AssociateFirewallRuleGroupRequest("provident", "distinctio", "quibusdam", 602763L, "nulla") {{
                                mutationProtection = MutationProtectionStatusEnum.DISABLED;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("deserunt", "suscipit") {{
                                        key = "vel";
                                        value = "error";
                                    }}),
                                    add(new Tag("debitis", "ipsa") {{
                                        key = "iure";
                                        value = "magnam";
                                    }}),
                                    add(new Tag("suscipit", "molestiae") {{
                                        key = "delectus";
                                        value = "tempora";
                                    }}),
                                    add(new Tag("voluptatum", "iusto") {{
                                        key = "minus";
                                        value = "placeat";
                                    }}),
                                }};
                            }};, AssociateFirewallRuleGroupXAmzTargetEnum.ROUTE53_RESOLVER_ASSOCIATE_FIREWALL_RULE_GROUP) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "recusandae";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "ab";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "veritatis";
            }};            

            AssociateFirewallRuleGroupResponse res = sdk.associateFirewallRuleGroup(req);

            if (res.associateFirewallRuleGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->