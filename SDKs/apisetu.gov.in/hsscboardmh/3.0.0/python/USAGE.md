<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.HpcerRequest(
    security=operations.HpcerSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
        client_id=shared.SchemeClientID(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.HpcerRequestBody(
        certificate_parameters=operations.HpcerRequestBodyCertificateParameters(
            full_name="et",
            exsession="est",
            rollnumber="repellendus",
            totalmarks="consequatur",
            year="laudantium",
        ),
        consent_artifact="voluptatibus",
        format="xml",
        txn_id="repudiandae",
    ),
)
    
res = s.ap_is.hpcer(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->