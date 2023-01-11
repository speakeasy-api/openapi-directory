<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PmjayRequest(
    security=operations.PmjaySecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.PmjayRequestBody(
        certificate_parameters=operations.PmjayRequestBodyCertificateParameters(
            dob="enim",
            full_name="aliquid",
            udf1="et",
            udf2="et",
        ),
        consent_artifact="quia",
        format="pdf",
        txn_id="maiores",
    ),
)
    
res = s.ap_is.pmjay(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->