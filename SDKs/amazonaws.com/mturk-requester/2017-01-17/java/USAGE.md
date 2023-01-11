<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AcceptQualificationRequestRequest req = new AcceptQualificationRequestRequest() {{
                headers = new AcceptQualificationRequestHeaders() {{
                    xAmzAlgorithm = "et";
                    xAmzContentSha256 = "sit";
                    xAmzCredential = "minus";
                    xAmzDate = "iste";
                    xAmzSecurityToken = "tempora";
                    xAmzSignature = "officia";
                    xAmzSignedHeaders = "ducimus";
                    xAmzTarget = "MTurkRequesterServiceV20170117.AcceptQualificationRequest";
                }};
                request = new AcceptQualificationRequestRequest() {{
                    integerValue = 8893427221521046744;
                    qualificationRequestId = "perferendis";
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