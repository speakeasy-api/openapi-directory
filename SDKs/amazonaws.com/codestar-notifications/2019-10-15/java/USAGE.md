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

            CreateNotificationRuleRequest req = new CreateNotificationRuleRequest() {{
                headers = new CreateNotificationRuleHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new CreateNotificationRuleRequestBody() {{
                    clientRequestToken = "voluptas";
                    detailType = "BASIC";
                    eventTypeIds = new String[]() {{
                        add("nihil"),
                    }};
                    name = "rerum";
                    resource = "dicta";
                    status = "ENABLED";
                    tags = new java.util.HashMap<String, String>() {{
                        put("et", "ut");
                    }};
                    targets = new openapisdk.models.shared.Target[]() {{
                        add(new Target() {{
                            targetAddress = "et";
                            targetType = "voluptate";
                        }}),
                        add(new Target() {{
                            targetAddress = "iste";
                            targetType = "vitae";
                        }}),
                        add(new Target() {{
                            targetAddress = "totam";
                            targetType = "dolores";
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