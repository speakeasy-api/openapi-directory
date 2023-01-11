<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.LicerRequest(
    security=operations.LicerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.LicerRequestBody(
        certificate_parameters=operations.LicerRequestBodyCertificateParameters(
            dob="qui",
            full_name="velit",
            policy_no="in",
        ),
        consent_artifact="voluptatem",
        format="pdf",
        txn_id="accusamus",
    ),
)
    
res = s.ap_is.licer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->