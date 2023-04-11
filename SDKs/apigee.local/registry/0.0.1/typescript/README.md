# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apigee.local/registry/0.0.1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apigee.local/registry/0.0.1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  RegistryCreateApiRequest,
  RegistryCreateApiResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: RegistryCreateApiRequest = {
  apiInput: {
    annotations: {
      "provident": "distinctio",
      "quibusdam": "unde",
      "nulla": "corrupti",
    },
    availability: "illum",
    description: "vel",
    displayName: "error",
    labels: {
      "suscipit": "iure",
      "magnam": "debitis",
      "ipsa": "delectus",
    },
    name: "tempora",
    recommendedDeployment: "suscipit",
    recommendedVersion: "molestiae",
  },
  apiId: "minus",
  location: "placeat",
  project: "voluptatum",
};

sdk.registry.registryCreateApi(req).then((res: RegistryCreateApiResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### registry

* `registryCreateApi` - CreateApi creates a specified API.
* `registryCreateApiDeployment` - CreateApiDeployment creates a specified deployment.
* `registryCreateApiSpec` - CreateApiSpec creates a specified spec.
* `registryCreateApiVersion` - CreateApiVersion creates a specified version.
* `registryCreateArtifact` - CreateArtifact creates a specified artifact.
* `registryDeleteApi` - DeleteApi removes a specified API and all of the resources that it
 owns.
* `registryDeleteApiDeployment` - DeleteApiDeployment removes a specified deployment, all revisions, and all
 child resources (e.g. artifacts).
* `registryDeleteApiDeploymentRevision` - DeleteApiDeploymentRevision deletes a revision of a deployment.
* `registryDeleteApiSpec` - DeleteApiSpec removes a specified spec, all revisions, and all child
 resources (e.g. artifacts).
* `registryDeleteApiSpecRevision` - DeleteApiSpecRevision deletes a revision of a spec.
* `registryDeleteApiVersion` - DeleteApiVersion removes a specified version and all of the resources that
 it owns.
* `registryDeleteArtifact` - DeleteArtifact removes a specified artifact.
* `registryGetApi` - GetApi returns a specified API.
* `registryGetApiDeployment` - GetApiDeployment returns a specified deployment.
* `registryGetApiSpec` - GetApiSpec returns a specified spec.
* `registryGetApiSpecContents` - GetApiSpecContents returns the contents of a specified spec.
 If specs are stored with GZip compression, the default behavior
 is to return the spec uncompressed (the mime_type response field
 indicates the exact format returned).
* `registryGetApiVersion` - GetApiVersion returns a specified version.
* `registryGetArtifact` - GetArtifact returns a specified artifact.
* `registryGetArtifactContents` - GetArtifactContents returns the contents of a specified artifact.
 If artifacts are stored with GZip compression, the default behavior
 is to return the artifact uncompressed (the mime_type response field
 indicates the exact format returned).
* `registryListApiDeploymentRevisions` - ListApiDeploymentRevisions lists all revisions of a deployment.
 Revisions are returned in descending order of revision creation time.
* `registryListApiDeployments` - ListApiDeployments returns matching deployments.
* `registryListApiSpecRevisions` - ListApiSpecRevisions lists all revisions of a spec.
 Revisions are returned in descending order of revision creation time.
* `registryListApiSpecs` - ListApiSpecs returns matching specs.
* `registryListApiVersions` - ListApiVersions returns matching versions.
* `registryListApis` - ListApis returns matching APIs.
* `registryListArtifacts` - ListArtifacts returns matching artifacts.
* `registryReplaceArtifact` - ReplaceArtifact can be used to replace a specified artifact.
* `registryRollbackApiDeployment` - RollbackApiDeployment sets the current revision to a specified prior
 revision. Note that this creates a new revision with a new revision ID.
* `registryRollbackApiSpec` - RollbackApiSpec sets the current revision to a specified prior revision.
 Note that this creates a new revision with a new revision ID.
* `registryTagApiDeploymentRevision` - TagApiDeploymentRevision adds a tag to a specified revision of a
 deployment.
* `registryTagApiSpecRevision` - TagApiSpecRevision adds a tag to a specified revision of a spec.
* `registryUpdateApi` - UpdateApi can be used to modify a specified API.
* `registryUpdateApiDeployment` - UpdateApiDeployment can be used to modify a specified deployment.
* `registryUpdateApiSpec` - UpdateApiSpec can be used to modify a specified spec.
* `registryUpdateApiVersion` - UpdateApiVersion can be used to modify a specified version.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

