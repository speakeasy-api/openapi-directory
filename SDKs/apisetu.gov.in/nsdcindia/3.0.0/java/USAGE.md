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

            EscerRequest req = new EscerRequest() {{
                security = new EscerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new EscerRequestBody() {{
                    certificateParameters = new EscerRequestBodyCertificateParameters() {{
                        dob = "impedit";
                        docid = "molestiae";
                        fullName = "dolorem";
                    }};
                    consentArtifact = "eligendi";
                    format = "pdf";
                    txnId = "minus";
                }};
            }};

            EscerResponse res = sdk.apIs.escer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->