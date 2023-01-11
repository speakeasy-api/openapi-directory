<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.EpfscRequest(
    security=operations.EpfscSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.EpfscRequestBody(
        certificate_parameters=operations.EpfscRequestBodyCertificateParameters(
            dob="explicabo",
            full_name="repudiandae",
            scno="sapiente",
        ),
        consent_artifact="nesciunt",
        format="pdf",
        txn_id="ab",
    ),
)
    
res = s.ap_is.epfsc(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->