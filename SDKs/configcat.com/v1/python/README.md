# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/configcat.com/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        password="YOUR_PASSWORD_HERE",
        username="YOUR_USERNAME_HERE",
    ),
)


req = operations.GetAuditlogsRequest(
    audit_log_type="integrationLinkAdded",
    config_id="9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
    environment_id="05dfc2dd-f7cc-478c-a1ba-928fc816742c",
    from_utc_date_time="2022-02-02T00:14:45.467Z",
    product_id="39205929-396f-4ea7-996e-b10faaa2352c",
    to_utc_date_time="2022-05-24T03:24:11.703Z",
)
    
res = s.audit_logs.get_auditlogs(req)

if res.audit_log_item_models is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### audit_logs

* `get_auditlogs` - List Audit log items for Product
* `get_deleted_settings` - List Deleted Settings
* `get_organization_auditlogs` - List Audit log items for Organization

### code_references

* `post_v1_code_references`
* `post_v1_code_references_delete_reports`

### configs

* `create_config` - Create Config
* `delete_config` - Delete Config
* `get_config` - Get Config
* `get_configs` - List Configs
* `update_config` - Update Config

### environments

* `create_environment` - Create Environment
* `delete_environment` - Delete Environment
* `get_environment` - Get Environment
* `get_environments` - List Environments
* `update_environment` - Update Environment

### feature_flag_and_setting_values

* `get_setting_value` - Get value
* `get_setting_values` - Get values
* `replace_setting_value` - Replace value
* `update_setting_value` - Update value

### feature_flag_and_setting_values_using_sdk_key

* `get_setting_value_by_sdkkey` - Get value
* `replace_setting_value_by_sdkkey` - Replace value
* `update_setting_value_by_sdkkey` - Update value

### feature_flags_and_settings

* `create_setting` - Create Flag
* `delete_setting` - Delete Flag
* `get_setting` - Get Flag
* `get_settings` - List Flags
* `update_setting` - Update Flag

### integration_links

* `add_or_update_integration_link` - Add or update Integration link
* `delete_integration_link` - Delete Integration link
* `get_integration_link_details` - Get Integration link
* `jira_add_or_update_integration_link`
* `post_v1_jira_connect`

### me

* `get_me` - Get authenticated user details

### members

* `add_member_to_group` - Update Member Permissions
* `delete_organization_member` - Delete Member from Organization
* `delete_product_member` - Delete Member from Product
* `get_organization_members` - List Organization Members
* `get_product_members` - List Product Members
* `invite_member` - Invite Member

### organizations

* `get_organizations` - List Organizations

### permission_groups

* `create_permission_group` - Create Permission Group
* `delete_permission_group` - Delete Permission Group
* `get_permission_group` - Get Permission Group
* `get_permission_groups` - List Permission Groups
* `update_permission_group` - Update Permission Group

### products

* `create_product` - Create Product
* `delete_product` - Delete Product
* `get_product` - Get Product
* `get_products` - List Products
* `update_product` - Update Product

### sdk_keys

* `get_sdk_keys` - Get SDK Key

### segments

* `create_segment` - Create Segment
* `delete_segment` - Delete Segment
* `get_segment` - Get Segment
* `get_segments` - List Segments
* `update_segment` - Update Segment

### tags

* `create_tag` - Create Tag
* `delete_tag` - Delete Tag
* `get_settings_by_tag` - List Settings by Tag
* `get_tag` - Get Tag
* `get_tags` - List Tags
* `update_tag` - Update Tag
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
