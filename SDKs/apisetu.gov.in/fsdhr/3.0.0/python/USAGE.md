<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.RatcrRequest(
    security=operations.RatcrSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.RatcrRequestBody(
        certificate_parameters=operations.RatcrRequestBodyCertificateParameters(
            full_name="vel",
            card_no="nesciunt",
        ),
        consent_artifact="hic",
        format="pdf",
        txn_id="quod",
    ),
)
    
res = s.ap_is.ratcr(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->