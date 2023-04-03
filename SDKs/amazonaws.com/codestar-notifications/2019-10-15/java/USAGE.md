<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateNotificationRuleRequestBodyDetailTypeEnum;
import org.openapis.openapi.models.operations.CreateNotificationRuleRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.CreateNotificationRuleRequestBody;
import org.openapis.openapi.models.operations.CreateNotificationRuleRequest;
import org.openapis.openapi.models.operations.CreateNotificationRuleResponse;
import org.openapis.openapi.models.shared.Target;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNotificationRuleRequest req = new CreateNotificationRuleRequest() {{
                requestBody = new CreateNotificationRuleRequestBody() {{
                    clientRequestToken = "corrupti";
                    detailType = "FULL";
                    eventTypeIds = new String[]{{
                        add("quibusdam"),
                        add("unde"),
                        add("nulla"),
                    }};
                    name = "corrupti";
                    resource = "illum";
                    status = "ENABLED";
                    tags = new java.util.HashMap<String, String>() {{
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                        put("debitis", "ipsa");
                    }};
                    targets = new org.openapis.openapi.models.shared.Target[]{{
                        add(new Target() {{
                            targetAddress = "tempora";
                            targetType = "suscipit";
                        }}),
                        add(new Target() {{
                            targetAddress = "molestiae";
                            targetType = "minus";
                        }}),
                        add(new Target() {{
                            targetAddress = "placeat";
                            targetType = "voluptatum";
                        }}),
                        add(new Target() {{
                            targetAddress = "iusto";
                            targetType = "excepturi";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "temporibus";
                xAmzDate = "ab";
                xAmzSecurityToken = "quis";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "deserunt";
            }}            

            CreateNotificationRuleResponse res = sdk.createNotificationRule(req);

            if (res.createNotificationRuleResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->