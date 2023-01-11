<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DgcerRequest(
    security=operations.DgcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.DgcerRequestBody(
        certificate_parameters=operations.DgcerRequestBodyCertificateParameters(
            cname="voluptatum",
            regno="temporibus",
            year="voluptas",
        ),
        consent_artifact="accusantium",
        format="pdf",
        txn_id="aut",
    ),
)
    
res = s.ap_is.dgcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->