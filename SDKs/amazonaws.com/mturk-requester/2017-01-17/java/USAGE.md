<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AcceptQualificationRequestXAmzTargetEnum;
import org.openapis.openapi.models.operations.AcceptQualificationRequestHeaders;
import org.openapis.openapi.models.operations.AcceptQualificationRequestRequest;
import org.openapis.openapi.models.operations.AcceptQualificationRequestResponse;
import org.openapis.openapi.models.shared.AcceptQualificationRequestRequest;

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

            AcceptQualificationRequestRequest req = new AcceptQualificationRequestRequest() {{
                headers = new AcceptQualificationRequestHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "MTurkRequesterServiceV20170117.AcceptQualificationRequest";
                }};
                request = new AcceptQualificationRequestRequest() {{
                    integerValue = 847252;
                    qualificationRequestId = "vel";
                }};
            }};            

            AcceptQualificationRequestResponse res = sdk.acceptQualificationRequest(req);

            if (res.acceptQualificationRequestResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->