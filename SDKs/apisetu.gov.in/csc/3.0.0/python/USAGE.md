<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SkcerRequest(
    security=operations.SkcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.SkcerRequestBody(
        certificate_parameters=operations.SkcerRequestBodyCertificateParameters(
            full_name="odit",
            certificate_type="eum",
            username="placeat",
        ),
        consent_artifact="illo",
        format="pdf",
        txn_id="quas",
    ),
)
    
res = s.ap_is.skcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->