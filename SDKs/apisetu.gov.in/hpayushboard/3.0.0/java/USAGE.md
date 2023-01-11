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

            PhcerRequest req = new PhcerRequest() {{
                security = new PhcerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new PhcerRequestBody() {{
                    certificateParameters = new PhcerRequestBodyCertificateParameters() {{
                        fullName = "ut";
                        registrationNo = "ut";
                    }};
                    consentArtifact = "deleniti";
                    format = "pdf";
                    txnId = "quam";
                }};
            }};

            PhcerResponse res = sdk.apIs.phcer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->