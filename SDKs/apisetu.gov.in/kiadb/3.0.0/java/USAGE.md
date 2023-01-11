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

            AlltrRequest req = new AlltrRequest() {{
                security = new AlltrSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new AlltrRequestBody() {{
                    certificateParameters = new AlltrRequestBodyCertificateParameters() {{
                        dob = "sit";
                        fullName = "voluptas";
                        regNum = "culpa";
                        uid = "expedita";
                    }};
                    consentArtifact = "consequuntur";
                    format = "pdf";
                    txnId = "expedita";
                }};
            }};

            AlltrResponse res = sdk.apIs.alltr(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->