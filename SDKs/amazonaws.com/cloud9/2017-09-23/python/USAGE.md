<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateEnvironmentEc2Request(
    create_environment_ec2_request=shared.CreateEnvironmentEc2Request(
        automatic_stop_time_minutes=548814,
        client_request_token="provident",
        connection_type="CONNECT_SSM",
        description="quibusdam",
        dry_run=False,
        image_id="unde",
        instance_type="nulla",
        name="corrupti",
        owner_arn="illum",
        subnet_id="vel",
        tags=[
            shared.Tag(
                key="deserunt",
                value="suscipit",
            ),
            shared.Tag(
                key="iure",
                value="magnam",
            ),
            shared.Tag(
                key="debitis",
                value="ipsa",
            ),
        ],
    ),
    x_amz_algorithm="delectus",
    x_amz_content_sha256="tempora",
    x_amz_credential="suscipit",
    x_amz_date="molestiae",
    x_amz_security_token="minus",
    x_amz_signature="placeat",
    x_amz_signed_headers="voluptatum",
    x_amz_target="AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2",
)
    
res = s.create_environment_ec2(req)

if res.create_environment_ec2_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->