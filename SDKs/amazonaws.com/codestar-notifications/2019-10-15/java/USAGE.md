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
                    xAmzAlgorithm = "labore";
                    xAmzContentSha256 = "est";
                    xAmzCredential = "quod";
                    xAmzDate = "et";
                    xAmzSecurityToken = "sit";
                    xAmzSignature = "quo";
                    xAmzSignedHeaders = "omnis";
                }};
                request = new CreateNotificationRuleRequestBody() {{
                    clientRequestToken = "reprehenderit";
                    detailType = "BASIC";
                    eventTypeIds = new String[]() {{
                        add("veniam"),
                    }};
                    name = "impedit";
                    resource = "ex";
                    status = "DISABLED";
                    tags = new java.util.HashMap<String, String>() {{
                        put("sunt", "incidunt");
                        put("sed", "repellendus");
                        put("error", "nostrum");
                    }};
                    targets = new openapisdk.models.shared.Target[]() {{
                        add(new Target() {{
                            targetAddress = "nihil";
                            targetType = "ipsa";
                        }}),
                        add(new Target() {{
                            targetAddress = "nihil";
                            targetType = "sed";
                        }}),
                        add(new Target() {{
                            targetAddress = "autem";
                            targetType = "consequatur";
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