# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_app` -  Creates a new Amplify app. 
* `create_backend_environment` -  Creates a new backend environment for an Amplify app. 
* `create_branch` -  Creates a new branch for an Amplify app. 
* `create_deployment` -  Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a repository. 
* `create_domain_association` -  Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app 
* `create_webhook` -  Creates a new webhook on an Amplify app. 
* `delete_app` -  Deletes an existing Amplify app specified by an app ID. 
* `delete_backend_environment` -  Deletes a backend environment for an Amplify app. 
* `delete_branch` -  Deletes a branch for an Amplify app. 
* `delete_domain_association` -  Deletes a domain association for an Amplify app. 
* `delete_job` -  Deletes a job for a branch of an Amplify app. 
* `delete_webhook` -  Deletes a webhook. 
* `generate_access_logs` -  Returns the website access logs for a specific time range using a presigned URL. 
* `get_app` -  Returns an existing Amplify app by appID. 
* `get_artifact_url` -  Returns the artifact info that corresponds to an artifact id. 
* `get_backend_environment` -  Returns a backend environment for an Amplify app. 
* `get_branch` -  Returns a branch for an Amplify app. 
* `get_domain_association` -  Returns the domain information for an Amplify app. 
* `get_job` -  Returns a job for a branch of an Amplify app. 
* `get_webhook` -  Returns the webhook information that corresponds to a specified webhook ID. 
* `list_apps` -  Returns a list of the existing Amplify apps. 
* `list_artifacts` -  Returns a list of artifacts for a specified app, branch, and job. 
* `list_backend_environments` -  Lists the backend environments for an Amplify app. 
* `list_branches` -  Lists the branches of an Amplify app. 
* `list_domain_associations` -  Returns the domain associations for an Amplify app. 
* `list_jobs` -  Lists the jobs for a branch of an Amplify app. 
* `list_tags_for_resource` -  Returns a list of tags for a specified Amazon Resource Name (ARN). 
* `list_webhooks` -  Returns a list of webhooks for an Amplify app. 
* `start_deployment` -  Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a repository. 
* `start_job` -  Starts a new job for a branch of an Amplify app. 
* `stop_job` -  Stops a job that is in progress for a branch of an Amplify app. 
* `tag_resource` -  Tags the resource with a tag key and value. 
* `untag_resource` -  Untags a resource with a specified Amazon Resource Name (ARN). 
* `update_app` -  Updates an existing Amplify app. 
* `update_branch` -  Updates a branch for an Amplify app. 
* `update_domain_association` -  Creates a new domain association for an Amplify app.
* `update_webhook` -  Updates a webhook. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
