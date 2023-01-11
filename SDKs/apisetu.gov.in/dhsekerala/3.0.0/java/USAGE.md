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

            HpcerRequest req = new HpcerRequest() {{
                security = new HpcerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new HpcerRequestBody() {{
                    certificateParameters = new HpcerRequestBodyCertificateParameters() {{
                        dob = "sit";
                        fullName = "voluptas";
                        regno = "culpa";
                        type = "expedita";
                        year = "consequuntur";
                    }};
                    consentArtifact = "dolor";
                    format = "pdf";
                    txnId = "voluptas";
                }};
            }};

            HpcerResponse res = sdk.apIs.hpcer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->