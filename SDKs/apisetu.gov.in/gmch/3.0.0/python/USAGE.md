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
            full_name="ipsum",
            reportdate="rem",
            uhid="consequuntur",
        ),
        consent_artifact="aliquam",
        format="pdf",
        txn_id="fuga",
    ),
)
    
res = s.ap_is.labrp(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->