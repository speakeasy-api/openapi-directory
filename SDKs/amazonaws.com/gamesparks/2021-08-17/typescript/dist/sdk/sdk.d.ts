import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://gamesparks.{region}.amazonaws.com", "https://gamesparks.{region}.amazonaws.com", "http://gamesparks.{region}.amazonaws.com.cn", "https://gamesparks.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <p/>
 *
 * @see {@link https://docs.aws.amazon.com/gamesparks/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     *  Creates a new game with an empty configuration. After creating your game, you can update the configuration using <code>UpdateGameConfiguration</code> or <code>ImportGameConfiguration</code>.
     */
    createGame(req: operations.CreateGameRequest, config?: AxiosRequestConfig): Promise<operations.CreateGameResponse>;
    /**
     * Creates a snapshot of the game configuration.
     */
    createSnapshot(req: operations.CreateSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.CreateSnapshotResponse>;
    /**
     * Creates a new stage for stage-by-stage game development and deployment.
     */
    createStage(req: operations.CreateStageRequest, config?: AxiosRequestConfig): Promise<operations.CreateStageResponse>;
    /**
     * Deletes a game.
     */
    deleteGame(req: operations.DeleteGameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGameResponse>;
    /**
     * Deletes a stage from a game, along with the associated game runtime.
     */
    deleteStage(req: operations.DeleteStageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStageResponse>;
    /**
     * <p>Disconnects a player from the game runtime.</p> <p> If a player has multiple connections, this operation attempts to close all of them. </p>
     */
    disconnectPlayer(req: operations.DisconnectPlayerRequest, config?: AxiosRequestConfig): Promise<operations.DisconnectPlayerResponse>;
    /**
     * Exports a game configuration snapshot.
     */
    exportSnapshot(req: operations.ExportSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.ExportSnapshotResponse>;
    /**
     * Gets details about a specified extension.
     */
    getExtension(req: operations.GetExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetExtensionResponse>;
    /**
     * Gets details about a specified extension version.
     */
    getExtensionVersion(req: operations.GetExtensionVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetExtensionVersionResponse>;
    /**
     * Gets details about a game.
     */
    getGame(req: operations.GetGameRequest, config?: AxiosRequestConfig): Promise<operations.GetGameResponse>;
    /**
     * Gets the configuration of the game.
     */
    getGameConfiguration(req: operations.GetGameConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetGameConfigurationResponse>;
    /**
     * Gets details about a job that is generating code for a snapshot.
     */
    getGeneratedCodeJob(req: operations.GetGeneratedCodeJobRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneratedCodeJobResponse>;
    /**
     * <p>Gets the status of a player's connection to the game runtime.</p> <p> It's possible for a single player to have multiple connections to the game runtime. If a player is not connected, this operation returns an empty list. </p>
     */
    getPlayerConnectionStatus(req: operations.GetPlayerConnectionStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetPlayerConnectionStatusResponse>;
    /**
     * Gets a copy of the game configuration in a snapshot.
     */
    getSnapshot(req: operations.GetSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GetSnapshotResponse>;
    /**
     * Gets information about a stage.
     */
    getStage(req: operations.GetStageRequest, config?: AxiosRequestConfig): Promise<operations.GetStageResponse>;
    /**
     * Gets information about a stage deployment.
     */
    getStageDeployment(req: operations.GetStageDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.GetStageDeploymentResponse>;
    /**
     * <p>Imports a game configuration.</p> <p> This operation replaces the current configuration of the game with the provided input. This is not a reversible operation. If you want to preserve the previous configuration, use <code>CreateSnapshot</code> to make a new snapshot before importing. </p>
     */
    importGameConfiguration(req: operations.ImportGameConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.ImportGameConfigurationResponse>;
    /**
     * <p>Gets a paginated list of available versions for the extension.</p> <p> Each time an API change is made to an extension, the version is incremented. The list retrieved by this operation shows the versions that are currently available. </p>
     */
    listExtensionVersions(req: operations.ListExtensionVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListExtensionVersionsResponse>;
    /**
     * <p>Gets a paginated list of available extensions.</p> <p> Extensions provide features that games can use from scripts. </p>
     */
    listExtensions(req: operations.ListExtensionsRequest, config?: AxiosRequestConfig): Promise<operations.ListExtensionsResponse>;
    /**
     * Gets a paginated list of games.
     */
    listGames(req: operations.ListGamesRequest, config?: AxiosRequestConfig): Promise<operations.ListGamesResponse>;
    /**
     * Gets a paginated list of code generation jobs for a snapshot.
     */
    listGeneratedCodeJobs(req: operations.ListGeneratedCodeJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListGeneratedCodeJobsResponse>;
    /**
     * Gets a paginated list of snapshot summaries from the game.
     */
    listSnapshots(req: operations.ListSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.ListSnapshotsResponse>;
    /**
     * Gets a paginated list of stage deployment summaries from the game.
     */
    listStageDeployments(req: operations.ListStageDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.ListStageDeploymentsResponse>;
    /**
     * Gets a paginated list of stage summaries from the game.
     */
    listStages(req: operations.ListStagesRequest, config?: AxiosRequestConfig): Promise<operations.ListStagesResponse>;
    /**
     * Lists the tags associated with a GameSparks resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     *  Starts an asynchronous process that generates client code for system-defined and custom messages. The resulting code is collected as a .zip file and uploaded to a pre-signed Amazon S3 URL.
     */
    startGeneratedCodeJob(req: operations.StartGeneratedCodeJobRequest, config?: AxiosRequestConfig): Promise<operations.StartGeneratedCodeJobResponse>;
    /**
     * <p>Deploys a snapshot to the stage and creates a new game runtime.</p> <p> After you call this operation, you can check the deployment status by using <code>GetStageDeployment</code>. </p> <p> If there are any players connected to the previous game runtime, then both runtimes persist. Existing connections to the previous runtime are maintained. When players disconnect and reconnect, they connect to the new runtime. After there are no connections to the previous game runtime, it is deleted. </p>
     */
    startStageDeployment(req: operations.StartStageDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.StartStageDeploymentResponse>;
    /**
     * Adds tags to a GameSparks resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes tags from a GameSparks resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates details of the game.
     */
    updateGame(req: operations.UpdateGameRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGameResponse>;
    /**
     * Updates one or more sections of the game configuration.
     */
    updateGameConfiguration(req: operations.UpdateGameConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGameConfigurationResponse>;
    /**
     * Updates the metadata of a GameSparks snapshot.
     */
    updateSnapshot(req: operations.UpdateSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSnapshotResponse>;
    /**
     * Updates the metadata of a stage.
     */
    updateStage(req: operations.UpdateStageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStageResponse>;
}
