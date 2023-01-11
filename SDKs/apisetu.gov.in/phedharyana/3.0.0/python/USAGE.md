<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.EtcerRequest(
    security=operations.EtcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.EtcerRequestBody(
        certificate_parameters=operations.EtcerRequestBodyCertificateParameters(
            unique_code="incidunt",
        ),
        consent_artifact="qui",
        format="pdf",
        txn_id="reprehenderit",
    ),
)
    
res = s.ap_is.etcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->