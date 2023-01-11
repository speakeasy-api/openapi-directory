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

            IticrRequest req = new IticrRequest() {{
                security = new IticrSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new IticrRequestBody() {{
                    certificateParameters = new IticrRequestBodyCertificateParameters() {{
                        fullName = "impedit";
                        certno = "magni";
                    }};
                    consentArtifact = "id";
                    format = "pdf";
                    txnId = "fugiat";
                }};
            }};

            IticrResponse res = sdk.apIs.iticr(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->