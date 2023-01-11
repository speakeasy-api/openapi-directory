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

            AlsfcRequest req = new AlsfcRequest() {{
                security = new AlsfcSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new AlsfcRequestBody() {{
                    certificateParameters = new AlsfcRequestBodyCertificateParameters() {{
                        uid = "sit";
                        lino = "voluptas";
                    }};
                    consentArtifact = "culpa";
                    format = "pdf";
                    txnId = "consequuntur";
                }};
            }};

            AlsfcResponse res = sdk.apIs.alsfc(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->