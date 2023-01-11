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

            AdcrdRequest req = new AdcrdRequest() {{
                security = new AdcrdSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new AdcrdRequestBody() {{
                    certificateParameters = new AdcrdRequestBodyCertificateParameters() {{
                        dob = "sit";
                        fatherName = "voluptas";
                        fullName = "culpa";
                    }};
                    consentArtifact = "expedita";
                    format = "pdf";
                    txnId = "dolor";
                }};
            }};

            AdcrdResponse res = sdk.apIs.adcrd(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->