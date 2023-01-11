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

            PmjayRequest req = new PmjayRequest() {{
                security = new PmjaySecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new PmjayRequestBody() {{
                    certificateParameters = new PmjayRequestBodyCertificateParameters() {{
                        dob = "enim";
                        fullName = "aliquid";
                        udf1 = "et";
                        udf2 = "et";
                    }};
                    consentArtifact = "quia";
                    format = "pdf";
                    txnId = "maiores";
                }};
            }};

            PmjayResponse res = sdk.apIs.pmjay(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->