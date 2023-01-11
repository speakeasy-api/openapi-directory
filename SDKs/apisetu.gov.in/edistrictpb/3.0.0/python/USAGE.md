<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.BtcerRequest(
    security=operations.BtcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.BtcerRequestBody(
        certificate_parameters=operations.BtcerRequestBodyCertificateParameters(
            dob="tenetur",
            registration_id="non",
        ),
        consent_artifact="ut",
        format="pdf",
        txn_id="doloribus",
    ),
)
    
res = s.ap_is.btcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->