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
            dob="sapiente",
            full_name="rerum",
            roll_number="esse",
            session="beatae",
        ),
        consent_artifact="quibusdam",
        format="pdf",
        txn_id="nulla",
    ),
)
    
res = s.ap_is.skcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->