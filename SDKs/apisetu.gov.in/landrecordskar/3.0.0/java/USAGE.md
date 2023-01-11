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

            CncerRequest req = new CncerRequest() {{
                security = new CncerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new CncerRequestBody() {{
                    certificateParameters = new CncerRequestBodyCertificateParameters() {{
                        documentNumber = "sit";
                    }};
                    consentArtifact = "voluptas";
                    format = "pdf";
                    txnId = "expedita";
                }};
            }};

            CncerResponse res = sdk.apIs.cncer(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->