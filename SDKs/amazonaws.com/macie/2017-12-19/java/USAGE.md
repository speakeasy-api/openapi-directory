<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateMemberAccountXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateMemberAccountRequest;
import org.openapis.openapi.models.operations.AssociateMemberAccountResponse;
import org.openapis.openapi.models.shared.AssociateMemberAccountRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateMemberAccountRequest req = new AssociateMemberAccountRequest() {{
                associateMemberAccountRequest = new AssociateMemberAccountRequest() {{
                    memberAccountId = "corrupti";
                }};
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "unde";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "illum";
                xAmzTarget = "MacieService.AssociateMemberAccount";
            }}            

            AssociateMemberAccountResponse res = sdk.associateMemberAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->