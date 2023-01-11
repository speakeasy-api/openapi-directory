<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ChcerRequest(
    security=operations.ChcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.ChcerRequestBody(
        certificate_parameters=operations.ChcerRequestBodyCertificateParameters(
            ref_no="illo",
            token_no="eveniet",
        ),
        consent_artifact="cumque",
        format="pdf",
        txn_id="eveniet",
    ),
)
    
res = s.ap_is.chcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->