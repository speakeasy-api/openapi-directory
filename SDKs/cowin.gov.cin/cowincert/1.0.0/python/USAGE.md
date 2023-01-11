<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetCertificatePdfRequest(
    security=operations.GetCertificatePdfSecurity(
        cert_auth=shared.SchemeCertAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    request=shared.CertificateRequest(
        beneficiary_id="et",
        mobile="vitae",
    ),
)
    
res = s.certificate.get_certificate_pdf(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->