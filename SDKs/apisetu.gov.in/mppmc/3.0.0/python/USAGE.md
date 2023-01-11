<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.SocerRequest(
    security=operations.SocerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.SocerRequestBody(
        certificate_parameters=operations.SocerRequestBodyCertificateParameters(
            appno="in",
            date_of_birth="tempora",
            enrolno="molestiae",
            typ_of_cert="aperiam",
        ),
        consent_artifact="sit",
        format="pdf",
        txn_id="iste",
    ),
)
    
res = s.ap_is.socer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->