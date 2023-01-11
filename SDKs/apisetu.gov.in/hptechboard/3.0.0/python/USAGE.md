<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DipcrRequest(
    security=operations.DipcrSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.DipcrRequestBody(
        certificate_parameters=operations.DipcrRequestBodyCertificateParameters(
            full_name="consectetur",
            roll_no="quis",
        ),
        consent_artifact="unde",
        format="pdf",
        txn_id="accusantium",
    ),
)
    
res = s.ap_is.dipcr(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->