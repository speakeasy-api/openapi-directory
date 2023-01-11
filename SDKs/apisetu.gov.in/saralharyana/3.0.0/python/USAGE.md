<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.NbcerRequest(
    security=operations.NbcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.NbcerRequestBody(
        certificate_parameters=operations.NbcerRequestBodyCertificateParameters(
            ref_no="aut",
            token_no="eveniet",
        ),
        consent_artifact="aut",
        format="pdf",
        txn_id="rem",
    ),
)
    
res = s.ap_is.nbcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->