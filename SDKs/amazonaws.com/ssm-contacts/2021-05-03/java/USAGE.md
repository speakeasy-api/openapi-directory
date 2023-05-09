<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptPageRequest;
import org.openapis.openapi.models.operations.AcceptPageResponse;
import org.openapis.openapi.models.operations.AcceptPageXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcceptCodeValidationEnum;
import org.openapis.openapi.models.shared.AcceptPageRequest;
import org.openapis.openapi.models.shared.AcceptTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptPageRequest req = new AcceptPageRequest(                new AcceptPageRequest("provident", AcceptTypeEnum.READ, "quibusdam") {{
                                acceptCodeValidation = AcceptCodeValidationEnum.ENFORCE;
                                contactChannelId = "nulla";
                                note = "corrupti";
                            }};, AcceptPageXAmzTargetEnum.SSM_CONTACTS_ACCEPT_PAGE) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "error";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "magnam";
            }};            

            AcceptPageResponse res = sdk.acceptPage(req);

            if (res.acceptPageResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->