# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContainersMessagesRequest;
import org.openapis.openapi.models.operations.GetContainersMessagesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContainersMessagesRequest req = new GetContainersMessagesRequest("corrupti", "provident");            

            GetContainersMessagesResponse res = sdk.apiInfo.getContainersMessages(req);

            if (res.getContainersMessages200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [apiInfo](docs/apiinfo/README.md)

* [getContainersMessages](docs/apiinfo/README.md#getcontainersmessages) - List messages for the user
* [getContainersVersion](docs/apiinfo/README.md#getcontainersversion) - List latest API version

### [authentication](docs/authentication/README.md)

* [getTlskey](docs/authentication/README.md#gettlskey) - Retrieve the TLS Certificate
* [putTlskeyRefresh](docs/authentication/README.md#puttlskeyrefresh) - Refresh the TLS Certificate

### [containerGroups](docs/containergroups/README.md)

* [deleteContainersGroupsNameOrId](docs/containergroups/README.md#deletecontainersgroupsnameorid) - Stop and delete all container instances in a container group.
* [getContainersGroups](docs/containergroups/README.md#getcontainersgroups) - List all container groups in a space
* [getContainersGroupsNameOrId](docs/containergroups/README.md#getcontainersgroupsnameorid) - Inspect a container group.
* [patchContainersGroupsNameOrId](docs/containergroups/README.md#patchcontainersgroupsnameorid) - Update a container group.
* [postContainersGroups](docs/containergroups/README.md#postcontainersgroups) - Create and start a container group.
* [postContainersGroupsNameOrIdMaproute](docs/containergroups/README.md#postcontainersgroupsnameoridmaproute) - Map a public route to a container group.
* [postContainersGroupsNameOrIdUnmaproute](docs/containergroups/README.md#postcontainersgroupsnameoridunmaproute) - Unmap a public route from a container group

### [fileShares](docs/fileshares/README.md)

* [deleteVolumesFsName](docs/fileshares/README.md#deletevolumesfsname) - Delete a file share
* [getVolumesFsFlavorsJson](docs/fileshares/README.md#getvolumesfsflavorsjson) - List available file share sizes
* [getVolumesFsJson](docs/fileshares/README.md#getvolumesfsjson) - List available file shares in a space
* [getVolumesFsNameJson](docs/fileshares/README.md#getvolumesfsnamejson) - Inspect a file share
* [postVolumesFsCreate](docs/fileshares/README.md#postvolumesfscreate) - Create a file share in a space

### [images](docs/images/README.md)

* [deleteImagesId](docs/images/README.md#deleteimagesid) - Remove a Docker image.
* [getImagesJson](docs/images/README.md#getimagesjson) - List all Docker images that are available in your private Bluemix registry.
* [getImagesNameOrIdJson](docs/images/README.md#getimagesnameoridjson) - Inspect a Docker image in private Bluemix registry
* [postBuild](docs/images/README.md#postbuild) - Build a Docker image from a Dockerfile

### [privateDockerImagesRegistry](docs/privatedockerimagesregistry/README.md)

* [getRegistryNamespaces](docs/privatedockerimagesregistry/README.md#getregistrynamespaces) - Retrieve the namespace of an organization.
* [getRegistryNamespacesNamespace](docs/privatedockerimagesregistry/README.md#getregistrynamespacesnamespace) - Check the availability of a namespace
* [putRegistryNamespacesNamespace](docs/privatedockerimagesregistry/README.md#putregistrynamespacesnamespace) - Set a namespace for your private Bluemix registry.

### [publicIPAddresses](docs/publicipaddresses/README.md)

* [getContainersFloatingIps](docs/publicipaddresses/README.md#getcontainersfloatingips) - List available public IP addresses in a space
* [postContainersFloatingIpsRequest](docs/publicipaddresses/README.md#postcontainersfloatingipsrequest) - Request a public IP address for a space
* [postContainersFloatingIpsIpRelease](docs/publicipaddresses/README.md#postcontainersfloatingipsiprelease) - Release public IP address
* [postContainersNameOrIdFloatingIpsIpBind](docs/publicipaddresses/README.md#postcontainersnameoridfloatingipsipbind) - Bind a public IP address to a single container
* [postContainersNameOrIdFloatingIpsIpUnbind](docs/publicipaddresses/README.md#postcontainersnameoridfloatingipsipunbind) - Unbind a public IP address from a container

### [quota](docs/quota/README.md)

* [getContainersQuota](docs/quota/README.md#getcontainersquota) - Retrieve organization and space specific quota
* [getContainersUsage](docs/quota/README.md#getcontainersusage) - List container sizes and quota limits
* [putContainersQuota](docs/quota/README.md#putcontainersquota) - Update space quota

### [singleContainers](docs/singlecontainers/README.md)

* [deleteContainersNameOrId](docs/singlecontainers/README.md#deletecontainersnameorid) - Remove a single container
* [getContainersJson](docs/singlecontainers/README.md#getcontainersjson) - List single containers in a space.
* [getContainersIdStatus](docs/singlecontainers/README.md#getcontainersidstatus) - List the current state of a container.
* [getContainersNameOrIdJson](docs/singlecontainers/README.md#getcontainersnameoridjson) - Inspect a single container
* [postContainersCreate](docs/singlecontainers/README.md#postcontainerscreate) - Create and start a single container
* [postContainersNameOrIdPause](docs/singlecontainers/README.md#postcontainersnameoridpause) - Pause a single container
* [postContainersNameOrIdRename](docs/singlecontainers/README.md#postcontainersnameoridrename) - Rename a single container
* [postContainersNameOrIdRestart](docs/singlecontainers/README.md#postcontainersnameoridrestart) - Restart a single container
* [postContainersNameOrIdStart](docs/singlecontainers/README.md#postcontainersnameoridstart) - Start a single container
* [postContainersNameOrIdStop](docs/singlecontainers/README.md#postcontainersnameoridstop) - Stop a single container
* [postContainersNameOrIdUnpause](docs/singlecontainers/README.md#postcontainersnameoridunpause) - Unpause a single container

### [volumes](docs/volumes/README.md)

* [deleteVolumesName](docs/volumes/README.md#deletevolumesname) - Delete a volume
* [getVolumesJson](docs/volumes/README.md#getvolumesjson) - List all volumes for a space
* [getVolumesNameJson](docs/volumes/README.md#getvolumesnamejson) - Retrieve detailed information about a volume. 
* [postVolumesCreate](docs/volumes/README.md#postvolumescreate) - Create a volume in a space
* [postVolumesName](docs/volumes/README.md#postvolumesname) - Share a volume with another space
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
