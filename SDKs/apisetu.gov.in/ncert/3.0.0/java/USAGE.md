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

            MrcerRequest req = new MrcerRequest() {{
                security = new MrcerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new MrcerRequestBody() {{
                    certificateParameters = new MrcerRequestBodyCertificateParameters() {{
                        dob = "sit";
                        fullName = "voluptas";
                        rroll = "culpa";
                        year = "expedita";
                    }};
                    consentArtifact = "consequuntur";
                    format = "pdf";
                    txnId = "expedita";
                }};
            }};

            MrcerResponse res = sdk.apIs.mrcer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->