<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetV1VerificationResultRequest req = new GetV1VerificationResultRequest() {{
                queryParams = new GetV1VerificationResultQueryParams() {{
                    format = "xml";
                    key = "quis";
                    otp = "eligendi";
                    tranId = "velit";
                }};
            }};

            GetV1VerificationResultResponse res = sdk.getV1VerificationResult(req);

            if (res.getV1VerificationResult200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->