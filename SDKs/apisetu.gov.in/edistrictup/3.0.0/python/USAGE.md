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
            application_no="illo",
            certificate_id="molestias",
        ),
        consent_artifact="et",
        format="xml",
        txn_id="officia",
    ),
)
    
res = s.ap_is.btcer(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->