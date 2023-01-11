<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.HscerRequest(
    security=operations.HscerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.HscerRequestBody(
        certificate_parameters=operations.HscerRequestBodyCertificateParameters(
            certificate_type="et",
            dob="eaque",
            full_name="veritatis",
            rroll="id",
            month="optio",
            year="inventore",
        ),
        consent_artifact="illo",
        format="pdf",
        txn_id="culpa",
    ),
)
    
res = s.ap_is.hscer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->