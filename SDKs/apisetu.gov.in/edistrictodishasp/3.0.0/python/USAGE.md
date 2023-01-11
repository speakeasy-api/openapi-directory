<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.EgcerRequest(
    security=operations.EgcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.EgcerRequestBody(
        certificate_parameters=operations.EgcerRequestBodyCertificateParameters(
            full_name="qui",
            ref_no="voluptatibus",
            token_no="nulla",
            uid="quia",
        ),
        consent_artifact="dolorem",
        format="pdf",
        txn_id="quis",
    ),
)
    
res = s.ap_is.egcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->