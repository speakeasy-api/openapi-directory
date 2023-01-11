<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.MrcerRequest(
    security=operations.MrcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.MrcerRequestBody(
        certificate_parameters=operations.MrcerRequestBodyCertificateParameters(
            cert_type="et",
            full_name="neque",
            rroll="autem",
        ),
        consent_artifact="optio",
        format="pdf",
        txn_id="blanditiis",
    ),
)
    
res = s.ap_is.mrcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->