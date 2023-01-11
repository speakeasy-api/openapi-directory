<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.RsbycRequest(
    security=operations.RsbycSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.RsbycRequestBody(
        certificate_parameters=operations.RsbycRequestBodyCertificateParameters(
            uid="facere",
        ),
        consent_artifact="sunt",
        format="pdf",
        txn_id="nulla",
    ),
)
    
res = s.ap_is.rsbyc(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->