<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AlsfcRequest(
    security=operations.AlsfcSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.AlsfcRequestBody(
        certificate_parameters=operations.AlsfcRequestBodyCertificateParameters(
            uid="et",
            lino="voluptas",
        ),
        consent_artifact="et",
        format="pdf",
        txn_id="consequatur",
    ),
)
    
res = s.ap_is.alsfc(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->