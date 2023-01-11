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

            LlcerRequest req = new LlcerRequest() {{
                security = new LlcerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new LlcerRequestBody() {{
                    certificateParameters = new LlcerRequestBodyCertificateParameters() {{
                        udf1 = "ex";
                        udf2 = "ad";
                        udf3 = "dolorum";
                    }};
                    consentArtifact = "voluptatem";
                    format = "pdf";
                    txnId = "laborum";
                }};
            }};

            LlcerResponse res = sdk.apIs.llcer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->