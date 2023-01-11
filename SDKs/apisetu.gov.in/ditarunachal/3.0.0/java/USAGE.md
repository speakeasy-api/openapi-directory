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

            IlpmtRequest req = new IlpmtRequest() {{
                security = new IlpmtSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new IlpmtRequestBody() {{
                    certificateParameters = new IlpmtRequestBodyCertificateParameters() {{
                        fullName = "sit";
                        uid = "voluptas";
                        eILPAppId = "culpa";
                        eILPContactNumber = "expedita";
                    }};
                    consentArtifact = "consequuntur";
                    format = "pdf";
                    txnId = "expedita";
                }};
            }};

            IlpmtResponse res = sdk.apIs.ilpmt(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->