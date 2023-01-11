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

            DipcrRequest req = new DipcrRequest() {{
                security = new DipcrSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new DipcrRequestBody() {{
                    certificateParameters = new DipcrRequestBodyCertificateParameters() {{
                        fullName = "consectetur";
                        rollNo = "quis";
                    }};
                    consentArtifact = "unde";
                    format = "pdf";
                    txnId = "accusantium";
                }};
            }};

            DipcrResponse res = sdk.apIs.dipcr(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->