<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNotificationRuleRequest;
import org.openapis.openapi.models.operations.CreateNotificationRuleRequestBody;
import org.openapis.openapi.models.operations.CreateNotificationRuleRequestBodyDetailTypeEnum;
import org.openapis.openapi.models.operations.CreateNotificationRuleRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.CreateNotificationRuleResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Target;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNotificationRuleRequest req = new CreateNotificationRuleRequest(                new CreateNotificationRuleRequestBody(CreateNotificationRuleRequestBodyDetailTypeEnum.FULL,                 new String[]{{
                                                add("quibusdam"),
                                                add("unde"),
                                                add("nulla"),
                                            }}, "corrupti", "illum",                 new org.openapis.openapi.models.shared.Target[]{{
                                                add(new Target() {{
                                                    targetAddress = "error";
                                                    targetType = "deserunt";
                                                }}),
                                                add(new Target() {{
                                                    targetAddress = "suscipit";
                                                    targetType = "iure";
                                                }}),
                                            }}) {{
                                clientRequestToken = "magnam";
                                status = CreateNotificationRuleRequestBodyStatusEnum.DISABLED;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("delectus", "tempora");
                                }};
                            }};) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "minus";
                xAmzDate = "placeat";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateNotificationRuleResponse res = sdk.createNotificationRule(req);

            if (res.createNotificationRuleResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->