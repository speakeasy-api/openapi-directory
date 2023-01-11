<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DgmstRequest(
    security=operations.DgmstSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.DgmstRequestBody(
        certificate_parameters=operations.DgmstRequestBodyCertificateParameters(
            full_name="architecto",
            rroll="eum",
            sem="modi",
        ),
        consent_artifact="voluptatem",
        format="pdf",
        txn_id="illum",
    ),
)
    
res = s.ap_is.dgmst(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->