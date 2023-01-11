<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SocerRequest(
    security=operations.SocerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.SocerRequestBody(
        certificate_parameters=operations.SocerRequestBodyCertificateParameters(
            appl_no="tempore",
            dob="dignissimos",
            full_name="nihil",
            session="enim",
        ),
        consent_artifact="excepturi",
        format="pdf",
        txn_id="voluptate",
    ),
)
    
res = s.ap_is.socer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->