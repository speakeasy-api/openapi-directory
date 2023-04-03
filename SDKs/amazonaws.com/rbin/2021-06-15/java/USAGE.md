<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateRuleRequestBodyLockConfiguration;
import org.openapis.openapi.models.operations.CreateRuleRequestBodyResourceTypeEnum;
import org.openapis.openapi.models.operations.CreateRuleRequestBodyRetentionPeriod;
import org.openapis.openapi.models.operations.CreateRuleRequestBody;
import org.openapis.openapi.models.operations.CreateRuleRequest;
import org.openapis.openapi.models.operations.CreateRuleResponse;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.RetentionPeriodUnitEnum;
import org.openapis.openapi.models.shared.ResourceTag;
import org.openapis.openapi.models.shared.UnlockDelay;
import org.openapis.openapi.models.shared.UnlockDelayUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRuleRequest req = new CreateRuleRequest() {{
                requestBody = new CreateRuleRequestBody() {{
                    description = "corrupti";
                    lockConfiguration = new CreateRuleRequestBodyLockConfiguration() {{
                        unlockDelay = new UnlockDelay() {{
                            unlockDelayUnit = "DAYS";
                            unlockDelayValue = 592845;
                        }};
                    }};
                    resourceTags = new org.openapis.openapi.models.shared.ResourceTag[]{{
                        add(new ResourceTag() {{
                            resourceTagKey = "quibusdam";
                            resourceTagValue = "unde";
                        }}),
                        add(new ResourceTag() {{
                            resourceTagKey = "nulla";
                            resourceTagValue = "corrupti";
                        }}),
                        add(new ResourceTag() {{
                            resourceTagKey = "illum";
                            resourceTagValue = "vel";
                        }}),
                    }};
                    resourceType = "EC2_IMAGE";
                    retentionPeriod = new CreateRuleRequestBodyRetentionPeriod() {{
                        retentionPeriodUnit = "DAYS";
                        retentionPeriodValue = 645894;
                    }};
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "iure";
                            value = "magnam";
                        }}),
                        add(new Tag() {{
                            key = "debitis";
                            value = "ipsa";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "suscipit";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "minus";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "voluptatum";
            }}            

            CreateRuleResponse res = sdk.createRule(req);

            if (res.createRuleResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->