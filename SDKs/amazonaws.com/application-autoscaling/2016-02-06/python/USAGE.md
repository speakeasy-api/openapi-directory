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
    
req = operations.DeleteScalingPolicyRequest(
    headers=operations.DeleteScalingPolicyHeaders(
        x_amz_algorithm="vitae",
        x_amz_content_sha256="fugit",
        x_amz_credential="non",
        x_amz_date="aut",
        x_amz_security_token="autem",
        x_amz_signature="dolores",
        x_amz_signed_headers="aperiam",
        x_amz_target="AnyScaleFrontendService.DeleteScalingPolicy",
    ),
    request=shared.DeleteScalingPolicyRequest(
        policy_name="culpa",
        resource_id="quaerat",
        scalable_dimension="rds:cluster:ReadReplicaCount",
        service_namespace="custom-resource",
    ),
)
    
res = s.delete_scaling_policy(req)

if res.delete_scaling_policy_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->