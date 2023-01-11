<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CvcerRequest(
    security=operations.CvcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.CvcerRequestBody(
        certificate_parameters=operations.CvcerRequestBodyCertificateParameters(
            dob="consequatur",
            vc_no="quo",
        ),
        consent_artifact="deleniti",
        format="pdf",
        txn_id="nemo",
    ),
)
    
res = s.ap_is.cvcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->