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

            DgmstRequest req = new DgmstRequest() {{
                security = new DgmstSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new DgmstRequestBody() {{
                    certificateParameters = new DgmstRequestBodyCertificateParameters() {{
                        fullName = "architecto";
                        rroll = "eum";
                        sem = "modi";
                    }};
                    consentArtifact = "voluptatem";
                    format = "pdf";
                    txnId = "illum";
                }};
            }};

            DgmstResponse res = sdk.apIs.dgmst(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->