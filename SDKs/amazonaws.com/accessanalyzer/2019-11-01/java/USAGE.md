<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApplyArchiveRuleRequest;
import org.openapis.openapi.models.operations.ApplyArchiveRuleRequestBody;
import org.openapis.openapi.models.operations.ApplyArchiveRuleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ApplyArchiveRuleRequest req = new ApplyArchiveRuleRequest(                new ApplyArchiveRuleRequestBody("provident", "distinctio") {{
                                clientToken = "quibusdam";
                            }};) {{
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
            }};            

            ApplyArchiveRuleResponse res = sdk.applyArchiveRule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->