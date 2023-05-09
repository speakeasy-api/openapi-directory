<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateMemberAccountRequest;
import org.openapis.openapi.models.operations.AssociateMemberAccountResponse;
import org.openapis.openapi.models.operations.AssociateMemberAccountXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateMemberAccountRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateMemberAccountRequest req = new AssociateMemberAccountRequest(                new AssociateMemberAccountRequest("provident");, AssociateMemberAccountXAmzTargetEnum.MACIE_SERVICE_ASSOCIATE_MEMBER_ACCOUNT) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            AssociateMemberAccountResponse res = sdk.associateMemberAccount(req);

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