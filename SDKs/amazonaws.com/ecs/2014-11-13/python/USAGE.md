<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateCapacityProviderRequest(
    create_capacity_provider_request=shared.CreateCapacityProviderRequest(
        auto_scaling_group_provider=shared.AutoScalingGroupProvider(
            auto_scaling_group_arn="corrupti",
            managed_scaling=shared.ManagedScaling(
                instance_warmup_period=592845,
                maximum_scaling_step_size=715190,
                minimum_scaling_step_size=844266,
                status="DISABLED",
                target_capacity=857946,
            ),
            managed_termination_protection="DISABLED",
        ),
        name="illum",
        tags=[
            shared.Tag(
                key="error",
                value="deserunt",
            ),
            shared.Tag(
                key="suscipit",
                value="iure",
            ),
        ],
    ),
    x_amz_algorithm="magnam",
    x_amz_content_sha256="debitis",
    x_amz_credential="ipsa",
    x_amz_date="delectus",
    x_amz_security_token="tempora",
    x_amz_signature="suscipit",
    x_amz_signed_headers="molestiae",
    x_amz_target="AmazonEC2ContainerServiceV20141113.CreateCapacityProvider",
)
    
res = s.create_capacity_provider(req)

if res.create_capacity_provider_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->