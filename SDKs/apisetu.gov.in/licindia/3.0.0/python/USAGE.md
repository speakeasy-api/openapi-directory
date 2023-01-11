<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PodocRequest(
    security=operations.PodocSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.PodocRequestBody(
        certificate_parameters=operations.PodocRequestBodyCertificateParameters(
            dob="aut",
            full_name="alias",
            pol_dob="inventore",
            policy_no="est",
        ),
        consent_artifact="consequuntur",
        format="pdf",
        txn_id="dolor",
    ),
)
    
res = s.ap_is.podoc(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->