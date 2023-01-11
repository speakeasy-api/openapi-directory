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

            LicerRequest req = new LicerRequest() {{
                security = new LicerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new LicerRequestBody() {{
                    certificateParameters = new LicerRequestBodyCertificateParameters() {{
                        dob = "voluptatem";
                        policynumber = "qui";
                    }};
                    consentArtifact = "ea";
                    format = "pdf";
                    txnId = "sapiente";
                }};
            }};

            LicerResponse res = sdk.apIs.licer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->