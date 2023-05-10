# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RegistryCreateApiRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegistryCreateApiRequest();
    $request->apiInput = new ApiInput();
    $request->apiInput->annotations = [
        'provident' => 'distinctio',
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
    ];
    $request->apiInput->availability = 'illum';
    $request->apiInput->description = 'vel';
    $request->apiInput->displayName = 'error';
    $request->apiInput->labels = [
        'suscipit' => 'iure',
        'magnam' => 'debitis',
        'ipsa' => 'delectus',
    ];
    $request->apiInput->name = 'Laurie Kreiger';
    $request->apiInput->recommendedDeployment = 'voluptatum';
    $request->apiInput->recommendedVersion = 'iusto';
    $request->apiId = 'excepturi';
    $request->location = 'nisi';
    $request->project = 'recusandae';

    $response = $sdk->registry->registryCreateApi($request);

    if ($response->api !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [registry](docs/registry/README.md)

* [registryCreateApi](docs/registry/README.md#registrycreateapi) - CreateApi creates a specified API.
* [registryCreateApiDeployment](docs/registry/README.md#registrycreateapideployment) - CreateApiDeployment creates a specified deployment.
* [registryCreateApiSpec](docs/registry/README.md#registrycreateapispec) - CreateApiSpec creates a specified spec.
* [registryCreateApiVersion](docs/registry/README.md#registrycreateapiversion) - CreateApiVersion creates a specified version.
* [registryCreateArtifact](docs/registry/README.md#registrycreateartifact) - CreateArtifact creates a specified artifact.
* [registryDeleteApi](docs/registry/README.md#registrydeleteapi) - DeleteApi removes a specified API and all of the resources that it
 owns.
* [registryDeleteApiDeployment](docs/registry/README.md#registrydeleteapideployment) - DeleteApiDeployment removes a specified deployment, all revisions, and all
 child resources (e.g. artifacts).
* [registryDeleteApiDeploymentRevision](docs/registry/README.md#registrydeleteapideploymentrevision) - DeleteApiDeploymentRevision deletes a revision of a deployment.
* [registryDeleteApiSpec](docs/registry/README.md#registrydeleteapispec) - DeleteApiSpec removes a specified spec, all revisions, and all child
 resources (e.g. artifacts).
* [registryDeleteApiSpecRevision](docs/registry/README.md#registrydeleteapispecrevision) - DeleteApiSpecRevision deletes a revision of a spec.
* [registryDeleteApiVersion](docs/registry/README.md#registrydeleteapiversion) - DeleteApiVersion removes a specified version and all of the resources that
 it owns.
* [registryDeleteArtifact](docs/registry/README.md#registrydeleteartifact) - DeleteArtifact removes a specified artifact.
* [registryGetApi](docs/registry/README.md#registrygetapi) - GetApi returns a specified API.
* [registryGetApiDeployment](docs/registry/README.md#registrygetapideployment) - GetApiDeployment returns a specified deployment.
* [registryGetApiSpec](docs/registry/README.md#registrygetapispec) - GetApiSpec returns a specified spec.
* [registryGetApiSpecContents](docs/registry/README.md#registrygetapispeccontents) - GetApiSpecContents returns the contents of a specified spec.
 If specs are stored with GZip compression, the default behavior
 is to return the spec uncompressed (the mime_type response field
 indicates the exact format returned).
* [registryGetApiVersion](docs/registry/README.md#registrygetapiversion) - GetApiVersion returns a specified version.
* [registryGetArtifact](docs/registry/README.md#registrygetartifact) - GetArtifact returns a specified artifact.
* [registryGetArtifactContents](docs/registry/README.md#registrygetartifactcontents) - GetArtifactContents returns the contents of a specified artifact.
 If artifacts are stored with GZip compression, the default behavior
 is to return the artifact uncompressed (the mime_type response field
 indicates the exact format returned).
* [registryListApiDeploymentRevisions](docs/registry/README.md#registrylistapideploymentrevisions) - ListApiDeploymentRevisions lists all revisions of a deployment.
 Revisions are returned in descending order of revision creation time.
* [registryListApiDeployments](docs/registry/README.md#registrylistapideployments) - ListApiDeployments returns matching deployments.
* [registryListApiSpecRevisions](docs/registry/README.md#registrylistapispecrevisions) - ListApiSpecRevisions lists all revisions of a spec.
 Revisions are returned in descending order of revision creation time.
* [registryListApiSpecs](docs/registry/README.md#registrylistapispecs) - ListApiSpecs returns matching specs.
* [registryListApiVersions](docs/registry/README.md#registrylistapiversions) - ListApiVersions returns matching versions.
* [registryListApis](docs/registry/README.md#registrylistapis) - ListApis returns matching APIs.
* [registryListArtifacts](docs/registry/README.md#registrylistartifacts) - ListArtifacts returns matching artifacts.
* [registryReplaceArtifact](docs/registry/README.md#registryreplaceartifact) - ReplaceArtifact can be used to replace a specified artifact.
* [registryRollbackApiDeployment](docs/registry/README.md#registryrollbackapideployment) - RollbackApiDeployment sets the current revision to a specified prior
 revision. Note that this creates a new revision with a new revision ID.
* [registryRollbackApiSpec](docs/registry/README.md#registryrollbackapispec) - RollbackApiSpec sets the current revision to a specified prior revision.
 Note that this creates a new revision with a new revision ID.
* [registryTagApiDeploymentRevision](docs/registry/README.md#registrytagapideploymentrevision) - TagApiDeploymentRevision adds a tag to a specified revision of a
 deployment.
* [registryTagApiSpecRevision](docs/registry/README.md#registrytagapispecrevision) - TagApiSpecRevision adds a tag to a specified revision of a spec.
* [registryUpdateApi](docs/registry/README.md#registryupdateapi) - UpdateApi can be used to modify a specified API.
* [registryUpdateApiDeployment](docs/registry/README.md#registryupdateapideployment) - UpdateApiDeployment can be used to modify a specified deployment.
* [registryUpdateApiSpec](docs/registry/README.md#registryupdateapispec) - UpdateApiSpec can be used to modify a specified spec.
* [registryUpdateApiVersion](docs/registry/README.md#registryupdateapiversion) - UpdateApiVersion can be used to modify a specified version.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
