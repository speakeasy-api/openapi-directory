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

            BrlcsRequest req = new BrlcsRequest() {{
                security = new BrlcsSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new BrlcsRequestBody() {{
                    certificateParameters = new BrlcsRequestBodyCertificateParameters() {{
                        certificateNumber = "sit";
                    }};
                    consentArtifact = "voluptas";
                    format = "pdf";
                    txnId = "expedita";
                }};
            }};

            BrlcsResponse res = sdk.apIs.brlcs(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->