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

            SslcrRequest req = new SslcrRequest() {{
                security = new SslcrSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new SslcrRequestBody() {{
                    certificateParameters = new SslcrRequestBodyCertificateParameters() {{
                        dob = "sit";
                        fullName = "voluptas";
                        uid = "culpa";
                        regno = "expedita";
                        year = "consequuntur";
                    }};
                    consentArtifact = "dolor";
                    format = "pdf";
                    txnId = "voluptas";
                }};
            }};

            SslcrResponse res = sdk.apIs.sslcr(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->