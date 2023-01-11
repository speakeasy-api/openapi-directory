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

            NbcerRequest req = new NbcerRequest() {{
                security = new NbcerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new NbcerRequestBody() {{
                    certificateParameters = new NbcerRequestBodyCertificateParameters() {{
                        refNo = "aut";
                        tokenNo = "eveniet";
                    }};
                    consentArtifact = "aut";
                    format = "pdf";
                    txnId = "rem";
                }};
            }};

            NbcerResponse res = sdk.apIs.nbcer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->