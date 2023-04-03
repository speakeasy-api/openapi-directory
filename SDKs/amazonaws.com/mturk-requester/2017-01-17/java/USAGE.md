<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptQualificationRequestXAmzTargetEnum;
import org.openapis.openapi.models.operations.AcceptQualificationRequestRequest;
import org.openapis.openapi.models.operations.AcceptQualificationRequestResponse;
import org.openapis.openapi.models.shared.AcceptQualificationRequestRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptQualificationRequestRequest req = new AcceptQualificationRequestRequest() {{
                acceptQualificationRequestRequest = new AcceptQualificationRequestRequest() {{
                    integerValue = 548814;
                    qualificationRequestId = "provident";
                }};
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
                xAmzTarget = "MTurkRequesterServiceV20170117.AcceptQualificationRequest";
            }}            

            AcceptQualificationRequestResponse res = sdk.acceptQualificationRequest(req);

            if (res.acceptQualificationRequestResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->