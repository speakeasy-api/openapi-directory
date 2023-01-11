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

            IncerRequest req = new IncerRequest() {{
                security = new IncerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new IncerRequestBody() {{
                    certificateParameters = new IncerRequestBodyCertificateParameters() {{
                        appno = "error";
                        certno = "nulla";
                    }};
                    consentArtifact = "quis";
                    format = "pdf";
                    txnId = "ratione";
                }};
            }};

            IncerResponse res = sdk.apIs.incer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->