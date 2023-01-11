<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.OtcerRequest(
    security=operations.OtcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.OtcerRequestBody(
        certificate_parameters=operations.OtcerRequestBodyCertificateParameters(
            dob="voluptates",
            full_name="sit",
            uid="aut",
        ),
        consent_artifact="et",
        format="pdf",
        txn_id="fuga",
    ),
)
    
res = s.ap_is.otcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->