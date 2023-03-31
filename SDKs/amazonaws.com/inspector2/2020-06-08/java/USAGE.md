<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateMemberHeaders;
import org.openapis.openapi.models.operations.AssociateMemberRequestBody;
import org.openapis.openapi.models.operations.AssociateMemberRequest;
import org.openapis.openapi.models.operations.AssociateMemberResponse;

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

            AssociateMemberRequest req = new AssociateMemberRequest() {{
                headers = new AssociateMemberHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new AssociateMemberRequestBody() {{
                    accountId = "illum";
                }};
            }};            

            AssociateMemberResponse res = sdk.associateMember(req);

            if (res.associateMemberResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->