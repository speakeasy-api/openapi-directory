# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/amp/2020-08-01/python
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


req = operations.CreateAlertManagerDefinitionRequest(
    request_body=operations.CreateAlertManagerDefinitionRequestBody(
        client_token="corrupti",
        data="provident",
    ),
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
    workspace_id="error",
)
    
res = s.create_alert_manager_definition(req)

if res.create_alert_manager_definition_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_alert_manager_definition` - Create an alert manager definition.
* `create_logging_configuration` - Create logging configuration.
* `create_rule_groups_namespace` - Create a rule group namespace.
* `create_workspace` - Creates a new AMP workspace.
* `delete_alert_manager_definition` - Deletes an alert manager definition.
* `delete_logging_configuration` - Delete logging configuration.
* `delete_rule_groups_namespace` - Delete a rule groups namespace.
* `delete_workspace` - Deletes an AMP workspace.
* `describe_alert_manager_definition` - Describes an alert manager definition.
* `describe_logging_configuration` - Describes logging configuration.
* `describe_rule_groups_namespace` - Describe a rule groups namespace.
* `describe_workspace` - Describes an existing AMP workspace.
* `list_rule_groups_namespaces` - Lists rule groups namespaces.
* `list_tags_for_resource` - Lists the tags you have assigned to the resource.
* `list_workspaces` - Lists all AMP workspaces, including workspaces being created or deleted.
* `put_alert_manager_definition` - Update an alert manager definition.
* `put_rule_groups_namespace` - Update a rule groups namespace.
* `tag_resource` - Creates tags for the specified resource.
* `untag_resource` - Deletes tags from the specified resource.
* `update_logging_configuration` - Update logging configuration.
* `update_workspace_alias` - Updates an AMP workspace alias.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
