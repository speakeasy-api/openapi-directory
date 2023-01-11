<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SslcrRequest(
    security=operations.SslcrSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.SslcrRequestBody(
        certificate_parameters=operations.SslcrRequestBodyCertificateParameters(
            dob="enim",
            full_name="minima",
            uid="incidunt",
            regno="excepturi",
            year="autem",
        ),
        consent_artifact="similique",
        format="pdf",
        txn_id="soluta",
    ),
)
    
res = s.ap_is.sslcr(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->