<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.EscerRequest(
    security=operations.EscerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.EscerRequestBody(
        certificate_parameters=operations.EscerRequestBodyCertificateParameters(
            dob="impedit",
            docid="molestiae",
            full_name="dolorem",
        ),
        consent_artifact="eligendi",
        format="pdf",
        txn_id="minus",
    ),
)
    
res = s.ap_is.escer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->