# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/rbin/2021-06-15/python
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


req = operations.CreateRuleRequest(
    request_body=operations.CreateRuleRequestBody(
        description="corrupti",
        lock_configuration=operations.CreateRuleRequestBodyLockConfiguration(
            unlock_delay=shared.UnlockDelay(
                unlock_delay_unit="DAYS",
                unlock_delay_value=592845,
            ),
        ),
        resource_tags=[
            shared.ResourceTag(
                resource_tag_key="quibusdam",
                resource_tag_value="unde",
            ),
            shared.ResourceTag(
                resource_tag_key="nulla",
                resource_tag_value="corrupti",
            ),
            shared.ResourceTag(
                resource_tag_key="illum",
                resource_tag_value="vel",
            ),
        ],
        resource_type="EC2_IMAGE",
        retention_period=operations.CreateRuleRequestBodyRetentionPeriod(
            retention_period_unit="DAYS",
            retention_period_value=645894,
        ),
        tags=[
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
)
    
res = s.create_rule(req)

if res.create_rule_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_rule` - Creates a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-create-rule"> Create Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
* `delete_rule` - Deletes a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-delete-rule"> Delete Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
* `get_rule` - Gets information about a Recycle Bin retention rule.
* `list_rules` - Lists the Recycle Bin retention rules in the Region.
* `list_tags_for_resource` - Lists the tags assigned to a retention rule.
* `lock_rule` - Locks a retention rule. A locked retention rule can't be modified or deleted.
* `tag_resource` - Assigns tags to the specified retention rule.
* `unlock_rule` - Unlocks a retention rule. After a retention rule is unlocked, it can be modified or deleted only after the unlock delay period expires.
* `untag_resource` - Unassigns a tag from a retention rule.
* `update_rule` - Updates an existing Recycle Bin retention rule. You can update a retention rule's description, resource tags, and retention period at any time after creation. You can't update a retention rule's resource type after creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-update-rule"> Update Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
