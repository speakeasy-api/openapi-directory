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

            DrvlcRequest req = new DrvlcRequest() {{
                security = new DrvlcSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new DrvlcRequestBody() {{
                    certificateParameters = new DrvlcRequestBodyCertificateParameters() {{
                        dob = "dolorum";
                        fullName = "illum";
                        uid = "voluptatem";
                        dlno = "ut";
                    }};
                    consentArtifact = "et";
                    format = "pdf";
                    txnId = "sequi";
                }};
            }};

            DrvlcResponse res = sdk.apIs.drvlc(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->