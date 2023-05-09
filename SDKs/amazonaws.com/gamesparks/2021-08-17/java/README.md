# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGameRequest;
import org.openapis.openapi.models.operations.CreateGameRequestBody;
import org.openapis.openapi.models.operations.CreateGameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateGameRequest req = new CreateGameRequest(                new CreateGameRequestBody("provident") {{
                                clientToken = "distinctio";
                                description = "quibusdam";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("nulla", "corrupti");
                                    put("illum", "vel");
                                    put("error", "deserunt");
                                }};
                            }};) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            CreateGameResponse res = sdk.createGame(req);

            if (res.createGameResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createGame](docs/sdk/README.md#creategame) -  Creates a new game with an empty configuration. After creating your game, you can update the configuration using <code>UpdateGameConfiguration</code> or <code>ImportGameConfiguration</code>. 
* [createSnapshot](docs/sdk/README.md#createsnapshot) - Creates a snapshot of the game configuration.
* [createStage](docs/sdk/README.md#createstage) - Creates a new stage for stage-by-stage game development and deployment.
* [deleteGame](docs/sdk/README.md#deletegame) - Deletes a game.
* [deleteStage](docs/sdk/README.md#deletestage) - Deletes a stage from a game, along with the associated game runtime.
* [disconnectPlayer](docs/sdk/README.md#disconnectplayer) - <p>Disconnects a player from the game runtime.</p> <p> If a player has multiple connections, this operation attempts to close all of them. </p>
* [exportSnapshot](docs/sdk/README.md#exportsnapshot) - Exports a game configuration snapshot.
* [getExtension](docs/sdk/README.md#getextension) - Gets details about a specified extension.
* [getExtensionVersion](docs/sdk/README.md#getextensionversion) - Gets details about a specified extension version.
* [getGame](docs/sdk/README.md#getgame) - Gets details about a game.
* [getGameConfiguration](docs/sdk/README.md#getgameconfiguration) - Gets the configuration of the game.
* [getGeneratedCodeJob](docs/sdk/README.md#getgeneratedcodejob) - Gets details about a job that is generating code for a snapshot.
* [getPlayerConnectionStatus](docs/sdk/README.md#getplayerconnectionstatus) - <p>Gets the status of a player's connection to the game runtime.</p> <p> It's possible for a single player to have multiple connections to the game runtime. If a player is not connected, this operation returns an empty list. </p>
* [getSnapshot](docs/sdk/README.md#getsnapshot) - Gets a copy of the game configuration in a snapshot.
* [getStage](docs/sdk/README.md#getstage) - Gets information about a stage.
* [getStageDeployment](docs/sdk/README.md#getstagedeployment) - Gets information about a stage deployment.
* [importGameConfiguration](docs/sdk/README.md#importgameconfiguration) - <p>Imports a game configuration.</p> <p> This operation replaces the current configuration of the game with the provided input. This is not a reversible operation. If you want to preserve the previous configuration, use <code>CreateSnapshot</code> to make a new snapshot before importing. </p>
* [listExtensionVersions](docs/sdk/README.md#listextensionversions) - <p>Gets a paginated list of available versions for the extension.</p> <p> Each time an API change is made to an extension, the version is incremented. The list retrieved by this operation shows the versions that are currently available. </p>
* [listExtensions](docs/sdk/README.md#listextensions) - <p>Gets a paginated list of available extensions.</p> <p> Extensions provide features that games can use from scripts. </p>
* [listGames](docs/sdk/README.md#listgames) - Gets a paginated list of games.
* [listGeneratedCodeJobs](docs/sdk/README.md#listgeneratedcodejobs) - Gets a paginated list of code generation jobs for a snapshot.
* [listSnapshots](docs/sdk/README.md#listsnapshots) - Gets a paginated list of snapshot summaries from the game.
* [listStageDeployments](docs/sdk/README.md#liststagedeployments) - Gets a paginated list of stage deployment summaries from the game.
* [listStages](docs/sdk/README.md#liststages) - Gets a paginated list of stage summaries from the game.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags associated with a GameSparks resource.
* [startGeneratedCodeJob](docs/sdk/README.md#startgeneratedcodejob) -  Starts an asynchronous process that generates client code for system-defined and custom messages. The resulting code is collected as a .zip file and uploaded to a pre-signed Amazon S3 URL. 
* [startStageDeployment](docs/sdk/README.md#startstagedeployment) - <p>Deploys a snapshot to the stage and creates a new game runtime.</p> <p> After you call this operation, you can check the deployment status by using <code>GetStageDeployment</code>. </p> <p> If there are any players connected to the previous game runtime, then both runtimes persist. Existing connections to the previous runtime are maintained. When players disconnect and reconnect, they connect to the new runtime. After there are no connections to the previous game runtime, it is deleted. </p>
* [tagResource](docs/sdk/README.md#tagresource) - Adds tags to a GameSparks resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags from a GameSparks resource.
* [updateGame](docs/sdk/README.md#updategame) - Updates details of the game.
* [updateGameConfiguration](docs/sdk/README.md#updategameconfiguration) - Updates one or more sections of the game configuration.
* [updateSnapshot](docs/sdk/README.md#updatesnapshot) - Updates the metadata of a GameSparks snapshot.
* [updateStage](docs/sdk/README.md#updatestage) - Updates the metadata of a stage.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
