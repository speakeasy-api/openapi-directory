<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ApplyArchiveRuleRequestBody;
import org.openapis.openapi.models.operations.ApplyArchiveRuleRequest;
import org.openapis.openapi.models.operations.ApplyArchiveRuleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ApplyArchiveRuleRequest req = new ApplyArchiveRuleRequest() {{
                requestBody = new ApplyArchiveRuleRequestBody() {{
                    analyzerArn = "corrupti";
                    clientToken = "provident";
                    ruleName = "distinctio";
                }};
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }}            

            ApplyArchiveRuleResponse res = sdk.applyArchiveRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->