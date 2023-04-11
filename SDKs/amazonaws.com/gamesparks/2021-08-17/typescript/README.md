# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/gamesparks/2021-08-17/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/gamesparks/2021-08-17/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateGameRequest,
  CreateGameResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateGameRequest = {
  requestBody: {
    clientToken: "corrupti",
    description: "provident",
    gameName: "distinctio",
    tags: {
      "unde": "nulla",
      "corrupti": "illum",
      "vel": "error",
      "deserunt": "suscipit",
    },
  },
  xAmzAlgorithm: "iure",
  xAmzContentSha256: "magnam",
  xAmzCredential: "debitis",
  xAmzDate: "ipsa",
  xAmzSecurityToken: "delectus",
  xAmzSignature: "tempora",
  xAmzSignedHeaders: "suscipit",
};

sdk.createGame(req).then((res: CreateGameResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createGame` -  Creates a new game with an empty configuration. After creating your game, you can update the configuration using <code>UpdateGameConfiguration</code> or <code>ImportGameConfiguration</code>. 
* `createSnapshot` - Creates a snapshot of the game configuration.
* `createStage` - Creates a new stage for stage-by-stage game development and deployment.
* `deleteGame` - Deletes a game.
* `deleteStage` - Deletes a stage from a game, along with the associated game runtime.
* `disconnectPlayer` - <p>Disconnects a player from the game runtime.</p> <p> If a player has multiple connections, this operation attempts to close all of them. </p>
* `exportSnapshot` - Exports a game configuration snapshot.
* `getExtension` - Gets details about a specified extension.
* `getExtensionVersion` - Gets details about a specified extension version.
* `getGame` - Gets details about a game.
* `getGameConfiguration` - Gets the configuration of the game.
* `getGeneratedCodeJob` - Gets details about a job that is generating code for a snapshot.
* `getPlayerConnectionStatus` - <p>Gets the status of a player's connection to the game runtime.</p> <p> It's possible for a single player to have multiple connections to the game runtime. If a player is not connected, this operation returns an empty list. </p>
* `getSnapshot` - Gets a copy of the game configuration in a snapshot.
* `getStage` - Gets information about a stage.
* `getStageDeployment` - Gets information about a stage deployment.
* `importGameConfiguration` - <p>Imports a game configuration.</p> <p> This operation replaces the current configuration of the game with the provided input. This is not a reversible operation. If you want to preserve the previous configuration, use <code>CreateSnapshot</code> to make a new snapshot before importing. </p>
* `listExtensionVersions` - <p>Gets a paginated list of available versions for the extension.</p> <p> Each time an API change is made to an extension, the version is incremented. The list retrieved by this operation shows the versions that are currently available. </p>
* `listExtensions` - <p>Gets a paginated list of available extensions.</p> <p> Extensions provide features that games can use from scripts. </p>
* `listGames` - Gets a paginated list of games.
* `listGeneratedCodeJobs` - Gets a paginated list of code generation jobs for a snapshot.
* `listSnapshots` - Gets a paginated list of snapshot summaries from the game.
* `listStageDeployments` - Gets a paginated list of stage deployment summaries from the game.
* `listStages` - Gets a paginated list of stage summaries from the game.
* `listTagsForResource` - Lists the tags associated with a GameSparks resource.
* `startGeneratedCodeJob` -  Starts an asynchronous process that generates client code for system-defined and custom messages. The resulting code is collected as a .zip file and uploaded to a pre-signed Amazon S3 URL. 
* `startStageDeployment` - <p>Deploys a snapshot to the stage and creates a new game runtime.</p> <p> After you call this operation, you can check the deployment status by using <code>GetStageDeployment</code>. </p> <p> If there are any players connected to the previous game runtime, then both runtimes persist. Existing connections to the previous runtime are maintained. When players disconnect and reconnect, they connect to the new runtime. After there are no connections to the previous game runtime, it is deleted. </p>
* `tagResource` - Adds tags to a GameSparks resource.
* `untagResource` - Removes tags from a GameSparks resource.
* `updateGame` - Updates details of the game.
* `updateGameConfiguration` - Updates one or more sections of the game configuration.
* `updateSnapshot` - Updates the metadata of a GameSparks snapshot.
* `updateStage` - Updates the metadata of a stage.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

