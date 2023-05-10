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
use \OpenAPI\OpenAPI\Models\Operations\CreateArtifactRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\RuleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateArtifactRuleRequest();
    $request->rule = new Rule();
    $request->rule->config = 'corrupti';
    $request->rule->type = RuleTypeEnum::VALIDITY;
    $request->artifactId = 'provident';

    $response = $sdk->artifactRules->createArtifactRule($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [artifactRules](docs/artifactrules/README.md)

* [createArtifactRule](docs/artifactrules/README.md#createartifactrule) - Create artifact rule
* [deleteArtifactRule](docs/artifactrules/README.md#deleteartifactrule) - Delete artifact rule
* [deleteArtifactRules](docs/artifactrules/README.md#deleteartifactrules) - Delete artifact rules
* [getArtifactRuleConfig](docs/artifactrules/README.md#getartifactruleconfig) - Get artifact rule configuration
* [listArtifactRules](docs/artifactrules/README.md#listartifactrules) - List artifact rules
* [testUpdateArtifact](docs/artifactrules/README.md#testupdateartifact) - Test update artifact
* [updateArtifactRuleConfig](docs/artifactrules/README.md#updateartifactruleconfig) - Update artifact rule configuration

### [artifacts](docs/artifacts/README.md)

* [createArtifact](docs/artifacts/README.md#createartifact) - Create artifact
* [deleteArtifact](docs/artifacts/README.md#deleteartifact) - Delete artifact
* [getArtifactByGlobalId](docs/artifacts/README.md#getartifactbyglobalid) - Get artifact by global ID
* [getLatestArtifact](docs/artifacts/README.md#getlatestartifact) - Get latest artifact
* [listArtifacts](docs/artifacts/README.md#listartifacts) - List all artifact IDs
* [searchArtifacts](docs/artifacts/README.md#searchartifacts) - Search for artifacts
* [updateArtifact](docs/artifacts/README.md#updateartifact) - Update artifact
* [updateArtifactState](docs/artifacts/README.md#updateartifactstate) - Update artifact state

### [globalRules](docs/globalrules/README.md)

* [createGlobalRule](docs/globalrules/README.md#createglobalrule) - Create global rule
* [deleteAllGlobalRules](docs/globalrules/README.md#deleteallglobalrules) - Delete all global rules
* [deleteGlobalRule](docs/globalrules/README.md#deleteglobalrule) - Delete global rule
* [getGlobalRuleConfig](docs/globalrules/README.md#getglobalruleconfig) - Get global rule configuration
* [listGlobalRules](docs/globalrules/README.md#listglobalrules) - List global rules
* [updateGlobalRuleConfig](docs/globalrules/README.md#updateglobalruleconfig) - Update global rule configuration

### [metadata](docs/metadata/README.md)

* [deleteArtifactVersionMetaData](docs/metadata/README.md#deleteartifactversionmetadata) - Delete artifact version metadata
* [getArtifactMetaData](docs/metadata/README.md#getartifactmetadata) - Get artifact metadata
* [getArtifactMetaDataByContent](docs/metadata/README.md#getartifactmetadatabycontent) - Get artifact metadata by content
* [getArtifactMetaDataByGlobalId](docs/metadata/README.md#getartifactmetadatabyglobalid) - Get global artifact metadata
* [getArtifactVersionMetaData](docs/metadata/README.md#getartifactversionmetadata) - Get artifact version metadata
* [updateArtifactMetaData](docs/metadata/README.md#updateartifactmetadata) - Update artifact metadata
* [updateArtifactVersionMetaData](docs/metadata/README.md#updateartifactversionmetadata) - Update artifact version metadata

### [search](docs/search/README.md)

* [searchArtifacts](docs/search/README.md#searchartifacts) - Search for artifacts
* [searchVersions](docs/search/README.md#searchversions) - Search artifact versions

### [versions](docs/versions/README.md)

* [createArtifactVersion](docs/versions/README.md#createartifactversion) - Create artifact version
* [getArtifactVersion](docs/versions/README.md#getartifactversion) - Get artifact version
* [listArtifactVersions](docs/versions/README.md#listartifactversions) - List artifact versions
* [searchVersions](docs/versions/README.md#searchversions) - Search artifact versions
* [updateArtifactVersionState](docs/versions/README.md#updateartifactversionstate) - Update artifact version state
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
