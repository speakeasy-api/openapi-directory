<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FmcerRequest(
    security=operations.FmcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.FmcerRequestBody(
        certificate_parameters=operations.FmcerRequestBodyCertificateParameters(
            uid="consectetur",
        ),
        consent_artifact="consequuntur",
        format="pdf",
        txn_id="saepe",
    ),
)
    
res = s.ap_is.fmcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->