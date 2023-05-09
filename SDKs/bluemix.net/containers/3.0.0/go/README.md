# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/bluemix.net/containers/3.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.APIInfo.GetContainersMessages(ctx, operations.GetContainersMessagesRequest{
        XAuthProjectID: "corrupti",
        XAuthToken: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContainersMessages200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [APIInfo](docs/apiinfo/README.md)

* [GetContainersMessages](docs/apiinfo/README.md#getcontainersmessages) - List messages for the user
* [GetContainersVersion](docs/apiinfo/README.md#getcontainersversion) - List latest API version

### [Authentication](docs/authentication/README.md)

* [GetTlskey](docs/authentication/README.md#gettlskey) - Retrieve the TLS Certificate
* [PutTlskeyRefresh](docs/authentication/README.md#puttlskeyrefresh) - Refresh the TLS Certificate

### [ContainerGroups](docs/containergroups/README.md)

* [DeleteContainersGroupsNameOrID](docs/containergroups/README.md#deletecontainersgroupsnameorid) - Stop and delete all container instances in a container group.
* [GetContainersGroups](docs/containergroups/README.md#getcontainersgroups) - List all container groups in a space
* [GetContainersGroupsNameOrID](docs/containergroups/README.md#getcontainersgroupsnameorid) - Inspect a container group.
* [PatchContainersGroupsNameOrID](docs/containergroups/README.md#patchcontainersgroupsnameorid) - Update a container group.
* [PostContainersGroups](docs/containergroups/README.md#postcontainersgroups) - Create and start a container group.
* [PostContainersGroupsNameOrIDMaproute](docs/containergroups/README.md#postcontainersgroupsnameoridmaproute) - Map a public route to a container group.
* [PostContainersGroupsNameOrIDUnmaproute](docs/containergroups/README.md#postcontainersgroupsnameoridunmaproute) - Unmap a public route from a container group

### [FileShares](docs/fileshares/README.md)

* [DeleteVolumesFsName](docs/fileshares/README.md#deletevolumesfsname) - Delete a file share
* [GetVolumesFsFlavorsJSON](docs/fileshares/README.md#getvolumesfsflavorsjson) - List available file share sizes
* [GetVolumesFsJSON](docs/fileshares/README.md#getvolumesfsjson) - List available file shares in a space
* [GetVolumesFsNameJSON](docs/fileshares/README.md#getvolumesfsnamejson) - Inspect a file share
* [PostVolumesFsCreate](docs/fileshares/README.md#postvolumesfscreate) - Create a file share in a space

### [Images](docs/images/README.md)

* [DeleteImagesID](docs/images/README.md#deleteimagesid) - Remove a Docker image.
* [GetImagesJSON](docs/images/README.md#getimagesjson) - List all Docker images that are available in your private Bluemix registry.
* [GetImagesNameOrIDJSON](docs/images/README.md#getimagesnameoridjson) - Inspect a Docker image in private Bluemix registry
* [PostBuild](docs/images/README.md#postbuild) - Build a Docker image from a Dockerfile

### [PrivateDockerImagesRegistry](docs/privatedockerimagesregistry/README.md)

* [GetRegistryNamespaces](docs/privatedockerimagesregistry/README.md#getregistrynamespaces) - Retrieve the namespace of an organization.
* [GetRegistryNamespacesNamespace](docs/privatedockerimagesregistry/README.md#getregistrynamespacesnamespace) - Check the availability of a namespace
* [PutRegistryNamespacesNamespace](docs/privatedockerimagesregistry/README.md#putregistrynamespacesnamespace) - Set a namespace for your private Bluemix registry.

### [PublicIPAddresses](docs/publicipaddresses/README.md)

* [GetContainersFloatingIps](docs/publicipaddresses/README.md#getcontainersfloatingips) - List available public IP addresses in a space
* [PostContainersFloatingIpsRequest](docs/publicipaddresses/README.md#postcontainersfloatingipsrequest) - Request a public IP address for a space
* [PostContainersFloatingIpsIPRelease](docs/publicipaddresses/README.md#postcontainersfloatingipsiprelease) - Release public IP address
* [PostContainersNameOrIDFloatingIpsIPBind](docs/publicipaddresses/README.md#postcontainersnameoridfloatingipsipbind) - Bind a public IP address to a single container
* [PostContainersNameOrIDFloatingIpsIPUnbind](docs/publicipaddresses/README.md#postcontainersnameoridfloatingipsipunbind) - Unbind a public IP address from a container

### [Quota](docs/quota/README.md)

* [GetContainersQuota](docs/quota/README.md#getcontainersquota) - Retrieve organization and space specific quota
* [GetContainersUsage](docs/quota/README.md#getcontainersusage) - List container sizes and quota limits
* [PutContainersQuota](docs/quota/README.md#putcontainersquota) - Update space quota

### [SingleContainers](docs/singlecontainers/README.md)

* [DeleteContainersNameOrID](docs/singlecontainers/README.md#deletecontainersnameorid) - Remove a single container
* [GetContainersJSON](docs/singlecontainers/README.md#getcontainersjson) - List single containers in a space.
* [GetContainersIDStatus](docs/singlecontainers/README.md#getcontainersidstatus) - List the current state of a container.
* [GetContainersNameOrIDJSON](docs/singlecontainers/README.md#getcontainersnameoridjson) - Inspect a single container
* [PostContainersCreate](docs/singlecontainers/README.md#postcontainerscreate) - Create and start a single container
* [PostContainersNameOrIDPause](docs/singlecontainers/README.md#postcontainersnameoridpause) - Pause a single container
* [PostContainersNameOrIDRename](docs/singlecontainers/README.md#postcontainersnameoridrename) - Rename a single container
* [PostContainersNameOrIDRestart](docs/singlecontainers/README.md#postcontainersnameoridrestart) - Restart a single container
* [PostContainersNameOrIDStart](docs/singlecontainers/README.md#postcontainersnameoridstart) - Start a single container
* [PostContainersNameOrIDStop](docs/singlecontainers/README.md#postcontainersnameoridstop) - Stop a single container
* [PostContainersNameOrIDUnpause](docs/singlecontainers/README.md#postcontainersnameoridunpause) - Unpause a single container

### [Volumes](docs/volumes/README.md)

* [DeleteVolumesName](docs/volumes/README.md#deletevolumesname) - Delete a volume
* [GetVolumesJSON](docs/volumes/README.md#getvolumesjson) - List all volumes for a space
* [GetVolumesNameJSON](docs/volumes/README.md#getvolumesnamejson) - Retrieve detailed information about a volume. 
* [PostVolumesCreate](docs/volumes/README.md#postvolumescreate) - Create a volume in a space
* [PostVolumesName](docs/volumes/README.md#postvolumesname) - Share a volume with another space
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
