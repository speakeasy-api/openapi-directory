<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ChcerRequest(
    security=operations.ChcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.ChcerRequestBody(
        certificate_parameters=operations.ChcerRequestBodyCertificateParameters(
            full_name="nam",
            ref_no="fugiat",
            token_no="qui",
        ),
        consent_artifact="nesciunt",
        format="pdf",
        txn_id="in",
    ),
)
    
res = s.ap_is.chcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->