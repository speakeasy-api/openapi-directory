<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.HvcerRequest(
    security=operations.HvcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.HvcerRequestBody(
        certificate_parameters=operations.HvcerRequestBodyCertificateParameters(
            dob="tempora",
            full_name="sed",
            roll="recusandae",
            yop="magnam",
        ),
        consent_artifact="et",
        format="pdf",
        txn_id="labore",
    ),
)
    
res = s.ap_is.hvcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->