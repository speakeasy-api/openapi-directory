# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/docker.com/hub/beta/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteV2AccessTokensUUIDRequest(
    uuid="89bd9d8d-69a6-474e-8f46-7cc8796ed151",
)
    
res = s.access_tokens.delete_v2_access_tokens_uuid_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### access_tokens

* `delete_v2_access_tokens_uuid_` - Delete a personal access token
* `get_v2_access_tokens` - Get a list of personal access tokens
* `get_v2_access_tokens_uuid_` - Get a personal access token
* `patch_v2_access_tokens_uuid_` - Update a personal access token
* `post_v2_access_tokens` - Create a personal access token

### audit_logs

* `audit_logs_get_audit_actions` - Returns list of audit log actions.
* `audit_logs_get_audit_logs` - Returns list of audit log  events.

### authentication

* `post_users2_fa_login` - Second factor authentication.
* `post_users_login` - Create an authentication token

### images

* `get_namespaces_repositories_images` - Get details of repository's images
* `get_namespaces_repositories_images_summary` - Get summary of repository's images
* `get_namespaces_repositories_images_tags` - Get image's tags
* `post_namespaces_delete_images` - Delete images

### org_settings

* `get_v2_orgs_name_settings` - Get organization settings
* `put_v2_orgs_name_settings` - Update organization settings

### repositories

* `get_v2_namespaces_namespace_repositories_repository_tags` - List repository tags
* `get_v2_namespaces_namespace_repositories_repository_tags_tag_` - Read repository tag
* `head_v2_namespaces_namespace_repositories_repository_tags` - Check repository tags
* `head_v2_namespaces_namespace_repositories_repository_tags_tag_` - Check repository tag

### scim

* `get_v2_scim_2_0_resource_types` - List resource types
* `get_v2_scim_2_0_resource_types_name_` - Get a resource type
* `get_v2_scim_2_0_schemas` - List schemas
* `get_v2_scim_2_0_schemas_id_` - Get a schema
* `get_v2_scim_2_0_service_provider_config` - Get service provider config
* `get_v2_scim_2_0_users` - List users
* `get_v2_scim_2_0_users_id_` - Get a user
* `post_v2_scim_2_0_users` - Create user
* `put_v2_scim_2_0_users_id_` - Update a user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
