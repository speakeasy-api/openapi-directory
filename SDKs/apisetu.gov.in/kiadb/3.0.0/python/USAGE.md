<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AlltrRequest(
    security=operations.AlltrSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.AlltrRequestBody(
        certificate_parameters=operations.AlltrRequestBodyCertificateParameters(
            dob="et",
            full_name="tempore",
            reg_num="quis",
            uid="vitae",
        ),
        consent_artifact="sunt",
        format="pdf",
        txn_id="sit",
    ),
)
    
res = s.ap_is.alltr(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->