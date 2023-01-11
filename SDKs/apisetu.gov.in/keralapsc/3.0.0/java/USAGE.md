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

            OtcerRequest req = new OtcerRequest() {{
                security = new OtcerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new OtcerRequestBody() {{
                    certificateParameters = new OtcerRequestBodyCertificateParameters() {{
                        dob = "sit";
                        fullName = "voluptas";
                        uid = "culpa";
                    }};
                    consentArtifact = "expedita";
                    format = "pdf";
                    txnId = "dolor";
                }};
            }};

            OtcerResponse res = sdk.apIs.otcer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->