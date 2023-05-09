<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRuleRequest;
import org.openapis.openapi.models.operations.CreateRuleRequestBody;
import org.openapis.openapi.models.operations.CreateRuleRequestBodyLockConfiguration;
import org.openapis.openapi.models.operations.CreateRuleRequestBodyResourceTypeEnum;
import org.openapis.openapi.models.operations.CreateRuleRequestBodyRetentionPeriod;
import org.openapis.openapi.models.operations.CreateRuleResponse;
import org.openapis.openapi.models.shared.ResourceTag;
import org.openapis.openapi.models.shared.RetentionPeriodUnitEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UnlockDelay;
import org.openapis.openapi.models.shared.UnlockDelayUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRuleRequest req = new CreateRuleRequest(                new CreateRuleRequestBody(CreateRuleRequestBodyResourceTypeEnum.EC2_IMAGE,                 new CreateRuleRequestBodyRetentionPeriod() {{
                                                retentionPeriodUnit = RetentionPeriodUnitEnum.DAYS;
                                                retentionPeriodValue = 715190L;
                                            }};) {{
                                description = "quibusdam";
                                lockConfiguration = new CreateRuleRequestBodyLockConfiguration() {{
                                    unlockDelay = new UnlockDelay(UnlockDelayUnitEnum.DAYS, 602763L);;
                                }};;
                                resourceTags = new org.openapis.openapi.models.shared.ResourceTag[]{{
                                    add(new ResourceTag("vel") {{
                                        resourceTagKey = "corrupti";
                                        resourceTagValue = "illum";
                                    }}),
                                    add(new ResourceTag("suscipit") {{
                                        resourceTagKey = "error";
                                        resourceTagValue = "deserunt";
                                    }}),
                                    add(new ResourceTag("debitis") {{
                                        resourceTagKey = "iure";
                                        resourceTagValue = "magnam";
                                    }}),
                                    add(new ResourceTag("tempora") {{
                                        resourceTagKey = "ipsa";
                                        resourceTagValue = "delectus";
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("placeat", "voluptatum") {{
                                        key = "molestiae";
                                        value = "minus";
                                    }}),
                                    add(new Tag("nisi", "recusandae") {{
                                        key = "iusto";
                                        value = "excepturi";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "ab";
                xAmzCredential = "quis";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ipsam";
            }};            

            CreateRuleResponse res = sdk.createRule(req);

            if (res.createRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->