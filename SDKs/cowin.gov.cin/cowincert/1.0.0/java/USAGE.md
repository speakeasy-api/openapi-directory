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

            GetCertificatePdfRequest req = new GetCertificatePdfRequest() {{
                security = new GetCertificatePdfSecurity() {{
                    certAuth = new SchemeCertAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                request = new CertificateRequest() {{
                    beneficiaryId = "sit";
                    mobile = "voluptas";
                }};
            }};

            GetCertificatePdfResponse res = sdk.certificate.getCertificatePdf(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->