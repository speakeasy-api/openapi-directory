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

            FmcerRequest req = new FmcerRequest() {{
                security = new FmcerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new FmcerRequestBody() {{
                    certificateParameters = new FmcerRequestBodyCertificateParameters() {{
                        uid = "consectetur";
                    }};
                    consentArtifact = "consequuntur";
                    format = "pdf";
                    txnId = "saepe";
                }};
            }};

            FmcerResponse res = sdk.apIs.fmcer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->