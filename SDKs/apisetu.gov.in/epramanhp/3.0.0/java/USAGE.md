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

            AgcerRequest req = new AgcerRequest() {{
                security = new AgcerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new AgcerRequestBody() {{
                    certificateParameters = new AgcerRequestBodyCertificateParameters() {{
                        name = "ullam";
                        refNo = "est";
                    }};
                    consentArtifact = "eos";
                    format = "pdf";
                    txnId = "minus";
                }};
            }};

            AgcerResponse res = sdk.apIs.agcer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->