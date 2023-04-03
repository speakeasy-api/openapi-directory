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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### artifactRules

* `createArtifactRule` - Create artifact rule
* `deleteArtifactRule` - Delete artifact rule
* `deleteArtifactRules` - Delete artifact rules
* `getArtifactRuleConfig` - Get artifact rule configuration
* `listArtifactRules` - List artifact rules
* `testUpdateArtifact` - Test update artifact
* `updateArtifactRuleConfig` - Update artifact rule configuration

### artifacts

* `createArtifact` - Create artifact
* `deleteArtifact` - Delete artifact
* `getArtifactByGlobalId` - Get artifact by global ID
* `getLatestArtifact` - Get latest artifact
* `listArtifacts` - List all artifact IDs
* `searchArtifacts` - Search for artifacts
* `updateArtifact` - Update artifact
* `updateArtifactState` - Update artifact state

### globalRules

* `createGlobalRule` - Create global rule
* `deleteAllGlobalRules` - Delete all global rules
* `deleteGlobalRule` - Delete global rule
* `getGlobalRuleConfig` - Get global rule configuration
* `listGlobalRules` - List global rules
* `updateGlobalRuleConfig` - Update global rule configuration

### metadata

* `deleteArtifactVersionMetaData` - Delete artifact version metadata
* `getArtifactMetaData` - Get artifact metadata
* `getArtifactMetaDataByContent` - Get artifact metadata by content
* `getArtifactMetaDataByGlobalId` - Get global artifact metadata
* `getArtifactVersionMetaData` - Get artifact version metadata
* `updateArtifactMetaData` - Update artifact metadata
* `updateArtifactVersionMetaData` - Update artifact version metadata

### search

* `searchArtifacts` - Search for artifacts
* `searchVersions` - Search artifact versions

### versions

* `createArtifactVersion` - Create artifact version
* `getArtifactVersion` - Get artifact version
* `listArtifactVersions` - List artifact versions
* `searchVersions` - Search artifact versions
* `updateArtifactVersionState` - Update artifact version state
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
