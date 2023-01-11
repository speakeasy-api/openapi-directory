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
    
req = operations.CreateAppRequest(
    headers=operations.CreateAppHeaders(
        x_amz_algorithm="est",
        x_amz_content_sha256="id",
        x_amz_credential="ipsum",
        x_amz_date="aut",
        x_amz_security_token="perspiciatis",
        x_amz_signature="et",
        x_amz_signed_headers="vero",
    ),
    request=operations.CreateAppRequestBody(
        access_token="voluptatem",
        auto_branch_creation_config=operations.CreateAppRequestBodyAutoBranchCreationConfig(
            basic_auth_credentials="ex",
            build_spec="magni",
            enable_auto_build=True,
            enable_basic_auth=True,
            enable_performance_mode=False,
            enable_pull_request_preview=False,
            environment_variables={
                "non": "nam",
                "beatae": "quae",
                "qui": "magni",
            },
            framework="minus",
            pull_request_environment_name="sit",
            stage="BETA",
        ),
        auto_branch_creation_patterns=[
            "iusto",
        ],
        basic_auth_credentials="quia",
        build_spec="repudiandae",
        custom_headers="debitis",
        custom_rules=[
            shared.CustomRule(
                condition="odit",
                source="enim",
                status="ut",
                target="non",
            ),
        ],
        description="nihil",
        enable_auto_branch_creation=False,
        enable_basic_auth=True,
        enable_branch_auto_build=True,
        enable_branch_auto_deletion=False,
        environment_variables={
            "perferendis": "id",
            "autem": "hic",
            "voluptatem": "omnis",
        },
        iam_service_role_arn="libero",
        name="qui",
        oauth_token="omnis",
        platform="WEB",
        repository="nostrum",
        tags={
            "sit": "repellat",
            "quo": "dolorum",
        },
    ),
)
    
res = s.create_app(req)

if res.create_app_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->