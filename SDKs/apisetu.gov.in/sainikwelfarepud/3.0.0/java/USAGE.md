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

            DpcerRequest req = new DpcerRequest() {{
                security = new DpcerSecurity() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new DpcerRequestBody() {{
                    certificateParameters = new DpcerRequestBodyCertificateParameters() {{
                        fullName = "qui";
                        uid = "maiores";
                        certNo = "ipsam";
                    }};
                    consentArtifact = "non";
                    format = "pdf";
                    txnId = "veritatis";
                }};
            }};

            DpcerResponse res = sdk.apIs.dpcer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->