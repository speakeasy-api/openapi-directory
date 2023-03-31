<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.CertificateRequest(
    beneficiary_id="corrupti",
    mobile="(786) 858-4663 x4280",
)
    
res = s.certificate.get_certificate_pdf(req, operations.GetCertificatePdfSecurity(
    cert_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->