<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AdcrdRequest(
    security=operations.AdcrdSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.AdcrdRequestBody(
        certificate_parameters=operations.AdcrdRequestBodyCertificateParameters(
            dob="quia",
            father_name="officia",
            full_name="qui",
        ),
        consent_artifact="odit",
        format="pdf",
        txn_id="sed",
    ),
)
    
res = s.ap_is.adcrd(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->