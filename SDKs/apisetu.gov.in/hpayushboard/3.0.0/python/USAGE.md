<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PhcerRequest(
    security=operations.PhcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.PhcerRequestBody(
        certificate_parameters=operations.PhcerRequestBodyCertificateParameters(
            full_name="ut",
            registration_no="ut",
        ),
        consent_artifact="deleniti",
        format="pdf",
        txn_id="quam",
    ),
)
    
res = s.ap_is.phcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->