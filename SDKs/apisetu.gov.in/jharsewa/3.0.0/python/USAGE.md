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
            ref_no="et",
            token_no="quas",
        ),
        consent_artifact="odio",
        format="pdf",
        txn_id="earum",
    ),
)
    
res = s.ap_is.btcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->