<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptQualificationRequestRequest;
import org.openapis.openapi.models.operations.AcceptQualificationRequestResponse;
import org.openapis.openapi.models.operations.AcceptQualificationRequestXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcceptQualificationRequestRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptQualificationRequestRequest req = new AcceptQualificationRequestRequest(                new AcceptQualificationRequestRequest("provident") {{
                                integerValue = 715190L;
                            }};, AcceptQualificationRequestXAmzTargetEnum.M_TURK_REQUESTER_SERVICE_V20170117_ACCEPT_QUALIFICATION_REQUEST) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }};            

            AcceptQualificationRequestResponse res = sdk.acceptQualificationRequest(req);

            if (res.acceptQualificationRequestResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->