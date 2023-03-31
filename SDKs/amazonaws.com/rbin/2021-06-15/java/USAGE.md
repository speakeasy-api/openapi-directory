<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateRuleHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateRuleRequest req = new CreateRuleRequest() {{
                headers = new CreateRuleHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateRuleRequestBody() {{
                    description = "illum";
                    lockConfiguration = new CreateRuleRequestBodyLockConfiguration() {{
                        unlockDelay = new UnlockDelay() {{
                            unlockDelayUnit = "DAYS";
                            unlockDelayValue = 423655;
                        }};
                    }};
                    resourceTags = new org.openapis.openapi.models.shared.ResourceTag[]{{
                        add(new ResourceTag() {{
                            resourceTagKey = "deserunt";
                            resourceTagValue = "suscipit";
                        }}),
                        add(new ResourceTag() {{
                            resourceTagKey = "iure";
                            resourceTagValue = "magnam";
                        }}),
                        add(new ResourceTag() {{
                            resourceTagKey = "debitis";
                            resourceTagValue = "ipsa";
                        }}),
                    }};
                    resourceType = "EC2_IMAGE";
                    retentionPeriod = new CreateRuleRequestBodyRetentionPeriod() {{
                        retentionPeriodUnit = "DAYS";
                        retentionPeriodValue = 272656;
                    }};
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "molestiae";
                            value = "minus";
                        }}),
                        add(new Tag() {{
                            key = "placeat";
                            value = "voluptatum";
                        }}),
                    }};
                }};
            }};            

            CreateRuleResponse res = sdk.createRule(req);

            if (res.createRuleResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->