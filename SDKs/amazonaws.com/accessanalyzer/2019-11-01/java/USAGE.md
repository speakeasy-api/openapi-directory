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

            ApplyArchiveRuleRequest req = new ApplyArchiveRuleRequest() {{
                headers = new ApplyArchiveRuleHeaders() {{
                    xAmzAlgorithm = "rerum";
                    xAmzContentSha256 = "ut";
                    xAmzCredential = "laborum";
                    xAmzDate = "fugit";
                    xAmzSecurityToken = "quis";
                    xAmzSignature = "minus";
                    xAmzSignedHeaders = "soluta";
                }};
                request = new ApplyArchiveRuleRequestBody() {{
                    analyzerArn = "aperiam";
                    clientToken = "consequuntur";
                    ruleName = "excepturi";
                }};
            }};

            ApplyArchiveRuleResponse res = sdk.applyArchiveRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->