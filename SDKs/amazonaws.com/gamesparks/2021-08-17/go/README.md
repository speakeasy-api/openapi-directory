# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/gamesparks/2021-08-17/go
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
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateGame(ctx, operations.CreateGameRequest{
        RequestBody: operations.CreateGameRequestBody{
            ClientToken: sdk.String("corrupti"),
            Description: sdk.String("provident"),
            GameName: "distinctio",
            Tags: map[string]string{
                "unde": "nulla",
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
            },
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGameResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateGame](docs/sdk/README.md#creategame) -  Creates a new game with an empty configuration. After creating your game, you can update the configuration using <code>UpdateGameConfiguration</code> or <code>ImportGameConfiguration</code>. 
* [CreateSnapshot](docs/sdk/README.md#createsnapshot) - Creates a snapshot of the game configuration.
* [CreateStage](docs/sdk/README.md#createstage) - Creates a new stage for stage-by-stage game development and deployment.
* [DeleteGame](docs/sdk/README.md#deletegame) - Deletes a game.
* [DeleteStage](docs/sdk/README.md#deletestage) - Deletes a stage from a game, along with the associated game runtime.
* [DisconnectPlayer](docs/sdk/README.md#disconnectplayer) - <p>Disconnects a player from the game runtime.</p> <p> If a player has multiple connections, this operation attempts to close all of them. </p>
* [ExportSnapshot](docs/sdk/README.md#exportsnapshot) - Exports a game configuration snapshot.
* [GetExtension](docs/sdk/README.md#getextension) - Gets details about a specified extension.
* [GetExtensionVersion](docs/sdk/README.md#getextensionversion) - Gets details about a specified extension version.
* [GetGame](docs/sdk/README.md#getgame) - Gets details about a game.
* [GetGameConfiguration](docs/sdk/README.md#getgameconfiguration) - Gets the configuration of the game.
* [GetGeneratedCodeJob](docs/sdk/README.md#getgeneratedcodejob) - Gets details about a job that is generating code for a snapshot.
* [GetPlayerConnectionStatus](docs/sdk/README.md#getplayerconnectionstatus) - <p>Gets the status of a player's connection to the game runtime.</p> <p> It's possible for a single player to have multiple connections to the game runtime. If a player is not connected, this operation returns an empty list. </p>
* [GetSnapshot](docs/sdk/README.md#getsnapshot) - Gets a copy of the game configuration in a snapshot.
* [GetStage](docs/sdk/README.md#getstage) - Gets information about a stage.
* [GetStageDeployment](docs/sdk/README.md#getstagedeployment) - Gets information about a stage deployment.
* [ImportGameConfiguration](docs/sdk/README.md#importgameconfiguration) - <p>Imports a game configuration.</p> <p> This operation replaces the current configuration of the game with the provided input. This is not a reversible operation. If you want to preserve the previous configuration, use <code>CreateSnapshot</code> to make a new snapshot before importing. </p>
* [ListExtensionVersions](docs/sdk/README.md#listextensionversions) - <p>Gets a paginated list of available versions for the extension.</p> <p> Each time an API change is made to an extension, the version is incremented. The list retrieved by this operation shows the versions that are currently available. </p>
* [ListExtensions](docs/sdk/README.md#listextensions) - <p>Gets a paginated list of available extensions.</p> <p> Extensions provide features that games can use from scripts. </p>
* [ListGames](docs/sdk/README.md#listgames) - Gets a paginated list of games.
* [ListGeneratedCodeJobs](docs/sdk/README.md#listgeneratedcodejobs) - Gets a paginated list of code generation jobs for a snapshot.
* [ListSnapshots](docs/sdk/README.md#listsnapshots) - Gets a paginated list of snapshot summaries from the game.
* [ListStageDeployments](docs/sdk/README.md#liststagedeployments) - Gets a paginated list of stage deployment summaries from the game.
* [ListStages](docs/sdk/README.md#liststages) - Gets a paginated list of stage summaries from the game.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags associated with a GameSparks resource.
* [StartGeneratedCodeJob](docs/sdk/README.md#startgeneratedcodejob) -  Starts an asynchronous process that generates client code for system-defined and custom messages. The resulting code is collected as a .zip file and uploaded to a pre-signed Amazon S3 URL. 
* [StartStageDeployment](docs/sdk/README.md#startstagedeployment) - <p>Deploys a snapshot to the stage and creates a new game runtime.</p> <p> After you call this operation, you can check the deployment status by using <code>GetStageDeployment</code>. </p> <p> If there are any players connected to the previous game runtime, then both runtimes persist. Existing connections to the previous runtime are maintained. When players disconnect and reconnect, they connect to the new runtime. After there are no connections to the previous game runtime, it is deleted. </p>
* [TagResource](docs/sdk/README.md#tagresource) - Adds tags to a GameSparks resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes tags from a GameSparks resource.
* [UpdateGame](docs/sdk/README.md#updategame) - Updates details of the game.
* [UpdateGameConfiguration](docs/sdk/README.md#updategameconfiguration) - Updates one or more sections of the game configuration.
* [UpdateSnapshot](docs/sdk/README.md#updatesnapshot) - Updates the metadata of a GameSparks snapshot.
* [UpdateStage](docs/sdk/README.md#updatestage) - Updates the metadata of a stage.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
