<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.RatcrRequest(
    security=operations.RatcrSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.RatcrRequestBody(
        certificate_parameters=operations.RatcrRequestBodyCertificateParameters(
            dob="enim",
            full_name="eos",
            gender="adipisci",
            uid="eos",
        ),
        consent_artifact="est",
        format="pdf",
        txn_id="ipsum",
    ),
)
    
res = s.ap_is.ratcr(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->