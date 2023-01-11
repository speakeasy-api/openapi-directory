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

            AecmwRequest req = new AecmwRequest() {{
                security = new AecmwSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new AecmwRequestBody() {{
                    certificateParameters = new AecmwRequestBodyCertificateParameters() {{
                        udf1 = "sit";
                    }};
                    consentArtifact = "voluptas";
                    format = "pdf";
                    txnId = "expedita";
                }};
            }};

            AecmwResponse res = sdk.apIs.aecmw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->