<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.BrlcsRequest(
    security=operations.BrlcsSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.BrlcsRequestBody(
        certificate_parameters=operations.BrlcsRequestBodyCertificateParameters(
            certificate_number="incidunt",
        ),
        consent_artifact="quos",
        format="pdf",
        txn_id="omnis",
    ),
)
    
res = s.ap_is.brlcs(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->