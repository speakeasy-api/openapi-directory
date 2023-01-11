<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DpicrRequest(
    security=operations.DpicrSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.DpicrRequestBody(
        certificate_parameters=operations.DpicrRequestBodyCertificateParameters(
            cert_no="facere",
            full_name="facere",
        ),
        consent_artifact="ut",
        format="pdf",
        txn_id="assumenda",
    ),
)
    
res = s.ap_is.dpicr(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->