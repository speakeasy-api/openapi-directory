<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateNotificationRuleHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateNotificationRuleRequest req = new CreateNotificationRuleRequest() {{
                headers = new CreateNotificationRuleHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateNotificationRuleRequestBody() {{
                    clientRequestToken = "illum";
                    detailType = "BASIC";
                    eventTypeIds = new String[]{{
                        add("deserunt"),
                        add("suscipit"),
                        add("iure"),
                    }};
                    name = "magnam";
                    resource = "debitis";
                    status = "ENABLED";
                    tags = new java.util.HashMap<String, String>() {{
                        put("tempora", "suscipit");
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                        put("iusto", "excepturi");
                    }};
                    targets = new org.openapis.openapi.models.shared.Target[]{{
                        add(new Target() {{
                            targetAddress = "recusandae";
                            targetType = "temporibus";
                        }}),
                        add(new Target() {{
                            targetAddress = "ab";
                            targetType = "quis";
                        }}),
                    }};
                }};
            }};            

            CreateNotificationRuleResponse res = sdk.createNotificationRule(req);

            if (res.createNotificationRuleResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->