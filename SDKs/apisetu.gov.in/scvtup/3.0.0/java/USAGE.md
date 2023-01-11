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

            SkcerRequest req = new SkcerRequest() {{
                security = new SkcerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new SkcerRequestBody() {{
                    certificateParameters = new SkcerRequestBodyCertificateParameters() {{
                        dob = "sapiente";
                        fullName = "rerum";
                        rollNumber = "esse";
                        session = "beatae";
                    }};
                    consentArtifact = "quibusdam";
                    format = "pdf";
                    txnId = "nulla";
                }};
            }};

            SkcerResponse res = sdk.apIs.skcer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->