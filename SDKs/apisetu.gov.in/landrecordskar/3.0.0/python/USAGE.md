<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CncerRequest(
    security=operations.CncerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.CncerRequestBody(
        certificate_parameters=operations.CncerRequestBodyCertificateParameters(
            document_number="qui",
        ),
        consent_artifact="quis",
        format="xml",
        txn_id="et",
    ),
)
    
res = s.ap_is.cncer(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->