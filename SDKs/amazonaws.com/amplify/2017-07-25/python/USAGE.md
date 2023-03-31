<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateAppRequest(
    request_body=operations.CreateAppRequestBody(
        access_token="corrupti",
        auto_branch_creation_config=operations.CreateAppRequestBodyAutoBranchCreationConfig(
            basic_auth_credentials="provident",
            build_spec="distinctio",
            enable_auto_build=False,
            enable_basic_auth=False,
            enable_performance_mode=False,
            enable_pull_request_preview=False,
            environment_variables={
                "unde": "nulla",
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
            },
            framework="iure",
            pull_request_environment_name="magnam",
            stage="PULL_REQUEST",
        ),
        auto_branch_creation_patterns=[
            "delectus",
        ],
        basic_auth_credentials="tempora",
        build_spec="suscipit",
        custom_headers="molestiae",
        custom_rules=[
            shared.CustomRule(
                condition="placeat",
                source="voluptatum",
                status="iusto",
                target="excepturi",
            ),
            shared.CustomRule(
                condition="nisi",
                source="recusandae",
                status="temporibus",
                target="ab",
            ),
            shared.CustomRule(
                condition="quis",
                source="veritatis",
                status="deserunt",
                target="perferendis",
            ),
            shared.CustomRule(
                condition="ipsam",
                source="repellendus",
                status="sapiente",
                target="quo",
            ),
        ],
        description="odit",
        enable_auto_branch_creation=False,
        enable_basic_auth=False,
        enable_branch_auto_build=False,
        enable_branch_auto_deletion=False,
        environment_variables={
            "at": "maiores",
            "molestiae": "quod",
            "quod": "esse",
            "totam": "porro",
        },
        iam_service_role_arn="dolorum",
        name="dicta",
        oauth_token="nam",
        platform="WEB_DYNAMIC",
        repository="occaecati",
        tags={
            "deleniti": "hic",
        },
    ),
    x_amz_algorithm="optio",
    x_amz_content_sha256="totam",
    x_amz_credential="beatae",
    x_amz_date="commodi",
    x_amz_security_token="molestiae",
    x_amz_signature="modi",
    x_amz_signed_headers="qui",
)
    
res = s.create_app(req)

if res.create_app_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->