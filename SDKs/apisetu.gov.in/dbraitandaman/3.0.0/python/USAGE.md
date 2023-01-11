<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.TrcerRequest(
    security=operations.TrcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.TrcerRequestBody(
        certificate_parameters=operations.TrcerRequestBodyCertificateParameters(
            cert_no="nemo",
            dob="voluptatum",
            full_name="quibusdam",
            session="eos",
        ),
        consent_artifact="quae",
        format="pdf",
        txn_id="libero",
    ),
)
    
res = s.ap_is.trcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->