# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apicurio.local/registry/2.4.x/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/apicurio.local/registry/2.4.x/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.Rule,
  CreateGlobalRuleResponse
} from "openapi/dist/sdk/models/operations";
import {
  RuleTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.Rule = {
  config: "corrupti",
  type: RuleTypeEnum.Validity,
};

sdk.admin.createGlobalRule(req).then((res: CreateGlobalRuleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### admin

* `createGlobalRule` - Create global rule
* `createRoleMapping` - Create a new role mapping
* `deleteAllGlobalRules` - Delete all global rules
* `deleteGlobalRule` - Delete global rule
* `deleteRoleMapping` - Delete a role mapping
* `exportData` - Export registry data
* `getConfigProperty` - Get configuration property value
* `getGlobalRuleConfig` - Get global rule configuration
* `getLogConfiguration` - Get a single logger configuration
* `getRoleMapping` - Return a single role mapping
* `importData` - Import registry data
* `listArtifactTypes` - List artifact types
* `listConfigProperties` - List all configuration properties
* `listGlobalRules` - List global rules
* `listLogConfigurations` - List logging configurations
* `listRoleMappings` - List all role mappings
* `removeLogConfiguration` - Removes logger configuration
* `resetConfigProperty` - Reset a configuration property
* `setLogConfiguration` - Set a logger's configuration
* `updateConfigProperty` - Update a configuration property
* `updateGlobalRuleConfig` - Update global rule configuration
* `updateRoleMapping` - Update a role mapping

### artifactType

* `listArtifactTypes` - List artifact types

### artifactRules

* `createArtifactRule` - Create artifact rule
* `deleteArtifactRule` - Delete artifact rule
* `deleteArtifactRules` - Delete artifact rules
* `getArtifactRuleConfig` - Get artifact rule configuration
* `listArtifactRules` - List artifact rules
* `testUpdateArtifact` - Test update artifact
* `updateArtifactRuleConfig` - Update artifact rule configuration

### artifacts

* `createArtifactJson` - Create artifact
* `createArtifactRaw` - Create artifact
* `deleteArtifact` - Delete artifact
* `deleteArtifactsInGroup` - Delete artifacts in group
* `getContentByGlobalId` - Get artifact by global ID
* `getContentByHash` - Get artifact content by SHA-256 hash
* `getContentById` - Get artifact content by ID
* `getLatestArtifact` - Get latest artifact
* `listArtifactsInGroup` - List artifacts in group
* `referencesByContentHash` - List artifact references by hash
* `referencesByContentId` - List artifact references by content ID
* `referencesByGlobalId` - List artifact references by global ID
* `searchArtifacts` - Search for artifacts
* `searchArtifactsByContent` - Search for artifacts by content
* `updateArtifactState` - Update artifact state
* `updateArtifactJson` - Update artifact
* `updateArtifactRaw` - Update artifact

### globalRules

* `createGlobalRule` - Create global rule
* `deleteAllGlobalRules` - Delete all global rules
* `deleteGlobalRule` - Delete global rule
* `getGlobalRuleConfig` - Get global rule configuration
* `listGlobalRules` - List global rules
* `updateGlobalRuleConfig` - Update global rule configuration

### groups

* `createGroup` - Create a new group
* `deleteGroupById` - Delete a group by the specified ID.
* `getGroupById` - Get a group by the specified ID.
* `listGroups` - List groups

### metadata

* `deleteArtifactVersionMetaData` - Delete artifact version metadata
* `getArtifactMetaData` - Get artifact metadata
* `getArtifactOwner` - Get artifact owner
* `getArtifactVersionMetaData` - Get artifact version metadata
* `getArtifactVersionMetaDataByContent` - Get artifact version metadata by content
* `updateArtifactMetaData` - Update artifact metadata
* `updateArtifactOwner` - Update artifact owner
* `updateArtifactVersionMetaData` - Update artifact version metadata

### search

* `searchArtifacts` - Search for artifacts
* `searchArtifactsByContent` - Search for artifacts by content

### system

* `getResourceLimits` - Get resource limits information
* `getSystemInfo` - Get system information

### users

* `getCurrentUserInfo` - Get current user

### versions

* `createArtifactVersionJson` - Create artifact version
* `createArtifactVersionRaw` - Create artifact version
* `getArtifactVersion` - Get artifact version
* `getArtifactVersionReferences` - Get artifact version
* `listArtifactVersions` - List artifact versions
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

