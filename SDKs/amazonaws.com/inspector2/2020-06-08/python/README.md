# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/inspector2/2020-06-08/python
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


req = operations.AssociateMemberRequest(
    request_body=operations.AssociateMemberRequestBody(
        account_id="corrupti",
    ),
    x_amz_algorithm="provident",
    x_amz_content_sha256="distinctio",
    x_amz_credential="quibusdam",
    x_amz_date="unde",
    x_amz_security_token="nulla",
    x_amz_signature="corrupti",
    x_amz_signed_headers="illum",
)
    
res = s.associate_member(req)

if res.associate_member_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `associate_member` - Associates an Amazon Web Services account with an Amazon Inspector delegated administrator.
* `batch_get_account_status` - Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.
* `batch_get_free_trial_info` - Gets free trial status for multiple Amazon Web Services accounts.
* `cancel_findings_report` - Cancels the given findings report.
* `create_filter` - Creates a filter resource using specified filter criteria.
* `create_findings_report` - Creates a finding report.
* `delete_filter` - Deletes a filter resource.
* `describe_organization_configuration` - Describe Amazon Inspector configuration settings for an Amazon Web Services organization.
* `disable` - Disables Amazon Inspector scans for one or more Amazon Web Services accounts. Disabling all scan types in an account disables the Amazon Inspector service.
* `disable_delegated_admin_account` - Disables the Amazon Inspector delegated administrator for your organization.
* `disassociate_member` - Disassociates a member account from an Amazon Inspector delegated administrator.
* `enable` - Enables Amazon Inspector scans for one or more Amazon Web Services accounts.
* `enable_delegated_admin_account` - Enables the Amazon Inspector delegated administrator for your Organizations organization.
* `get_configuration` - Retrieves setting configurations for Inspector scans.
* `get_delegated_admin_account` - Retrieves information about the Amazon Inspector delegated administrator for your organization.
* `get_findings_report_status` - Gets the status of a findings report.
* `get_member` - Gets member information for your organization.
* `list_account_permissions` - Lists the permissions an account has to configure Amazon Inspector.
* `list_coverage` - Lists coverage details for you environment.
* `list_coverage_statistics` - Lists Amazon Inspector coverage statistics for your environment.
* `list_delegated_admin_accounts` - Lists information about the Amazon Inspector delegated administrator of your organization.
* `list_filters` - Lists the filters associated with your account.
* `list_finding_aggregations` - Lists aggregated finding data for your environment based on specific criteria.
* `list_findings` - Lists findings for your environment.
* `list_members` - List members associated with the Amazon Inspector delegated administrator for your organization.
* `list_tags_for_resource` - Lists all tags attached to a given resource.
* `list_usage_totals` - Lists the Amazon Inspector usage totals over the last 30 days.
* `tag_resource` - Adds tags to a resource.
* `untag_resource` - Removes tags from a resource.
* `update_configuration` - Updates setting configurations for your Amazon Inspector account. When you use this API as an Amazon Inspector delegated administrator this updates the setting for all accounts you manage. Member accounts in an organization cannot update this setting.
* `update_filter` - Specifies the action that is to be applied to the findings that match the filter.
* `update_organization_configuration` - Updates the configurations for your Amazon Inspector organization.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
