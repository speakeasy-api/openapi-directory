<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CmcerRequest(
    security=operations.CmcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.CmcerRequestBody(
        certificate_parameters=operations.CmcerRequestBodyCertificateParameters(
            aplno="architecto",
            certno="ea",
            sccd="et",
        ),
        consent_artifact="soluta",
        format="pdf",
        txn_id="ea",
    ),
)
    
res = s.ap_is.cmcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->