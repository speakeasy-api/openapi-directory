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

            GovidRequest req = new GovidRequest() {{
                security = new GovidSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new GovidRequestBody() {{
                    certificateParameters = new GovidRequestBodyCertificateParameters() {{
                        fullName = "sit";
                        membershipNo = "voluptas";
                    }};
                    consentArtifact = "culpa";
                    format = "pdf";
                    txnId = "consequuntur";
                }};
            }};

            GovidResponse res = sdk.apIs.govid(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->