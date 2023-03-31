# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/bluemix.net/containers/3.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetContainersMessagesRequest(
    x_auth_project_id="corrupti",
    x_auth_token="provident",
)
    
res = s.api_info.get_containers_messages(req)

if res.get_containers_messages_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### api_info

* `get_containers_messages` - List messages for the user
* `get_containers_version` - List latest API version

### authentication

* `get_tlskey` - Retrieve the TLS Certificate
* `put_tlskey_refresh` - Refresh the TLS Certificate

### container_groups

* `delete_containers_groups_name_or_id_` - Stop and delete all container instances in a container group.
* `get_containers_groups` - List all container groups in a space
* `get_containers_groups_name_or_id_` - Inspect a container group.
* `patch_containers_groups_name_or_id_` - Update a container group.
* `post_containers_groups` - Create and start a container group.
* `post_containers_groups_name_or_id_maproute` - Map a public route to a container group.
* `post_containers_groups_name_or_id_unmaproute` - Unmap a public route from a container group

### file_shares

* `delete_volumes_fs_name_` - Delete a file share
* `get_volumes_fs_flavors_json` - List available file share sizes
* `get_volumes_fs_json` - List available file shares in a space
* `get_volumes_fs_name_json` - Inspect a file share
* `post_volumes_fs_create` - Create a file share in a space

### images

* `delete_images_id_` - Remove a Docker image.
* `get_images_json` - List all Docker images that are available in your private Bluemix registry.
* `get_images_name_or_id_json` - Inspect a Docker image in private Bluemix registry
* `post_build` - Build a Docker image from a Dockerfile

### private_docker_images_registry

* `get_registry_namespaces` - Retrieve the namespace of an organization.
* `get_registry_namespaces_namespace_` - Check the availability of a namespace
* `put_registry_namespaces_namespace_` - Set a namespace for your private Bluemix registry.

### public_ip_addresses

* `get_containers_floating_ips` - List available public IP addresses in a space
* `post_containers_floating_ips_request` - Request a public IP address for a space
* `post_containers_floating_ips_ip_release` - Release public IP address
* `post_containers_name_or_id_floating_ips_ip_bind` - Bind a public IP address to a single container
* `post_containers_name_or_id_floating_ips_ip_unbind` - Unbind a public IP address from a container

### quota

* `get_containers_quota` - Retrieve organization and space specific quota
* `get_containers_usage` - List container sizes and quota limits
* `put_containers_quota` - Update space quota

### single_containers

* `delete_containers_name_or_id_` - Remove a single container
* `get_containers_json` - List single containers in a space.
* `get_containers_id_status` - List the current state of a container.
* `get_containers_name_or_id_json` - Inspect a single container
* `post_containers_create` - Create and start a single container
* `post_containers_name_or_id_pause` - Pause a single container
* `post_containers_name_or_id_rename` - Rename a single container
* `post_containers_name_or_id_restart` - Restart a single container
* `post_containers_name_or_id_start` - Start a single container
* `post_containers_name_or_id_stop` - Stop a single container
* `post_containers_name_or_id_unpause` - Unpause a single container

### volumes

* `delete_volumes_name_` - Delete a volume
* `get_volumes_json` - List all volumes for a space
* `get_volumes_name_json` - Retrieve detailed information about a volume. 
* `post_volumes_create` - Create a volume in a space
* `post_volumes_name_` - Share a volume with another space
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
