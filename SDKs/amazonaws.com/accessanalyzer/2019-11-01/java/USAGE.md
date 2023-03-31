<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ApplyArchiveRuleHeaders;
import org.openapis.openapi.models.operations.ApplyArchiveRuleRequestBody;
import org.openapis.openapi.models.operations.ApplyArchiveRuleRequest;
import org.openapis.openapi.models.operations.ApplyArchiveRuleResponse;

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

            ApplyArchiveRuleRequest req = new ApplyArchiveRuleRequest() {{
                headers = new ApplyArchiveRuleHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new ApplyArchiveRuleRequestBody() {{
                    analyzerArn = "illum";
                    clientToken = "vel";
                    ruleName = "error";
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