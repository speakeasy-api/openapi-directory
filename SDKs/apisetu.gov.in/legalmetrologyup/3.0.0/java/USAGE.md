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

            DelcsRequest req = new DelcsRequest() {{
                security = new DelcsSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new DelcsRequestBody() {{
                    certificateParameters = new DelcsRequestBodyCertificateParameters() {{
                        applicationNo = "sit";
                        licenseNo = "voluptas";
                    }};
                    consentArtifact = "culpa";
                    format = "pdf";
                    txnId = "consequuntur";
                }};
            }};

            DelcsResponse res = sdk.apIs.delcs(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->