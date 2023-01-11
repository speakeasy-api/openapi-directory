<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.KecerRequest(
    security=operations.KecerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.KecerRequestBody(
        certificate_parameters=operations.KecerRequestBodyCertificateParameters(
            document_number="ut",
        ),
        consent_artifact="praesentium",
        format="pdf",
        txn_id="vel",
    ),
)
    
res = s.ap_is.kecer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->