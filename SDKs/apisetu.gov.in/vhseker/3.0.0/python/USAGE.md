<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.VochseRequest(
    security=operations.VochseSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.VochseRequestBody(
        certificate_parameters=operations.VochseRequestBodyCertificateParameters(
            dob="corporis",
            full_name="voluptates",
            regno="quaerat",
            year="aperiam",
            type="et",
        ),
        consent_artifact="nisi",
        format="pdf",
        txn_id="quo",
    ),
)
    
res = s.ap_is.vochse(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->