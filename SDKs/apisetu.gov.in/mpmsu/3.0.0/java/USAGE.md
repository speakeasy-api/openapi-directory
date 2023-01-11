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

            MicerRequest req = new MicerRequest() {{
                security = new MicerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new MicerRequestBody() {{
                    certificateParameters = new MicerRequestBodyCertificateParameters() {{
                        appno = "sapiente";
                        dateOfBirth = "iure";
                        enrolno = "assumenda";
                        rollno = "dolore";
                    }};
                    consentArtifact = "nobis";
                    format = "pdf";
                    txnId = "qui";
                }};
            }};

            MicerResponse res = sdk.apIs.micer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->