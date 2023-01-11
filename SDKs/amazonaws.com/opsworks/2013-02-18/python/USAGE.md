<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AssignInstanceRequest(
    headers=operations.AssignInstanceHeaders(
        x_amz_algorithm="vel",
        x_amz_content_sha256="itaque",
        x_amz_credential="ut",
        x_amz_date="ut",
        x_amz_security_token="unde",
        x_amz_signature="aut",
        x_amz_signed_headers="fuga",
        x_amz_target="OpsWorks_20130218.AssignInstance",
    ),
    request=shared.AssignInstanceRequest(
        instance_id="repellendus",
        layer_ids=[
            "repudiandae",
            "voluptates",
        ],
    ),
)
    
res = s.assign_instance(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->