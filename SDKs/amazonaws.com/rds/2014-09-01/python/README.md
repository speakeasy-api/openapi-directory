# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/rds/2014-09-01/python
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


req = operations.GETAddSourceIdentifierToSubscriptionRequest(
    action="AddSourceIdentifierToSubscription",
    source_identifier="corrupti",
    subscription_name="provident",
    version="2014-09-01",
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
)
    
res = s.get_add_source_identifier_to_subscription(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `get_add_source_identifier_to_subscription`
* `get_authorize_db_security_group_ingress`
* `get_delete_db_instance`
* `get_delete_db_parameter_group`
* `get_delete_db_security_group`
* `get_delete_db_snapshot`
* `get_delete_db_subnet_group`
* `get_delete_event_subscription`
* `get_delete_option_group`
* `get_download_db_log_file_portion`
* `get_modify_db_instance`
* `get_modify_db_subnet_group`
* `get_modify_event_subscription`
* `get_promote_read_replica`
* `get_reboot_db_instance`
* `get_remove_source_identifier_from_subscription`
* `get_remove_tags_from_resource`
* `get_revoke_db_security_group_ingress`
* `post_add_source_identifier_to_subscription`
* `post_add_tags_to_resource`
* `post_authorize_db_security_group_ingress`
* `post_copy_db_parameter_group`
* `post_copy_db_snapshot`
* `post_copy_option_group`
* `post_create_db_instance`
* `post_create_db_instance_read_replica`
* `post_create_db_parameter_group`
* `post_create_db_security_group`
* `post_create_db_snapshot`
* `post_create_db_subnet_group`
* `post_create_event_subscription`
* `post_create_option_group`
* `post_delete_db_instance`
* `post_delete_db_parameter_group`
* `post_delete_db_security_group`
* `post_delete_db_snapshot`
* `post_delete_db_subnet_group`
* `post_delete_event_subscription`
* `post_delete_option_group`
* `post_describe_db_engine_versions`
* `post_describe_db_instances`
* `post_describe_db_log_files`
* `post_describe_db_parameter_groups`
* `post_describe_db_parameters`
* `post_describe_db_security_groups`
* `post_describe_db_snapshots`
* `post_describe_db_subnet_groups`
* `post_describe_engine_default_parameters`
* `post_describe_event_categories`
* `post_describe_event_subscriptions`
* `post_describe_events`
* `post_describe_option_group_options`
* `post_describe_option_groups`
* `post_describe_orderable_db_instance_options`
* `post_describe_reserved_db_instances`
* `post_describe_reserved_db_instances_offerings`
* `post_download_db_log_file_portion`
* `post_list_tags_for_resource`
* `post_modify_db_instance`
* `post_modify_db_parameter_group`
* `post_modify_db_subnet_group`
* `post_modify_event_subscription`
* `post_modify_option_group`
* `post_promote_read_replica`
* `post_purchase_reserved_db_instances_offering`
* `post_reboot_db_instance`
* `post_remove_source_identifier_from_subscription`
* `post_remove_tags_from_resource`
* `post_reset_db_parameter_group`
* `post_restore_db_instance_from_db_snapshot`
* `post_restore_db_instance_to_point_in_time`
* `post_revoke_db_security_group_ingress`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
