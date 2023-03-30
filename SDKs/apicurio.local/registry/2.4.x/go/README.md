# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apicurio.local/registry/2.4.x/go
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

    req := operations.CreateGlobalRuleRequest{
        Request: shared.Rule{
            Config: "corrupti",
            Type: "VALIDITY",
        },
    }

    ctx := context.Background()
    res, err := s.Admin.CreateGlobalRule(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Admin

* `CreateGlobalRule` - Create global rule
* `CreateRoleMapping` - Create a new role mapping
* `DeleteAllGlobalRules` - Delete all global rules
* `DeleteGlobalRule` - Delete global rule
* `DeleteRoleMapping` - Delete a role mapping
* `ExportData` - Export registry data
* `GetConfigProperty` - Get configuration property value
* `GetGlobalRuleConfig` - Get global rule configuration
* `GetLogConfiguration` - Get a single logger configuration
* `GetRoleMapping` - Return a single role mapping
* `ImportData` - Import registry data
* `ListArtifactTypes` - List artifact types
* `ListConfigProperties` - List all configuration properties
* `ListGlobalRules` - List global rules
* `ListLogConfigurations` - List logging configurations
* `ListRoleMappings` - List all role mappings
* `RemoveLogConfiguration` - Removes logger configuration
* `ResetConfigProperty` - Reset a configuration property
* `SetLogConfiguration` - Set a logger's configuration
* `UpdateConfigProperty` - Update a configuration property
* `UpdateGlobalRuleConfig` - Update global rule configuration
* `UpdateRoleMapping` - Update a role mapping

### ArtifactType

* `ListArtifactTypes` - List artifact types

### ArtifactRules

* `CreateArtifactRule` - Create artifact rule
* `DeleteArtifactRule` - Delete artifact rule
* `DeleteArtifactRules` - Delete artifact rules
* `GetArtifactRuleConfig` - Get artifact rule configuration
* `ListArtifactRules` - List artifact rules
* `TestUpdateArtifact` - Test update artifact
* `UpdateArtifactRuleConfig` - Update artifact rule configuration

### Artifacts

* `CreateArtifactJSON` - Create artifact
* `CreateArtifactRaw` - Create artifact
* `DeleteArtifact` - Delete artifact
* `DeleteArtifactsInGroup` - Delete artifacts in group
* `GetContentByGlobalID` - Get artifact by global ID
* `GetContentByHash` - Get artifact content by SHA-256 hash
* `GetContentByID` - Get artifact content by ID
* `GetLatestArtifact` - Get latest artifact
* `ListArtifactsInGroup` - List artifacts in group
* `ReferencesByContentHash` - List artifact references by hash
* `ReferencesByContentID` - List artifact references by content ID
* `ReferencesByGlobalID` - List artifact references by global ID
* `SearchArtifacts` - Search for artifacts
* `SearchArtifactsByContent` - Search for artifacts by content
* `UpdateArtifactState` - Update artifact state
* `UpdateArtifactJSON` - Update artifact
* `UpdateArtifactRaw` - Update artifact

### GlobalRules

* `CreateGlobalRule` - Create global rule
* `DeleteAllGlobalRules` - Delete all global rules
* `DeleteGlobalRule` - Delete global rule
* `GetGlobalRuleConfig` - Get global rule configuration
* `ListGlobalRules` - List global rules
* `UpdateGlobalRuleConfig` - Update global rule configuration

### Groups

* `CreateGroup` - Create a new group
* `DeleteGroupByID` - Delete a group by the specified ID.
* `GetGroupByID` - Get a group by the specified ID.
* `ListGroups` - List groups

### Metadata

* `DeleteArtifactVersionMetaData` - Delete artifact version metadata
* `GetArtifactMetaData` - Get artifact metadata
* `GetArtifactOwner` - Get artifact owner
* `GetArtifactVersionMetaData` - Get artifact version metadata
* `GetArtifactVersionMetaDataByContent` - Get artifact version metadata by content
* `UpdateArtifactMetaData` - Update artifact metadata
* `UpdateArtifactOwner` - Update artifact owner
* `UpdateArtifactVersionMetaData` - Update artifact version metadata

### Search

* `SearchArtifacts` - Search for artifacts
* `SearchArtifactsByContent` - Search for artifacts by content

### System

* `GetResourceLimits` - Get resource limits information
* `GetSystemInfo` - Get system information

### Users

* `GetCurrentUserInfo` - Get current user

### Versions

* `CreateArtifactVersionJSON` - Create artifact version
* `CreateArtifactVersionRaw` - Create artifact version
* `GetArtifactVersion` - Get artifact version
* `GetArtifactVersionReferences` - Get artifact version
* `ListArtifactVersions` - List artifact versions
* `UpdateArtifactVersionState` - Update artifact version state
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
