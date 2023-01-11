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

            DgcerRequest req = new DgcerRequest() {{
                security = new DgcerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new DgcerRequestBody() {{
                    certificateParameters = new DgcerRequestBodyCertificateParameters() {{
                        cname = "quidem";
                        regno = "incidunt";
                        rroll = "ratione";
                        year = "ratione";
                    }};
                    consentArtifact = "ut";
                    format = "pdf";
                    txnId = "qui";
                }};
            }};

            DgcerResponse res = sdk.apIs.dgcer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->