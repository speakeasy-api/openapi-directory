<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.IncerRequest(
    security=operations.IncerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.IncerRequestBody(
        certificate_parameters=operations.IncerRequestBodyCertificateParameters(
            appno="error",
            certno="nulla",
        ),
        consent_artifact="quis",
        format="pdf",
        txn_id="ratione",
    ),
)
    
res = s.ap_is.incer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->