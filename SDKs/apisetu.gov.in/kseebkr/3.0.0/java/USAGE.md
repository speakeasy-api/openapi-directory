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

            SscerRequest req = new SscerRequest() {{
                security = new SscerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new SscerRequestBody() {{
                    certificateParameters = new SscerRequestBodyCertificateParameters() {{
                        dob = "id";
                        fullName = "minima";
                        regno = "aut";
                        uid = "ea";
                    }};
                    consentArtifact = "et";
                    format = "pdf";
                    txnId = "enim";
                }};
            }};

            SscerResponse res = sdk.apIs.sscer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->