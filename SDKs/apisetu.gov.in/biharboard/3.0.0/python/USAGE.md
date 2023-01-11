<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SscerRequest(
    security=operations.SscerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.SscerRequestBody(
        certificate_parameters=operations.SscerRequestBodyCertificateParameters(
            dob="in",
            full_name="animi",
            rroll="consequuntur",
            rroll_code="impedit",
            year="cumque",
        ),
        consent_artifact="eos",
        format="pdf",
        txn_id="beatae",
    ),
)
    
res = s.ap_is.sscer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->