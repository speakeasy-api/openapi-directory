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
    
req = operations.CreateCapacityProviderRequest(
    headers=operations.CreateCapacityProviderHeaders(
        x_amz_algorithm="praesentium",
        x_amz_content_sha256="voluptates",
        x_amz_credential="inventore",
        x_amz_date="voluptatem",
        x_amz_security_token="deleniti",
        x_amz_signature="facere",
        x_amz_signed_headers="numquam",
        x_amz_target="AmazonEC2ContainerServiceV20141113.CreateCapacityProvider",
    ),
    request=shared.CreateCapacityProviderRequest(
        auto_scaling_group_provider=shared.AutoScalingGroupProvider(
            auto_scaling_group_arn="explicabo",
            managed_scaling=shared.ManagedScaling(
                instance_warmup_period=6635728551378606624,
                maximum_scaling_step_size=5973617793068578508,
                minimum_scaling_step_size=8160591596675653275,
                status="DISABLED",
                target_capacity=7028752311702887101,
            ),
            managed_termination_protection="ENABLED",
        ),
        name="qui",
        tags=[
            shared.Tag(
                key="qui",
                value="et",
            ),
            shared.Tag(
                key="aliquid",
                value="repellendus",
            ),
        ],
    ),
)
    
res = s.create_capacity_provider(req)

if res.create_capacity_provider_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->