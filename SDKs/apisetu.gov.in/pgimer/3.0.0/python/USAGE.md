<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.LabrpRequest(
    security=operations.LabrpSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.LabrpRequestBody(
        certificate_parameters=operations.LabrpRequestBodyCertificateParameters(
            dob="facilis",
            full_name="cupiditate",
            gender="quas",
            mobile_no_rq="autem",
        ),
        consent_artifact="natus",
        format="pdf",
        txn_id="et",
    ),
)
    
res = s.ap_is.labrp(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->