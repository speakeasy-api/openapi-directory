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
            dob="quam",
            full_name="rerum",
            regno="dolores",
        ),
        consent_artifact="consequatur",
        format="pdf",
        txn_id="culpa",
    ),
)
    
res = s.ap_is.govid(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->