<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DpcerRequest(
    security=operations.DpcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.DpcerRequestBody(
        certificate_parameters=operations.DpcerRequestBodyCertificateParameters(
            full_name="qui",
            uid="maiores",
            cert_no="ipsam",
        ),
        consent_artifact="non",
        format="pdf",
        txn_id="veritatis",
    ),
)
    
res = s.ap_is.dpcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->