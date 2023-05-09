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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Registry.RegistryCreateAPI(ctx, operations.RegistryCreateAPIRequest{
        APIInput: shared.APIInput{
            Annotations: map[string]string{
                "provident": "distinctio",
                "quibusdam": "unde",
                "nulla": "corrupti",
            },
            Availability: sdk.String("illum"),
            Description: sdk.String("vel"),
            DisplayName: sdk.String("error"),
            Labels: map[string]string{
                "suscipit": "iure",
                "magnam": "debitis",
                "ipsa": "delectus",
            },
            Name: sdk.String("Laurie Kreiger"),
            RecommendedDeployment: sdk.String("voluptatum"),
            RecommendedVersion: sdk.String("iusto"),
        },
        APIID: sdk.String("excepturi"),
        Location: "nisi",
        Project: "recusandae",
    })
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


### [Registry](docs/registry/README.md)

* [RegistryCreateAPI](docs/registry/README.md#registrycreateapi) - CreateApi creates a specified API.
* [RegistryCreateAPIDeployment](docs/registry/README.md#registrycreateapideployment) - CreateApiDeployment creates a specified deployment.
* [RegistryCreateAPISpec](docs/registry/README.md#registrycreateapispec) - CreateApiSpec creates a specified spec.
* [RegistryCreateAPIVersion](docs/registry/README.md#registrycreateapiversion) - CreateApiVersion creates a specified version.
* [RegistryCreateArtifact](docs/registry/README.md#registrycreateartifact) - CreateArtifact creates a specified artifact.
* [RegistryDeleteAPI](docs/registry/README.md#registrydeleteapi) - DeleteApi removes a specified API and all of the resources that it
 owns.
* [RegistryDeleteAPIDeployment](docs/registry/README.md#registrydeleteapideployment) - DeleteApiDeployment removes a specified deployment, all revisions, and all
 child resources (e.g. artifacts).
* [RegistryDeleteAPIDeploymentRevision](docs/registry/README.md#registrydeleteapideploymentrevision) - DeleteApiDeploymentRevision deletes a revision of a deployment.
* [RegistryDeleteAPISpec](docs/registry/README.md#registrydeleteapispec) - DeleteApiSpec removes a specified spec, all revisions, and all child
 resources (e.g. artifacts).
* [RegistryDeleteAPISpecRevision](docs/registry/README.md#registrydeleteapispecrevision) - DeleteApiSpecRevision deletes a revision of a spec.
* [RegistryDeleteAPIVersion](docs/registry/README.md#registrydeleteapiversion) - DeleteApiVersion removes a specified version and all of the resources that
 it owns.
* [RegistryDeleteArtifact](docs/registry/README.md#registrydeleteartifact) - DeleteArtifact removes a specified artifact.
* [RegistryGetAPI](docs/registry/README.md#registrygetapi) - GetApi returns a specified API.
* [RegistryGetAPIDeployment](docs/registry/README.md#registrygetapideployment) - GetApiDeployment returns a specified deployment.
* [RegistryGetAPISpec](docs/registry/README.md#registrygetapispec) - GetApiSpec returns a specified spec.
* [RegistryGetAPISpecContents](docs/registry/README.md#registrygetapispeccontents) - GetApiSpecContents returns the contents of a specified spec.
 If specs are stored with GZip compression, the default behavior
 is to return the spec uncompressed (the mime_type response field
 indicates the exact format returned).
* [RegistryGetAPIVersion](docs/registry/README.md#registrygetapiversion) - GetApiVersion returns a specified version.
* [RegistryGetArtifact](docs/registry/README.md#registrygetartifact) - GetArtifact returns a specified artifact.
* [RegistryGetArtifactContents](docs/registry/README.md#registrygetartifactcontents) - GetArtifactContents returns the contents of a specified artifact.
 If artifacts are stored with GZip compression, the default behavior
 is to return the artifact uncompressed (the mime_type response field
 indicates the exact format returned).
* [RegistryListAPIDeploymentRevisions](docs/registry/README.md#registrylistapideploymentrevisions) - ListApiDeploymentRevisions lists all revisions of a deployment.
 Revisions are returned in descending order of revision creation time.
* [RegistryListAPIDeployments](docs/registry/README.md#registrylistapideployments) - ListApiDeployments returns matching deployments.
* [RegistryListAPISpecRevisions](docs/registry/README.md#registrylistapispecrevisions) - ListApiSpecRevisions lists all revisions of a spec.
 Revisions are returned in descending order of revision creation time.
* [RegistryListAPISpecs](docs/registry/README.md#registrylistapispecs) - ListApiSpecs returns matching specs.
* [RegistryListAPIVersions](docs/registry/README.md#registrylistapiversions) - ListApiVersions returns matching versions.
* [RegistryListApis](docs/registry/README.md#registrylistapis) - ListApis returns matching APIs.
* [RegistryListArtifacts](docs/registry/README.md#registrylistartifacts) - ListArtifacts returns matching artifacts.
* [RegistryReplaceArtifact](docs/registry/README.md#registryreplaceartifact) - ReplaceArtifact can be used to replace a specified artifact.
* [RegistryRollbackAPIDeployment](docs/registry/README.md#registryrollbackapideployment) - RollbackApiDeployment sets the current revision to a specified prior
 revision. Note that this creates a new revision with a new revision ID.
* [RegistryRollbackAPISpec](docs/registry/README.md#registryrollbackapispec) - RollbackApiSpec sets the current revision to a specified prior revision.
 Note that this creates a new revision with a new revision ID.
* [RegistryTagAPIDeploymentRevision](docs/registry/README.md#registrytagapideploymentrevision) - TagApiDeploymentRevision adds a tag to a specified revision of a
 deployment.
* [RegistryTagAPISpecRevision](docs/registry/README.md#registrytagapispecrevision) - TagApiSpecRevision adds a tag to a specified revision of a spec.
* [RegistryUpdateAPI](docs/registry/README.md#registryupdateapi) - UpdateApi can be used to modify a specified API.
* [RegistryUpdateAPIDeployment](docs/registry/README.md#registryupdateapideployment) - UpdateApiDeployment can be used to modify a specified deployment.
* [RegistryUpdateAPISpec](docs/registry/README.md#registryupdateapispec) - UpdateApiSpec can be used to modify a specified spec.
* [RegistryUpdateAPIVersion](docs/registry/README.md#registryupdateapiversion) - UpdateApiVersion can be used to modify a specified version.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
