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

            PancrRequest req = new PancrRequest() {{
                security = new PancrSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new PancrRequestBody() {{
                    certificateParameters = new PancrRequestBodyCertificateParameters() {{
                        dob = "sit";
                        fullName = "voluptas";
                        gender = "culpa";
                        panFullName = "expedita";
                        uid = "consequuntur";
                        panno = "dolor";
                    }};
                    consentArtifact = "expedita";
                    format = "pdf";
                    txnId = "fugit";
                }};
            }};

            PancrResponse res = sdk.apIs.pancr(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->