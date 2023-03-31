# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/cloud9/2017-09-23/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_environment_ec2` - Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.
* `create_environment_membership` - Adds an environment member to an Cloud9 development environment.
* `delete_environment` - Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.
* `delete_environment_membership` - Deletes an environment member from a development environment.
* `describe_environment_memberships` - Gets information about environment members for an Cloud9 development environment.
* `describe_environment_status` - Gets status information for an Cloud9 development environment.
* `describe_environments` - Gets information about Cloud9 development environments.
* `list_environments` - Gets a list of Cloud9 development environment identifiers.
* `list_tags_for_resource` - Gets a list of the tags associated with an Cloud9 development environment.
* `tag_resource` - <p>Adds tags to an Cloud9 development environment.</p> <important> <p>Tags that you add to an Cloud9 environment by using this method will NOT be automatically propagated to underlying resources.</p> </important>
* `untag_resource` - Removes tags from an Cloud9 development environment.
* `update_environment` - Changes the settings of an existing Cloud9 development environment.
* `update_environment_membership` - Changes the settings of an existing environment member for an Cloud9 development environment.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
