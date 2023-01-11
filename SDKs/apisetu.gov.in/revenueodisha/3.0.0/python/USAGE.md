<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.RdcerRequest(
    security=operations.RdcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.RdcerRequestBody(
        certificate_parameters=operations.RdcerRequestBodyCertificateParameters(
            dob="ut",
            full_name="molestiae",
            regdno="rem",
            uid="totam",
        ),
        consent_artifact="culpa",
        format="pdf",
        txn_id="eos",
    ),
)
    
res = s.ap_is.rdcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->