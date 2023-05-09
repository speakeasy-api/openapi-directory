# certificate

## Overview

Certificate api

### Available Operations

* [getCertificatePdf](#getcertificatepdf) - Download the certificate in pdf format

## getCertificatePdf

Download the certificate in pdf format

### Example Usage

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
                beneficiaryId = "tempora";
                mobile = "1-578-645-3980 x306";
            }};            

            GetCertificatePdfResponse res = sdk.certificate.getCertificatePdf(req, new GetCertificatePdfSecurity("perferendis") {{
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
