<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DelcsRequest(
    security=operations.DelcsSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.DelcsRequestBody(
        certificate_parameters=operations.DelcsRequestBodyCertificateParameters(
            application_no="voluptas",
            license_no="corrupti",
        ),
        consent_artifact="recusandae",
        format="pdf",
        txn_id="sit",
    ),
)
    
res = s.ap_is.delcs(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->