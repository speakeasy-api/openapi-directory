<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.LicerRequest(
    security=operations.LicerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.LicerRequestBody(
        certificate_parameters=operations.LicerRequestBodyCertificateParameters(
            dob="tempore",
            full_name="et",
            polid="odio",
            uid="at",
        ),
        consent_artifact="earum",
        format="pdf",
        txn_id="et",
    ),
)
    
res = s.ap_is.licer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->