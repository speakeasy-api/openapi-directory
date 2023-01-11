<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.LlcerRequest(
    security=operations.LlcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.LlcerRequestBody(
        certificate_parameters=operations.LlcerRequestBodyCertificateParameters(
            udf1="ex",
            udf2="ad",
            udf3="dolorum",
        ),
        consent_artifact="voluptatem",
        format="pdf",
        txn_id="laborum",
    ),
)
    
res = s.ap_is.llcer(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->