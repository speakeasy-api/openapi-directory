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

            TrcerRequest req = new TrcerRequest() {{
                security = new TrcerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new TrcerRequestBody() {{
                    certificateParameters = new TrcerRequestBodyCertificateParameters() {{
                        admnNO = "et";
                        fullName = "nostrum";
                    }};
                    consentArtifact = "sed";
                    format = "pdf";
                    txnId = "molestias";
                }};
            }};

            TrcerResponse res = sdk.apIs.trcer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->