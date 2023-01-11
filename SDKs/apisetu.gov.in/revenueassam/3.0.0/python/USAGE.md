<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.NncerRequest(
    security=operations.NncerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.NncerRequestBody(
        certificate_parameters=operations.NncerRequestBodyCertificateParameters(
            ref_no="consequatur",
        ),
        consent_artifact="sit",
        format="pdf",
        txn_id="quaerat",
    ),
)
    
res = s.ap_is.nncer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->