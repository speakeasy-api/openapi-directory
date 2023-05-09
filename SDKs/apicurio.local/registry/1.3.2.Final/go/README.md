# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apicurio.local/registry/1.3.2.Final/go
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
    res, err := s.ArtifactRules.CreateArtifactRule(ctx, operations.CreateArtifactRuleRequest{
        Rule: shared.Rule{
            Config: "corrupti",
            Type: shared.RuleTypeEnumValidity.ToPointer(),
        },
        ArtifactID: "provident",
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


### [ArtifactRules](docs/artifactrules/README.md)

* [CreateArtifactRule](docs/artifactrules/README.md#createartifactrule) - Create artifact rule
* [DeleteArtifactRule](docs/artifactrules/README.md#deleteartifactrule) - Delete artifact rule
* [DeleteArtifactRules](docs/artifactrules/README.md#deleteartifactrules) - Delete artifact rules
* [GetArtifactRuleConfig](docs/artifactrules/README.md#getartifactruleconfig) - Get artifact rule configuration
* [ListArtifactRules](docs/artifactrules/README.md#listartifactrules) - List artifact rules
* [TestUpdateArtifact](docs/artifactrules/README.md#testupdateartifact) - Test update artifact
* [UpdateArtifactRuleConfig](docs/artifactrules/README.md#updateartifactruleconfig) - Update artifact rule configuration

### [Artifacts](docs/artifacts/README.md)

* [CreateArtifact](docs/artifacts/README.md#createartifact) - Create artifact
* [DeleteArtifact](docs/artifacts/README.md#deleteartifact) - Delete artifact
* [GetArtifactByGlobalID](docs/artifacts/README.md#getartifactbyglobalid) - Get artifact by global ID
* [GetLatestArtifact](docs/artifacts/README.md#getlatestartifact) - Get latest artifact
* [ListArtifacts](docs/artifacts/README.md#listartifacts) - List all artifact IDs
* [SearchArtifacts](docs/artifacts/README.md#searchartifacts) - Search for artifacts
* [UpdateArtifact](docs/artifacts/README.md#updateartifact) - Update artifact
* [UpdateArtifactState](docs/artifacts/README.md#updateartifactstate) - Update artifact state

### [GlobalRules](docs/globalrules/README.md)

* [CreateGlobalRule](docs/globalrules/README.md#createglobalrule) - Create global rule
* [DeleteAllGlobalRules](docs/globalrules/README.md#deleteallglobalrules) - Delete all global rules
* [DeleteGlobalRule](docs/globalrules/README.md#deleteglobalrule) - Delete global rule
* [GetGlobalRuleConfig](docs/globalrules/README.md#getglobalruleconfig) - Get global rule configuration
* [ListGlobalRules](docs/globalrules/README.md#listglobalrules) - List global rules
* [UpdateGlobalRuleConfig](docs/globalrules/README.md#updateglobalruleconfig) - Update global rule configuration

### [Metadata](docs/metadata/README.md)

* [DeleteArtifactVersionMetaData](docs/metadata/README.md#deleteartifactversionmetadata) - Delete artifact version metadata
* [GetArtifactMetaData](docs/metadata/README.md#getartifactmetadata) - Get artifact metadata
* [GetArtifactMetaDataByContent](docs/metadata/README.md#getartifactmetadatabycontent) - Get artifact metadata by content
* [GetArtifactMetaDataByGlobalID](docs/metadata/README.md#getartifactmetadatabyglobalid) - Get global artifact metadata
* [GetArtifactVersionMetaData](docs/metadata/README.md#getartifactversionmetadata) - Get artifact version metadata
* [UpdateArtifactMetaData](docs/metadata/README.md#updateartifactmetadata) - Update artifact metadata
* [UpdateArtifactVersionMetaData](docs/metadata/README.md#updateartifactversionmetadata) - Update artifact version metadata

### [Search](docs/search/README.md)

* [SearchArtifacts](docs/search/README.md#searchartifacts) - Search for artifacts
* [SearchVersions](docs/search/README.md#searchversions) - Search artifact versions

### [Versions](docs/versions/README.md)

* [CreateArtifactVersion](docs/versions/README.md#createartifactversion) - Create artifact version
* [GetArtifactVersion](docs/versions/README.md#getartifactversion) - Get artifact version
* [ListArtifactVersions](docs/versions/README.md#listartifactversions) - List artifact versions
* [SearchVersions](docs/versions/README.md#searchversions) - Search artifact versions
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
