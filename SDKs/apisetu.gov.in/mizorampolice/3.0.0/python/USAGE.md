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
            card_no="animi",
            full_name="et",
        ),
        consent_artifact="non",
        format="pdf",
        txn_id="accusantium",
    ),
)
    
res = s.ap_is.govid(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->