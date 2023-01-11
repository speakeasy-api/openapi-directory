<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ErcerRequest(
    security=operations.ErcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.ErcerRequestBody(
        certificate_parameters=operations.ErcerRequestBodyCertificateParameters(
            full_name="vero",
            registration="eius",
        ),
        consent_artifact="veniam",
        format="pdf",
        txn_id="et",
    ),
)
    
res = s.ap_is.ercer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->