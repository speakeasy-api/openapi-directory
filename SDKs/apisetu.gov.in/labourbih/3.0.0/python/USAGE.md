<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AlimwRequest(
    security=operations.AlimwSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.AlimwRequestBody(
        certificate_parameters=operations.AlimwRequestBodyCertificateParameters(
            ref_no="maxime",
            token_no="rerum",
        ),
        consent_artifact="quisquam",
        format="pdf",
        txn_id="nemo",
    ),
)
    
res = s.ap_is.alimw(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->