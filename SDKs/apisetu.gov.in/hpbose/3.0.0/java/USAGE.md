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

            HvcerRequest req = new HvcerRequest() {{
                security = new HvcerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new HvcerRequestBody() {{
                    certificateParameters = new HvcerRequestBodyCertificateParameters() {{
                        dob = "sit";
                        fullName = "voluptas";
                        roll = "culpa";
                        yop = "expedita";
                    }};
                    consentArtifact = "consequuntur";
                    format = "pdf";
                    txnId = "expedita";
                }};
            }};

            HvcerResponse res = sdk.apIs.hvcer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->