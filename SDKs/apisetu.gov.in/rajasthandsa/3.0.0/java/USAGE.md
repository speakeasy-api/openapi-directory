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

            DpicrRequest req = new DpicrRequest() {{
                security = new DpicrSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new DpicrRequestBody() {{
                    certificateParameters = new DpicrRequestBodyCertificateParameters() {{
                        udf1 = "enim";
                        uid = "voluptates";
                    }};
                    consentArtifact = "dolore";
                    format = "pdf";
                    txnId = "aut";
                }};
            }};

            DpicrResponse res = sdk.apIs.dpicr(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->