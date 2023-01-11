<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.RdcerRequest(
    security=operations.RdcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.RdcerRequestBody(
        certificate_parameters=operations.RdcerRequestBodyCertificateParameters(
            full_name="qui",
            uid="optio",
            final_doc_reg_no="et",
        ),
        consent_artifact="assumenda",
        format="pdf",
        txn_id="omnis",
    ),
)
    
res = s.ap_is.rdcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->