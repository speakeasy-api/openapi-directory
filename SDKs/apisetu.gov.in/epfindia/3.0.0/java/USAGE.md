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

            EpfscRequest req = new EpfscRequest() {{
                security = new EpfscSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new EpfscRequestBody() {{
                    certificateParameters = new EpfscRequestBodyCertificateParameters() {{
                        dob = "explicabo";
                        fullName = "repudiandae";
                        scno = "sapiente";
                    }};
                    consentArtifact = "nesciunt";
                    format = "pdf";
                    txnId = "ab";
                }};
            }};

            EpfscResponse res = sdk.apIs.epfsc(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->