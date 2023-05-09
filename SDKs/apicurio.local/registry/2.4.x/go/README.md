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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Admin.CreateGlobalRule(ctx, shared.Rule{
        Config: "corrupti",
        Type: shared.RuleTypeEnumValidity.ToPointer(),
    })
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
## Available Resources and Operations


### [Admin](docs/admin/README.md)

* [CreateGlobalRule](docs/admin/README.md#createglobalrule) - Create global rule
* [CreateRoleMapping](docs/admin/README.md#createrolemapping) - Create a new role mapping
* [DeleteAllGlobalRules](docs/admin/README.md#deleteallglobalrules) - Delete all global rules
* [DeleteGlobalRule](docs/admin/README.md#deleteglobalrule) - Delete global rule
* [DeleteRoleMapping](docs/admin/README.md#deleterolemapping) - Delete a role mapping
* [ExportData](docs/admin/README.md#exportdata) - Export registry data
* [GetConfigProperty](docs/admin/README.md#getconfigproperty) - Get configuration property value
* [GetGlobalRuleConfig](docs/admin/README.md#getglobalruleconfig) - Get global rule configuration
* [GetLogConfiguration](docs/admin/README.md#getlogconfiguration) - Get a single logger configuration
* [GetRoleMapping](docs/admin/README.md#getrolemapping) - Return a single role mapping
* [ImportData](docs/admin/README.md#importdata) - Import registry data
* [ListArtifactTypes](docs/admin/README.md#listartifacttypes) - List artifact types
* [ListConfigProperties](docs/admin/README.md#listconfigproperties) - List all configuration properties
* [ListGlobalRules](docs/admin/README.md#listglobalrules) - List global rules
* [ListLogConfigurations](docs/admin/README.md#listlogconfigurations) - List logging configurations
* [ListRoleMappings](docs/admin/README.md#listrolemappings) - List all role mappings
* [RemoveLogConfiguration](docs/admin/README.md#removelogconfiguration) - Removes logger configuration
* [ResetConfigProperty](docs/admin/README.md#resetconfigproperty) - Reset a configuration property
* [SetLogConfiguration](docs/admin/README.md#setlogconfiguration) - Set a logger's configuration
* [UpdateConfigProperty](docs/admin/README.md#updateconfigproperty) - Update a configuration property
* [UpdateGlobalRuleConfig](docs/admin/README.md#updateglobalruleconfig) - Update global rule configuration
* [UpdateRoleMapping](docs/admin/README.md#updaterolemapping) - Update a role mapping

### [ArtifactType](docs/artifacttype/README.md)

* [ListArtifactTypes](docs/artifacttype/README.md#listartifacttypes) - List artifact types

### [ArtifactRules](docs/artifactrules/README.md)

* [CreateArtifactRule](docs/artifactrules/README.md#createartifactrule) - Create artifact rule
* [DeleteArtifactRule](docs/artifactrules/README.md#deleteartifactrule) - Delete artifact rule
* [DeleteArtifactRules](docs/artifactrules/README.md#deleteartifactrules) - Delete artifact rules
* [GetArtifactRuleConfig](docs/artifactrules/README.md#getartifactruleconfig) - Get artifact rule configuration
* [ListArtifactRules](docs/artifactrules/README.md#listartifactrules) - List artifact rules
* [TestUpdateArtifact](docs/artifactrules/README.md#testupdateartifact) - Test update artifact
* [UpdateArtifactRuleConfig](docs/artifactrules/README.md#updateartifactruleconfig) - Update artifact rule configuration

### [Artifacts](docs/artifacts/README.md)

* [CreateArtifactJSON](docs/artifacts/README.md#createartifactjson) - Create artifact
* [CreateArtifactRaw](docs/artifacts/README.md#createartifactraw) - Create artifact
* [DeleteArtifact](docs/artifacts/README.md#deleteartifact) - Delete artifact
* [DeleteArtifactsInGroup](docs/artifacts/README.md#deleteartifactsingroup) - Delete artifacts in group
* [GetContentByGlobalID](docs/artifacts/README.md#getcontentbyglobalid) - Get artifact by global ID
* [GetContentByHash](docs/artifacts/README.md#getcontentbyhash) - Get artifact content by SHA-256 hash
* [GetContentByID](docs/artifacts/README.md#getcontentbyid) - Get artifact content by ID
* [GetLatestArtifact](docs/artifacts/README.md#getlatestartifact) - Get latest artifact
* [ListArtifactsInGroup](docs/artifacts/README.md#listartifactsingroup) - List artifacts in group
* [ReferencesByContentHash](docs/artifacts/README.md#referencesbycontenthash) - List artifact references by hash
* [ReferencesByContentID](docs/artifacts/README.md#referencesbycontentid) - List artifact references by content ID
* [ReferencesByGlobalID](docs/artifacts/README.md#referencesbyglobalid) - List artifact references by global ID
* [SearchArtifacts](docs/artifacts/README.md#searchartifacts) - Search for artifacts
* [SearchArtifactsByContent](docs/artifacts/README.md#searchartifactsbycontent) - Search for artifacts by content
* [UpdateArtifactState](docs/artifacts/README.md#updateartifactstate) - Update artifact state
* [UpdateArtifactJSON](docs/artifacts/README.md#updateartifactjson) - Update artifact
* [UpdateArtifactRaw](docs/artifacts/README.md#updateartifactraw) - Update artifact

### [GlobalRules](docs/globalrules/README.md)

* [CreateGlobalRule](docs/globalrules/README.md#createglobalrule) - Create global rule
* [DeleteAllGlobalRules](docs/globalrules/README.md#deleteallglobalrules) - Delete all global rules
* [DeleteGlobalRule](docs/globalrules/README.md#deleteglobalrule) - Delete global rule
* [GetGlobalRuleConfig](docs/globalrules/README.md#getglobalruleconfig) - Get global rule configuration
* [ListGlobalRules](docs/globalrules/README.md#listglobalrules) - List global rules
* [UpdateGlobalRuleConfig](docs/globalrules/README.md#updateglobalruleconfig) - Update global rule configuration

### [Groups](docs/groups/README.md)

* [CreateGroup](docs/groups/README.md#creategroup) - Create a new group
* [DeleteGroupByID](docs/groups/README.md#deletegroupbyid) - Delete a group by the specified ID.
* [GetGroupByID](docs/groups/README.md#getgroupbyid) - Get a group by the specified ID.
* [ListGroups](docs/groups/README.md#listgroups) - List groups

### [Metadata](docs/metadata/README.md)

* [DeleteArtifactVersionMetaData](docs/metadata/README.md#deleteartifactversionmetadata) - Delete artifact version metadata
* [GetArtifactMetaData](docs/metadata/README.md#getartifactmetadata) - Get artifact metadata
* [GetArtifactOwner](docs/metadata/README.md#getartifactowner) - Get artifact owner
* [GetArtifactVersionMetaData](docs/metadata/README.md#getartifactversionmetadata) - Get artifact version metadata
* [GetArtifactVersionMetaDataByContentJSON](docs/metadata/README.md#getartifactversionmetadatabycontentjson) - Get artifact version metadata by content
* [GetArtifactVersionMetaDataByContentRaw](docs/metadata/README.md#getartifactversionmetadatabycontentraw) - Get artifact version metadata by content
* [UpdateArtifactMetaData](docs/metadata/README.md#updateartifactmetadata) - Update artifact metadata
* [UpdateArtifactOwner](docs/metadata/README.md#updateartifactowner) - Update artifact owner
* [UpdateArtifactVersionMetaData](docs/metadata/README.md#updateartifactversionmetadata) - Update artifact version metadata

### [Search](docs/search/README.md)

* [SearchArtifacts](docs/search/README.md#searchartifacts) - Search for artifacts
* [SearchArtifactsByContent](docs/search/README.md#searchartifactsbycontent) - Search for artifacts by content

### [System](docs/system/README.md)

* [GetResourceLimits](docs/system/README.md#getresourcelimits) - Get resource limits information
* [GetSystemInfo](docs/system/README.md#getsysteminfo) - Get system information

### [Users](docs/users/README.md)

* [GetCurrentUserInfo](docs/users/README.md#getcurrentuserinfo) - Get current user

### [Versions](docs/versions/README.md)

* [CreateArtifactVersionJSON](docs/versions/README.md#createartifactversionjson) - Create artifact version
* [CreateArtifactVersionRaw](docs/versions/README.md#createartifactversionraw) - Create artifact version
* [DeleteArtifactVersion](docs/versions/README.md#deleteartifactversion) - Delete artifact version
* [GetArtifactVersion](docs/versions/README.md#getartifactversion) - Get artifact version
* [GetArtifactVersionReferences](docs/versions/README.md#getartifactversionreferences) - Get artifact version
* [ListArtifactVersions](docs/versions/README.md#listartifactversions) - List artifact versions
* [UpdateArtifactVersionState](docs/versions/README.md#updateartifactversionstate) - Update artifact version state
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
