<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.DeleteScalingPolicyRequest(
    delete_scaling_policy_request=shared.DeleteScalingPolicyRequest(
        policy_name="corrupti",
        resource_id="provident",
        scalable_dimension="cassandra:table:ReadCapacityUnits",
        service_namespace="kafka",
    ),
    x_amz_algorithm="unde",
    x_amz_content_sha256="nulla",
    x_amz_credential="corrupti",
    x_amz_date="illum",
    x_amz_security_token="vel",
    x_amz_signature="error",
    x_amz_signed_headers="deserunt",
    x_amz_target="AnyScaleFrontendService.DeleteScalingPolicy",
)
    
res = s.delete_scaling_policy(req)

if res.delete_scaling_policy_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->