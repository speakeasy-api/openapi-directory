<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssignInstanceRequest(
    assign_instance_request=shared.AssignInstanceRequest(
        instance_id="corrupti",
        layer_ids=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
    ),
    x_amz_algorithm="nulla",
    x_amz_content_sha256="corrupti",
    x_amz_credential="illum",
    x_amz_date="vel",
    x_amz_security_token="error",
    x_amz_signature="deserunt",
    x_amz_signed_headers="suscipit",
    x_amz_target="OpsWorks_20130218.AssignInstance",
)
    
res = s.assign_instance(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->