<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GETCloneReceiptRuleSetActionEnum;
import org.openapis.openapi.models.operations.GETCloneReceiptRuleSetVersionEnum;
import org.openapis.openapi.models.operations.GETCloneReceiptRuleSetRequest;
import org.openapis.openapi.models.operations.GETCloneReceiptRuleSetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCloneReceiptRuleSetRequest req = new GETCloneReceiptRuleSetRequest() {{
                action = "CloneReceiptRuleSet";
                originalRuleSetName = "corrupti";
                ruleSetName = "provident";
                version = "2010-12-01";
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }}            

            GETCloneReceiptRuleSetResponse res = sdk.getCloneReceiptRuleSet(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->