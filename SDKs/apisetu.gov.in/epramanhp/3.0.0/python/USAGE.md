<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AgcerRequest(
    security=operations.AgcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.AgcerRequestBody(
        certificate_parameters=operations.AgcerRequestBodyCertificateParameters(
            name="ullam",
            ref_no="est",
        ),
        consent_artifact="eos",
        format="pdf",
        txn_id="minus",
    ),
)
    
res = s.ap_is.agcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->