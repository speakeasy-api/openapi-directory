<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptPageXAmzTargetEnum;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptPageRequest req = new AcceptPageRequest() {{
                acceptPageRequest = new AcceptPageRequest() {{
                    acceptCode = "corrupti";
                    acceptCodeValidation = "ENFORCE";
                    acceptType = "READ";
                    contactChannelId = "quibusdam";
                    note = "unde";
                    pageId = "nulla";
                }};
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "illum";
                xAmzCredential = "vel";
                xAmzDate = "error";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "iure";
                xAmzTarget = "SSMContacts.AcceptPage";
            }}            

            AcceptPageResponse res = sdk.acceptPage(req);

            if (res.acceptPageResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->