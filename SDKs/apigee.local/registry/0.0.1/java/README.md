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

import org.openapis.openapi.models.operations.RegistryCreateApiRequest;
import org.openapis.openapi.models.operations.RegistryCreateApiResponse;
import org.openapis.openapi.models.shared.ApiInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryCreateApiRequest req = new RegistryCreateApiRequest() {{
                apiInput = new ApiInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("provident", "distinctio");
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                    }};
                    availability = "illum";
                    description = "vel";
                    displayName = "error";
                    labels = new java.util.HashMap<String, String>() {{
                        put("suscipit", "iure");
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                    name = "tempora";
                    recommendedDeployment = "suscipit";
                    recommendedVersion = "molestiae";
                }};
                apiId = "minus";
                location = "placeat";
                project = "voluptatum";
            }}            

            RegistryCreateApiResponse res = sdk.registry.registryCreateApi(req);

            if (res.api.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
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
