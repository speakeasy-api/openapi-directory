<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateFraudsterXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateFraudsterHeaders;
import org.openapis.openapi.models.operations.AssociateFraudsterRequest;
import org.openapis.openapi.models.operations.AssociateFraudsterResponse;
import org.openapis.openapi.models.shared.AssociateFraudsterRequest;

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

            AssociateFraudsterRequest req = new AssociateFraudsterRequest() {{
                headers = new AssociateFraudsterHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "VoiceID.AssociateFraudster";
                }};
                request = new AssociateFraudsterRequest() {{
                    domainId = "illum";
                    fraudsterId = "vel";
                    watchlistId = "error";
                }};
            }};            

            AssociateFraudsterResponse res = sdk.associateFraudster(req);

            if (res.associateFraudsterResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->