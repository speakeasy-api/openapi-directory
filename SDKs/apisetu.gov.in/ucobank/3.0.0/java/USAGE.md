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

            TdcerRequest req = new TdcerRequest() {{
                security = new TdcerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new TdcerRequestBody() {{
                    certificateParameters = new TdcerRequestBodyCertificateParameters() {{
                        custID = "sit";
                        dob = "voluptas";
                        finYr = "culpa";
                    }};
                    consentArtifact = "expedita";
                    format = "pdf";
                    txnId = "dolor";
                }};
            }};

            TdcerResponse res = sdk.apIs.tdcer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->