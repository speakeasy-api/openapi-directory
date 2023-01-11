<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CtcerRequest(
    security=operations.CtcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.CtcerRequestBody(
        certificate_parameters=operations.CtcerRequestBodyCertificateParameters(
            uid="veritatis",
            refno="dolorum",
        ),
        consent_artifact="voluptas",
        format="pdf",
        txn_id="saepe",
    ),
)
    
res = s.ap_is.ctcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->