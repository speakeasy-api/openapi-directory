<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCloneReceiptRuleSetActionEnum;
import org.openapis.openapi.models.operations.GETCloneReceiptRuleSetRequest;
import org.openapis.openapi.models.operations.GETCloneReceiptRuleSetResponse;
import org.openapis.openapi.models.operations.GETCloneReceiptRuleSetVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCloneReceiptRuleSetRequest req = new GETCloneReceiptRuleSetRequest(GETCloneReceiptRuleSetActionEnum.CLONE_RECEIPT_RULE_SET, "provident", "distinctio", GETCloneReceiptRuleSetVersionEnum.TWO_THOUSAND_AND_TEN1201) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            GETCloneReceiptRuleSetResponse res = sdk.getCloneReceiptRuleSet(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->