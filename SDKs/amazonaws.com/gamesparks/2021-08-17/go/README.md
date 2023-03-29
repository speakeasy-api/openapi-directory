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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateGameRequest{
        Headers: operations.CreateGameHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateGameRequestBody{
            ClientToken: "nulla",
            Description: "nihil",
            GameName: "fuga",
            Tags: map[string]string{
                "eum": "iusto",
                "ullam": "saepe",
                "inventore": "sapiente",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateGame(ctx, req)
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
## SDK Available Operations

### SDK SDK

* `CreateGame` -  Creates a new game with an empty configuration. After creating your game, you can update the configuration using <code>UpdateGameConfiguration</code> or <code>ImportGameConfiguration</code>. 
* `CreateSnapshot` - Creates a snapshot of the game configuration.
* `CreateStage` - Creates a new stage for stage-by-stage game development and deployment.
* `DeleteGame` - Deletes a game.
* `DeleteStage` - Deletes a stage from a game, along with the associated game runtime.
* `DisconnectPlayer` - <p>Disconnects a player from the game runtime.</p> <p> If a player has multiple connections, this operation attempts to close all of them. </p>
* `ExportSnapshot` - Exports a game configuration snapshot.
* `GetExtension` - Gets details about a specified extension.
* `GetExtensionVersion` - Gets details about a specified extension version.
* `GetGame` - Gets details about a game.
* `GetGameConfiguration` - Gets the configuration of the game.
* `GetGeneratedCodeJob` - Gets details about a job that is generating code for a snapshot.
* `GetPlayerConnectionStatus` - <p>Gets the status of a player's connection to the game runtime.</p> <p> It's possible for a single player to have multiple connections to the game runtime. If a player is not connected, this operation returns an empty list. </p>
* `GetSnapshot` - Gets a copy of the game configuration in a snapshot.
* `GetStage` - Gets information about a stage.
* `GetStageDeployment` - Gets information about a stage deployment.
* `ImportGameConfiguration` - <p>Imports a game configuration.</p> <p> This operation replaces the current configuration of the game with the provided input. This is not a reversible operation. If you want to preserve the previous configuration, use <code>CreateSnapshot</code> to make a new snapshot before importing. </p>
* `ListExtensionVersions` - <p>Gets a paginated list of available versions for the extension.</p> <p> Each time an API change is made to an extension, the version is incremented. The list retrieved by this operation shows the versions that are currently available. </p>
* `ListExtensions` - <p>Gets a paginated list of available extensions.</p> <p> Extensions provide features that games can use from scripts. </p>
* `ListGames` - Gets a paginated list of games.
* `ListGeneratedCodeJobs` - Gets a paginated list of code generation jobs for a snapshot.
* `ListSnapshots` - Gets a paginated list of snapshot summaries from the game.
* `ListStageDeployments` - Gets a paginated list of stage deployment summaries from the game.
* `ListStages` - Gets a paginated list of stage summaries from the game.
* `ListTagsForResource` - Lists the tags associated with a GameSparks resource.
* `StartGeneratedCodeJob` -  Starts an asynchronous process that generates client code for system-defined and custom messages. The resulting code is collected as a .zip file and uploaded to a pre-signed Amazon S3 URL. 
* `StartStageDeployment` - <p>Deploys a snapshot to the stage and creates a new game runtime.</p> <p> After you call this operation, you can check the deployment status by using <code>GetStageDeployment</code>. </p> <p> If there are any players connected to the previous game runtime, then both runtimes persist. Existing connections to the previous runtime are maintained. When players disconnect and reconnect, they connect to the new runtime. After there are no connections to the previous game runtime, it is deleted. </p>
* `TagResource` - Adds tags to a GameSparks resource.
* `UntagResource` - Removes tags from a GameSparks resource.
* `UpdateGame` - Updates details of the game.
* `UpdateGameConfiguration` - Updates one or more sections of the game configuration.
* `UpdateSnapshot` - Updates the metadata of a GameSparks snapshot.
* `UpdateStage` - Updates the metadata of a stage.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
