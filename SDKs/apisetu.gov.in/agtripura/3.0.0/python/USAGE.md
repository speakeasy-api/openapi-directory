<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PecerRequest(
    security=operations.PecerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.PecerRequestBody(
        certificate_parameters=operations.PecerRequestBodyCertificateParameters(
            ac_no="aut",
            dob="dicta",
        ),
        consent_artifact="qui",
        format="pdf",
        txn_id="dolore",
    ),
)
    
res = s.ap_is.pecer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->