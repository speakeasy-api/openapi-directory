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

            VochseRequest req = new VochseRequest() {{
                security = new VochseSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new VochseRequestBody() {{
                    certificateParameters = new VochseRequestBodyCertificateParameters() {{
                        dob = "sit";
                        fullName = "voluptas";
                        regno = "culpa";
                        year = "expedita";
                        type = "consequuntur";
                    }};
                    consentArtifact = "dolor";
                    format = "pdf";
                    txnId = "voluptas";
                }};
            }};

            VochseResponse res = sdk.apIs.vochse(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->