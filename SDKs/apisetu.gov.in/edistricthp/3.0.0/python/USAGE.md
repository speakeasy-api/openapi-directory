<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AecmwRequest(
    security=operations.AecmwSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.AecmwRequestBody(
        certificate_parameters=operations.AecmwRequestBodyCertificateParameters(
            udf1="distinctio",
        ),
        consent_artifact="repellendus",
        format="pdf",
        txn_id="omnis",
    ),
)
    
res = s.ap_is.aecmw(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->