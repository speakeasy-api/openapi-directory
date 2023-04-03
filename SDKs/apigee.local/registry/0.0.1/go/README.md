# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apigee.local/registry/0.0.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.RegistryCreateAPIRequest{
        APIInput: shared.APIInput{
            Annotations: map[string]string{
                "provident": "distinctio",
                "quibusdam": "unde",
                "nulla": "corrupti",
            },
            Availability: "illum",
            Description: "vel",
            DisplayName: "error",
            Labels: map[string]string{
                "suscipit": "iure",
                "magnam": "debitis",
                "ipsa": "delectus",
            },
            Name: "tempora",
            RecommendedDeployment: "suscipit",
            RecommendedVersion: "molestiae",
        },
        APIID: "minus",
        Location: "placeat",
        Project: "voluptatum",
    }

    ctx := context.Background()
    res, err := s.Registry.RegistryCreateAPI(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.API != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Registry

* `RegistryCreateAPI` - CreateApi creates a specified API.
* `RegistryCreateAPIDeployment` - CreateApiDeployment creates a specified deployment.
* `RegistryCreateAPISpec` - CreateApiSpec creates a specified spec.
* `RegistryCreateAPIVersion` - CreateApiVersion creates a specified version.
* `RegistryCreateArtifact` - CreateArtifact creates a specified artifact.
* `RegistryDeleteAPI` - DeleteApi removes a specified API and all of the resources that it
 owns.
* `RegistryDeleteAPIDeployment` - DeleteApiDeployment removes a specified deployment, all revisions, and all
 child resources (e.g. artifacts).
* `RegistryDeleteAPIDeploymentRevision` - DeleteApiDeploymentRevision deletes a revision of a deployment.
* `RegistryDeleteAPISpec` - DeleteApiSpec removes a specified spec, all revisions, and all child
 resources (e.g. artifacts).
* `RegistryDeleteAPISpecRevision` - DeleteApiSpecRevision deletes a revision of a spec.
* `RegistryDeleteAPIVersion` - DeleteApiVersion removes a specified version and all of the resources that
 it owns.
* `RegistryDeleteArtifact` - DeleteArtifact removes a specified artifact.
* `RegistryGetAPI` - GetApi returns a specified API.
* `RegistryGetAPIDeployment` - GetApiDeployment returns a specified deployment.
* `RegistryGetAPISpec` - GetApiSpec returns a specified spec.
* `RegistryGetAPISpecContents` - GetApiSpecContents returns the contents of a specified spec.
 If specs are stored with GZip compression, the default behavior
 is to return the spec uncompressed (the mime_type response field
 indicates the exact format returned).
* `RegistryGetAPIVersion` - GetApiVersion returns a specified version.
* `RegistryGetArtifact` - GetArtifact returns a specified artifact.
* `RegistryGetArtifactContents` - GetArtifactContents returns the contents of a specified artifact.
 If artifacts are stored with GZip compression, the default behavior
 is to return the artifact uncompressed (the mime_type response field
 indicates the exact format returned).
* `RegistryListAPIDeploymentRevisions` - ListApiDeploymentRevisions lists all revisions of a deployment.
 Revisions are returned in descending order of revision creation time.
* `RegistryListAPIDeployments` - ListApiDeployments returns matching deployments.
* `RegistryListAPISpecRevisions` - ListApiSpecRevisions lists all revisions of a spec.
 Revisions are returned in descending order of revision creation time.
* `RegistryListAPISpecs` - ListApiSpecs returns matching specs.
* `RegistryListAPIVersions` - ListApiVersions returns matching versions.
* `RegistryListApis` - ListApis returns matching APIs.
* `RegistryListArtifacts` - ListArtifacts returns matching artifacts.
* `RegistryReplaceArtifact` - ReplaceArtifact can be used to replace a specified artifact.
* `RegistryRollbackAPIDeployment` - RollbackApiDeployment sets the current revision to a specified prior
 revision. Note that this creates a new revision with a new revision ID.
* `RegistryRollbackAPISpec` - RollbackApiSpec sets the current revision to a specified prior revision.
 Note that this creates a new revision with a new revision ID.
* `RegistryTagAPIDeploymentRevision` - TagApiDeploymentRevision adds a tag to a specified revision of a
 deployment.
* `RegistryTagAPISpecRevision` - TagApiSpecRevision adds a tag to a specified revision of a spec.
* `RegistryUpdateAPI` - UpdateApi can be used to modify a specified API.
* `RegistryUpdateAPIDeployment` - UpdateApiDeployment can be used to modify a specified deployment.
* `RegistryUpdateAPISpec` - UpdateApiSpec can be used to modify a specified spec.
* `RegistryUpdateAPIVersion` - UpdateApiVersion can be used to modify a specified version.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
