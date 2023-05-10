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
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\RuleTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Rule();
    $request->config = 'corrupti';
    $request->type = RuleTypeEnum::VALIDITY;

    $response = $sdk->admin->createGlobalRule($request);

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


### [admin](docs/admin/README.md)

* [createGlobalRule](docs/admin/README.md#createglobalrule) - Create global rule
* [createRoleMapping](docs/admin/README.md#createrolemapping) - Create a new role mapping
* [deleteAllGlobalRules](docs/admin/README.md#deleteallglobalrules) - Delete all global rules
* [deleteGlobalRule](docs/admin/README.md#deleteglobalrule) - Delete global rule
* [deleteRoleMapping](docs/admin/README.md#deleterolemapping) - Delete a role mapping
* [exportData](docs/admin/README.md#exportdata) - Export registry data
* [getConfigProperty](docs/admin/README.md#getconfigproperty) - Get configuration property value
* [getGlobalRuleConfig](docs/admin/README.md#getglobalruleconfig) - Get global rule configuration
* [getLogConfiguration](docs/admin/README.md#getlogconfiguration) - Get a single logger configuration
* [getRoleMapping](docs/admin/README.md#getrolemapping) - Return a single role mapping
* [importData](docs/admin/README.md#importdata) - Import registry data
* [listArtifactTypes](docs/admin/README.md#listartifacttypes) - List artifact types
* [listConfigProperties](docs/admin/README.md#listconfigproperties) - List all configuration properties
* [listGlobalRules](docs/admin/README.md#listglobalrules) - List global rules
* [listLogConfigurations](docs/admin/README.md#listlogconfigurations) - List logging configurations
* [listRoleMappings](docs/admin/README.md#listrolemappings) - List all role mappings
* [removeLogConfiguration](docs/admin/README.md#removelogconfiguration) - Removes logger configuration
* [resetConfigProperty](docs/admin/README.md#resetconfigproperty) - Reset a configuration property
* [setLogConfiguration](docs/admin/README.md#setlogconfiguration) - Set a logger's configuration
* [updateConfigProperty](docs/admin/README.md#updateconfigproperty) - Update a configuration property
* [updateGlobalRuleConfig](docs/admin/README.md#updateglobalruleconfig) - Update global rule configuration
* [updateRoleMapping](docs/admin/README.md#updaterolemapping) - Update a role mapping

### [artifactType](docs/artifacttype/README.md)

* [listArtifactTypes](docs/artifacttype/README.md#listartifacttypes) - List artifact types

### [artifactRules](docs/artifactrules/README.md)

* [createArtifactRule](docs/artifactrules/README.md#createartifactrule) - Create artifact rule
* [deleteArtifactRule](docs/artifactrules/README.md#deleteartifactrule) - Delete artifact rule
* [deleteArtifactRules](docs/artifactrules/README.md#deleteartifactrules) - Delete artifact rules
* [getArtifactRuleConfig](docs/artifactrules/README.md#getartifactruleconfig) - Get artifact rule configuration
* [listArtifactRules](docs/artifactrules/README.md#listartifactrules) - List artifact rules
* [testUpdateArtifact](docs/artifactrules/README.md#testupdateartifact) - Test update artifact
* [updateArtifactRuleConfig](docs/artifactrules/README.md#updateartifactruleconfig) - Update artifact rule configuration

### [artifacts](docs/artifacts/README.md)

* [createArtifactJson](docs/artifacts/README.md#createartifactjson) - Create artifact
* [createArtifactRaw](docs/artifacts/README.md#createartifactraw) - Create artifact
* [deleteArtifact](docs/artifacts/README.md#deleteartifact) - Delete artifact
* [deleteArtifactsInGroup](docs/artifacts/README.md#deleteartifactsingroup) - Delete artifacts in group
* [getContentByGlobalId](docs/artifacts/README.md#getcontentbyglobalid) - Get artifact by global ID
* [getContentByHash](docs/artifacts/README.md#getcontentbyhash) - Get artifact content by SHA-256 hash
* [getContentById](docs/artifacts/README.md#getcontentbyid) - Get artifact content by ID
* [getLatestArtifact](docs/artifacts/README.md#getlatestartifact) - Get latest artifact
* [listArtifactsInGroup](docs/artifacts/README.md#listartifactsingroup) - List artifacts in group
* [referencesByContentHash](docs/artifacts/README.md#referencesbycontenthash) - List artifact references by hash
* [referencesByContentId](docs/artifacts/README.md#referencesbycontentid) - List artifact references by content ID
* [referencesByGlobalId](docs/artifacts/README.md#referencesbyglobalid) - List artifact references by global ID
* [searchArtifacts](docs/artifacts/README.md#searchartifacts) - Search for artifacts
* [searchArtifactsByContent](docs/artifacts/README.md#searchartifactsbycontent) - Search for artifacts by content
* [updateArtifactState](docs/artifacts/README.md#updateartifactstate) - Update artifact state
* [updateArtifactJson](docs/artifacts/README.md#updateartifactjson) - Update artifact
* [updateArtifactRaw](docs/artifacts/README.md#updateartifactraw) - Update artifact

### [globalRules](docs/globalrules/README.md)

* [createGlobalRule](docs/globalrules/README.md#createglobalrule) - Create global rule
* [deleteAllGlobalRules](docs/globalrules/README.md#deleteallglobalrules) - Delete all global rules
* [deleteGlobalRule](docs/globalrules/README.md#deleteglobalrule) - Delete global rule
* [getGlobalRuleConfig](docs/globalrules/README.md#getglobalruleconfig) - Get global rule configuration
* [listGlobalRules](docs/globalrules/README.md#listglobalrules) - List global rules
* [updateGlobalRuleConfig](docs/globalrules/README.md#updateglobalruleconfig) - Update global rule configuration

### [groups](docs/groups/README.md)

* [createGroup](docs/groups/README.md#creategroup) - Create a new group
* [deleteGroupById](docs/groups/README.md#deletegroupbyid) - Delete a group by the specified ID.
* [getGroupById](docs/groups/README.md#getgroupbyid) - Get a group by the specified ID.
* [listGroups](docs/groups/README.md#listgroups) - List groups

### [metadata](docs/metadata/README.md)

* [deleteArtifactVersionMetaData](docs/metadata/README.md#deleteartifactversionmetadata) - Delete artifact version metadata
* [getArtifactMetaData](docs/metadata/README.md#getartifactmetadata) - Get artifact metadata
* [getArtifactOwner](docs/metadata/README.md#getartifactowner) - Get artifact owner
* [getArtifactVersionMetaData](docs/metadata/README.md#getartifactversionmetadata) - Get artifact version metadata
* [getArtifactVersionMetaDataByContentJson](docs/metadata/README.md#getartifactversionmetadatabycontentjson) - Get artifact version metadata by content
* [getArtifactVersionMetaDataByContentRaw](docs/metadata/README.md#getartifactversionmetadatabycontentraw) - Get artifact version metadata by content
* [updateArtifactMetaData](docs/metadata/README.md#updateartifactmetadata) - Update artifact metadata
* [updateArtifactOwner](docs/metadata/README.md#updateartifactowner) - Update artifact owner
* [updateArtifactVersionMetaData](docs/metadata/README.md#updateartifactversionmetadata) - Update artifact version metadata

### [search](docs/search/README.md)

* [searchArtifacts](docs/search/README.md#searchartifacts) - Search for artifacts
* [searchArtifactsByContent](docs/search/README.md#searchartifactsbycontent) - Search for artifacts by content

### [system](docs/system/README.md)

* [getResourceLimits](docs/system/README.md#getresourcelimits) - Get resource limits information
* [getSystemInfo](docs/system/README.md#getsysteminfo) - Get system information

### [users](docs/users/README.md)

* [getCurrentUserInfo](docs/users/README.md#getcurrentuserinfo) - Get current user

### [versions](docs/versions/README.md)

* [createArtifactVersionJson](docs/versions/README.md#createartifactversionjson) - Create artifact version
* [createArtifactVersionRaw](docs/versions/README.md#createartifactversionraw) - Create artifact version
* [deleteArtifactVersion](docs/versions/README.md#deleteartifactversion) - Delete artifact version
* [getArtifactVersion](docs/versions/README.md#getartifactversion) - Get artifact version
* [getArtifactVersionReferences](docs/versions/README.md#getartifactversionreferences) - Get artifact version
* [listArtifactVersions](docs/versions/README.md#listartifactversions) - List artifact versions
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
