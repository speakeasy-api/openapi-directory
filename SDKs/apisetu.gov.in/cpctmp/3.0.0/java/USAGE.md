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

            SkmstRequest req = new SkmstRequest() {{
                security = new SkmstSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new SkmstRequestBody() {{
                    certificateParameters = new SkmstRequestBodyCertificateParameters() {{
                        txt10thRollNo = "sit";
                        txtCandidateAppSeq = "voluptas";
                        txtExamDate = "culpa";
                    }};
                    consentArtifact = "expedita";
                    format = "pdf";
                    txnId = "dolor";
                }};
            }};

            SkmstResponse res = sdk.apIs.skmst(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->