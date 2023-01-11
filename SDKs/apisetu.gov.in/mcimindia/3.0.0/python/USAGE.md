<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GovidRequest(
    security=operations.GovidSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.GovidRequestBody(
        certificate_parameters=operations.GovidRequestBodyCertificateParameters(
            dob="quia",
            full_name="sint",
            regn_no="autem",
            uid="similique",
        ),
        consent_artifact="et",
        format="pdf",
        txn_id="cum",
    ),
)
    
res = s.ap_is.govid(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->