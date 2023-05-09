<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCertificatePdfResponse;
import org.openapis.openapi.models.operations.GetCertificatePdfSecurity;
import org.openapis.openapi.models.shared.CertificateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CertificateRequest req = new CertificateRequest() {{
                beneficiaryId = "corrupti";
                mobile = "(786) 858-4663 x4280";
            }};            

            GetCertificatePdfResponse res = sdk.certificate.getCertificatePdf(req, new GetCertificatePdfSecurity("delectus") {{
                certAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->