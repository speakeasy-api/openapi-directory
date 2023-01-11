<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.IticrRequest(
    security=operations.IticrSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.IticrRequestBody(
        certificate_parameters=operations.IticrRequestBodyCertificateParameters(
            full_name="impedit",
            certno="magni",
        ),
        consent_artifact="id",
        format="pdf",
        txn_id="fugiat",
    ),
)
    
res = s.ap_is.iticr(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->