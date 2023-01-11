<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.LpgsvRequest(
    security=operations.LpgsvSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.LpgsvRequestBody(
        certificate_parameters=operations.LpgsvRequestBodyCertificateParameters(
            lpgid="vitae",
            svid="ad",
        ),
        consent_artifact="commodi",
        format="pdf",
        txn_id="sit",
    ),
)
    
res = s.ap_is.lpgsv(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->