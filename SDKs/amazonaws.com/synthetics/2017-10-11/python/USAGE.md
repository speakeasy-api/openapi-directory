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
    
req = operations.CreateCanaryRequest(
    headers=operations.CreateCanaryHeaders(
        x_amz_algorithm="dolore",
        x_amz_content_sha256="animi",
        x_amz_credential="odio",
        x_amz_date="officia",
        x_amz_security_token="odio",
        x_amz_signature="est",
        x_amz_signed_headers="sunt",
    ),
    request=operations.CreateCanaryRequestBody(
        artifact_s3_location="corrupti",
        code=operations.CreateCanaryRequestBodyCode(
            handler="perspiciatis",
            s3_bucket="accusamus",
            s3_key="iusto",
            s3_version="aut",
            zip_file="illo",
        ),
        execution_role_arn="molestiae",
        failure_retention_period_in_days=8359892027431733351,
        name="aliquid",
        run_config=operations.CreateCanaryRequestBodyRunConfig(
            active_tracing=True,
            environment_variables={
                "non": "dicta",
            },
            memory_in_mb=2347781137780074665,
            timeout_in_seconds=5418904646391934224,
        ),
        runtime_version="inventore",
        schedule=operations.CreateCanaryRequestBodySchedule(
            duration_in_seconds=6457110019065774024,
            expression="voluptatibus",
        ),
        success_retention_period_in_days=6642582187036167272,
        tags={
            "perferendis": "impedit",
        },
        vpc_config=operations.CreateCanaryRequestBodyVpcConfig(
            security_group_ids=[
                "sunt",
                "in",
            ],
            subnet_ids=[
                "laudantium",
                "reiciendis",
            ],
        ),
    ),
)
    
res = s.create_canary(req)

if res.create_canary_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->