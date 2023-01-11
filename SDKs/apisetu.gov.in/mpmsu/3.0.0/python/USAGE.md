<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.MicerRequest(
    security=operations.MicerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.MicerRequestBody(
        certificate_parameters=operations.MicerRequestBodyCertificateParameters(
            appno="sapiente",
            date_of_birth="iure",
            enrolno="assumenda",
            rollno="dolore",
        ),
        consent_artifact="nobis",
        format="pdf",
        txn_id="qui",
    ),
)
    
res = s.ap_is.micer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->