<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.MrcerRequest(
    security=operations.MrcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.MrcerRequestBody(
        certificate_parameters=operations.MrcerRequestBodyCertificateParameters(
            dob="nihil",
            full_name="dicta",
            rroll="impedit",
            year="illum",
        ),
        consent_artifact="quibusdam",
        format="pdf",
        txn_id="id",
    ),
)
    
res = s.ap_is.mrcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->