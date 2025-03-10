# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/apigee.local/registry/0.0.1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.RegistryCreateAPIRequest(
    api_input=shared.APIInput(
        annotations={
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        availability="illum",
        description="vel",
        display_name="error",
        labels={
            "suscipit": "iure",
            "magnam": "debitis",
            "ipsa": "delectus",
        },
        name="tempora",
        recommended_deployment="suscipit",
        recommended_version="molestiae",
    ),
    api_id="minus",
    location="placeat",
    project="voluptatum",
)
    
res = s.registry.registry_create_api(req)

if res.api is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### registry

* `registry_create_api` - CreateApi creates a specified API.
* `registry_create_api_deployment` - CreateApiDeployment creates a specified deployment.
* `registry_create_api_spec` - CreateApiSpec creates a specified spec.
* `registry_create_api_version` - CreateApiVersion creates a specified version.
* `registry_create_artifact` - CreateArtifact creates a specified artifact.
* `registry_delete_api` - DeleteApi removes a specified API and all of the resources that it
 owns.
* `registry_delete_api_deployment` - DeleteApiDeployment removes a specified deployment, all revisions, and all
 child resources (e.g. artifacts).
* `registry_delete_api_deployment_revision` - DeleteApiDeploymentRevision deletes a revision of a deployment.
* `registry_delete_api_spec` - DeleteApiSpec removes a specified spec, all revisions, and all child
 resources (e.g. artifacts).
* `registry_delete_api_spec_revision` - DeleteApiSpecRevision deletes a revision of a spec.
* `registry_delete_api_version` - DeleteApiVersion removes a specified version and all of the resources that
 it owns.
* `registry_delete_artifact` - DeleteArtifact removes a specified artifact.
* `registry_get_api` - GetApi returns a specified API.
* `registry_get_api_deployment` - GetApiDeployment returns a specified deployment.
* `registry_get_api_spec` - GetApiSpec returns a specified spec.
* `registry_get_api_spec_contents` - GetApiSpecContents returns the contents of a specified spec.
 If specs are stored with GZip compression, the default behavior
 is to return the spec uncompressed (the mime_type response field
 indicates the exact format returned).
* `registry_get_api_version` - GetApiVersion returns a specified version.
* `registry_get_artifact` - GetArtifact returns a specified artifact.
* `registry_get_artifact_contents` - GetArtifactContents returns the contents of a specified artifact.
 If artifacts are stored with GZip compression, the default behavior
 is to return the artifact uncompressed (the mime_type response field
 indicates the exact format returned).
* `registry_list_api_deployment_revisions` - ListApiDeploymentRevisions lists all revisions of a deployment.
 Revisions are returned in descending order of revision creation time.
* `registry_list_api_deployments` - ListApiDeployments returns matching deployments.
* `registry_list_api_spec_revisions` - ListApiSpecRevisions lists all revisions of a spec.
 Revisions are returned in descending order of revision creation time.
* `registry_list_api_specs` - ListApiSpecs returns matching specs.
* `registry_list_api_versions` - ListApiVersions returns matching versions.
* `registry_list_apis` - ListApis returns matching APIs.
* `registry_list_artifacts` - ListArtifacts returns matching artifacts.
* `registry_replace_artifact` - ReplaceArtifact can be used to replace a specified artifact.
* `registry_rollback_api_deployment` - RollbackApiDeployment sets the current revision to a specified prior
 revision. Note that this creates a new revision with a new revision ID.
* `registry_rollback_api_spec` - RollbackApiSpec sets the current revision to a specified prior revision.
 Note that this creates a new revision with a new revision ID.
* `registry_tag_api_deployment_revision` - TagApiDeploymentRevision adds a tag to a specified revision of a
 deployment.
* `registry_tag_api_spec_revision` - TagApiSpecRevision adds a tag to a specified revision of a spec.
* `registry_update_api` - UpdateApi can be used to modify a specified API.
* `registry_update_api_deployment` - UpdateApiDeployment can be used to modify a specified deployment.
* `registry_update_api_spec` - UpdateApiSpec can be used to modify a specified spec.
* `registry_update_api_version` - UpdateApiVersion can be used to modify a specified version.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
