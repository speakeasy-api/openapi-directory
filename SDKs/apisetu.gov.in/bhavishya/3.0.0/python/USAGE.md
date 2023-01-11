<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PecerRequest(
    security=operations.PecerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.PecerRequestBody(
        certificate_parameters=operations.PecerRequestBodyCertificateParameters(
            dob="aliquid",
            full_name="consequuntur",
            gender="rerum",
            pan="officiis",
            ppo="corporis",
        ),
        consent_artifact="et",
        format="pdf",
        txn_id="numquam",
    ),
)
    
res = s.ap_is.pecer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->