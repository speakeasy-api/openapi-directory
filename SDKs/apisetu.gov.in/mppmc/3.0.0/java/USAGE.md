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

            SocerRequest req = new SocerRequest() {{
                security = new SocerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new SocerRequestBody() {{
                    certificateParameters = new SocerRequestBodyCertificateParameters() {{
                        appno = "in";
                        dateOfBirth = "tempora";
                        enrolno = "molestiae";
                        typOfCert = "aperiam";
                    }};
                    consentArtifact = "sit";
                    format = "pdf";
                    txnId = "iste";
                }};
            }};

            SocerResponse res = sdk.apIs.socer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->