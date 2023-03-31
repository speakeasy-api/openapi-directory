<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptPageXAmzTargetEnum;
import org.openapis.openapi.models.operations.AcceptPageHeaders;
import org.openapis.openapi.models.operations.AcceptPageRequest;
import org.openapis.openapi.models.operations.AcceptPageResponse;
import org.openapis.openapi.models.shared.AcceptPageRequest;
import org.openapis.openapi.models.shared.AcceptTypeEnum;
import org.openapis.openapi.models.shared.AcceptCodeValidationEnum;

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

            AcceptPageRequest req = new AcceptPageRequest() {{
                headers = new AcceptPageHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "SSMContacts.AcceptPage";
                }};
                request = new AcceptPageRequest() {{
                    acceptCode = "illum";
                    acceptCodeValidation = "IGNORE";
                    acceptType = "READ";
                    contactChannelId = "deserunt";
                    note = "suscipit";
                    pageId = "iure";
                }};
            }};            

            AcceptPageResponse res = sdk.acceptPage(req);

            if (res.acceptPageResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->