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
    
req = operations.CreateEnvironmentEc2Request(
    headers=operations.CreateEnvironmentEc2Headers(
        x_amz_algorithm="cupiditate",
        x_amz_content_sha256="omnis",
        x_amz_credential="iste",
        x_amz_date="unde",
        x_amz_security_token="adipisci",
        x_amz_signature="impedit",
        x_amz_signed_headers="tempora",
        x_amz_target="AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2",
    ),
    request=shared.CreateEnvironmentEc2Request(
        automatic_stop_time_minutes=3876518618080918046,
        client_request_token="corrupti",
        connection_type="CONNECT_SSM",
        description="cum",
        dry_run=False,
        image_id="ea",
        instance_type="architecto",
        name="esse",
        owner_arn="explicabo",
        subnet_id="distinctio",
        tags=[
            shared.Tag(
                key="non",
                value="accusantium",
            ),
            shared.Tag(
                key="ut",
                value="consequatur",
            ),
        ],
    ),
)
    
res = s.create_environment_ec2(req)

if res.create_environment_ec2_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->