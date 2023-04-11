# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/bluemix.net/containers/3.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/bluemix.net/containers/3.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetContainersMessagesRequest,
  GetContainersMessagesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetContainersMessagesRequest = {
  xAuthProjectId: "corrupti",
  xAuthToken: "provident",
};

sdk.apiInfo.getContainersMessages(req).then((res: GetContainersMessagesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### apiInfo

* `getContainersMessages` - List messages for the user
* `getContainersVersion` - List latest API version

### authentication

* `getTlskey` - Retrieve the TLS Certificate
* `putTlskeyRefresh` - Refresh the TLS Certificate

### containerGroups

* `deleteContainersGroupsNameOrId` - Stop and delete all container instances in a container group.
* `getContainersGroups` - List all container groups in a space
* `getContainersGroupsNameOrId` - Inspect a container group.
* `patchContainersGroupsNameOrId` - Update a container group.
* `postContainersGroups` - Create and start a container group.
* `postContainersGroupsNameOrIdMaproute` - Map a public route to a container group.
* `postContainersGroupsNameOrIdUnmaproute` - Unmap a public route from a container group

### fileShares

* `deleteVolumesFsName` - Delete a file share
* `getVolumesFsFlavorsJson` - List available file share sizes
* `getVolumesFsJson` - List available file shares in a space
* `getVolumesFsNameJson` - Inspect a file share
* `postVolumesFsCreate` - Create a file share in a space

### images

* `deleteImagesId` - Remove a Docker image.
* `getImagesJson` - List all Docker images that are available in your private Bluemix registry.
* `getImagesNameOrIdJson` - Inspect a Docker image in private Bluemix registry
* `postBuild` - Build a Docker image from a Dockerfile

### privateDockerImagesRegistry

* `getRegistryNamespaces` - Retrieve the namespace of an organization.
* `getRegistryNamespacesNamespace` - Check the availability of a namespace
* `putRegistryNamespacesNamespace` - Set a namespace for your private Bluemix registry.

### publicIPAddresses

* `getContainersFloatingIps` - List available public IP addresses in a space
* `postContainersFloatingIpsRequest` - Request a public IP address for a space
* `postContainersFloatingIpsIpRelease` - Release public IP address
* `postContainersNameOrIdFloatingIpsIpBind` - Bind a public IP address to a single container
* `postContainersNameOrIdFloatingIpsIpUnbind` - Unbind a public IP address from a container

### quota

* `getContainersQuota` - Retrieve organization and space specific quota
* `getContainersUsage` - List container sizes and quota limits
* `putContainersQuota` - Update space quota

### singleContainers

* `deleteContainersNameOrId` - Remove a single container
* `getContainersJson` - List single containers in a space.
* `getContainersIdStatus` - List the current state of a container.
* `getContainersNameOrIdJson` - Inspect a single container
* `postContainersCreate` - Create and start a single container
* `postContainersNameOrIdPause` - Pause a single container
* `postContainersNameOrIdRename` - Rename a single container
* `postContainersNameOrIdRestart` - Restart a single container
* `postContainersNameOrIdStart` - Start a single container
* `postContainersNameOrIdStop` - Stop a single container
* `postContainersNameOrIdUnpause` - Unpause a single container

### volumes

* `deleteVolumesName` - Delete a volume
* `getVolumesJson` - List all volumes for a space
* `getVolumesNameJson` - Retrieve detailed information about a volume. 
* `postVolumesCreate` - Create a volume in a space
* `postVolumesName` - Share a volume with another space
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

