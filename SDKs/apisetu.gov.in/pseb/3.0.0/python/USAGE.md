<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CemstRequest(
    security=operations.CemstSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.CemstRequestBody(
        certificate_parameters=operations.CemstRequestBodyCertificateParameters(
            full_name="atque",
            uid="quo",
            rollno="esse",
            year="consequatur",
        ),
        consent_artifact="nostrum",
        format="pdf",
        txn_id="debitis",
    ),
)
    
res = s.ap_is.cemst(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->