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

            HscerRequest req = new HscerRequest() {{
                security = new HscerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new HscerRequestBody() {{
                    certificateParameters = new HscerRequestBodyCertificateParameters() {{
                        certificateType = "et";
                        dob = "eaque";
                        fullName = "veritatis";
                        rroll = "id";
                        month = "optio";
                        year = "inventore";
                    }};
                    consentArtifact = "illo";
                    format = "pdf";
                    txnId = "culpa";
                }};
            }};

            HscerResponse res = sdk.apIs.hscer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->