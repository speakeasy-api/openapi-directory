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

            PecerRequest req = new PecerRequest() {{
                security = new PecerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new PecerRequestBody() {{
                    certificateParameters = new PecerRequestBodyCertificateParameters() {{
                        acNO = "sit";
                        dob = "voluptas";
                    }};
                    consentArtifact = "culpa";
                    format = "pdf";
                    txnId = "consequuntur";
                }};
            }};

            PecerResponse res = sdk.apIs.pecer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->