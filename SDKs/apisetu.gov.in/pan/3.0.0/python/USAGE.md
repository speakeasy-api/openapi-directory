<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PancrRequest(
    security=operations.PancrSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.PancrRequestBody(
        certificate_parameters=operations.PancrRequestBodyCertificateParameters(
            dob="sint",
            full_name="cumque",
            gender="ut",
            pan_full_name="nam",
            uid="a",
            panno="sed",
        ),
        consent_artifact="sint",
        format="xml",
        txn_id="impedit",
    ),
)
    
res = s.ap_is.pancr(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->