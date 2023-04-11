import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://iottwinmaker.{region}.amazonaws.com", "https://iottwinmaker.{region}.amazonaws.com", "http://iottwinmaker.{region}.amazonaws.com.cn", "https://iottwinmaker.{region}.amazonaws.com.cn"];
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
 * IoT TwinMaker is a service with which you can build operational digital twins of physical systems. IoT TwinMaker overlays measurements and analysis from real-world sensors, cameras, and enterprise applications so you can create data visualizations to monitor your physical factory, building, or industrial plant. You can use this real-world data to monitor operations and diagnose and repair errors.
 *
 * @see {@link https://docs.aws.amazon.com/iottwinmaker/} - Amazon Web Services documentation
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
     * Sets values for multiple time series properties.
     */
    batchPutPropertyValues(req: operations.BatchPutPropertyValuesRequest, config?: AxiosRequestConfig): Promise<operations.BatchPutPropertyValuesResponse>;
    /**
     * Creates a component type.
     */
    createComponentType(req: operations.CreateComponentTypeRequest, config?: AxiosRequestConfig): Promise<operations.CreateComponentTypeResponse>;
    /**
     * Creates an entity.
     */
    createEntity(req: operations.CreateEntityRequest, config?: AxiosRequestConfig): Promise<operations.CreateEntityResponse>;
    /**
     * Creates a scene.
     */
    createScene(req: operations.CreateSceneRequest, config?: AxiosRequestConfig): Promise<operations.CreateSceneResponse>;
    /**
     * This action creates a SyncJob.
     */
    createSyncJob(req: operations.CreateSyncJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateSyncJobResponse>;
    /**
     * Creates a workplace.
     */
    createWorkspace(req: operations.CreateWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkspaceResponse>;
    /**
     * Deletes a component type.
     */
    deleteComponentType(req: operations.DeleteComponentTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteComponentTypeResponse>;
    /**
     * Deletes an entity.
     */
    deleteEntity(req: operations.DeleteEntityRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEntityResponse>;
    /**
     * Deletes a scene.
     */
    deleteScene(req: operations.DeleteSceneRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSceneResponse>;
    /**
     * Delete the SyncJob.
     */
    deleteSyncJob(req: operations.DeleteSyncJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSyncJobResponse>;
    /**
     * Deletes a workspace.
     */
    deleteWorkspace(req: operations.DeleteWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceResponse>;
    /**
     * Run queries to access information from your knowledge graph of entities within individual workspaces.
     */
    executeQuery(req: operations.ExecuteQueryRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteQueryResponse>;
    /**
     * Retrieves information about a component type.
     */
    getComponentType(req: operations.GetComponentTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetComponentTypeResponse>;
    /**
     * Retrieves information about an entity.
     */
    getEntity(req: operations.GetEntityRequest, config?: AxiosRequestConfig): Promise<operations.GetEntityResponse>;
    /**
     * Gets the pricing plan.
     */
    getPricingPlan(req: operations.GetPricingPlanRequest, config?: AxiosRequestConfig): Promise<operations.GetPricingPlanResponse>;
    /**
     * <p>Gets the property values for a component, component type, entity, or workspace.</p> <p>You must specify a value for either <code>componentName</code>, <code>componentTypeId</code>, <code>entityId</code>, or <code>workspaceId</code>.</p>
     */
    getPropertyValue(req: operations.GetPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.GetPropertyValueResponse>;
    /**
     * <p>Retrieves information about the history of a time series property value for a component, component type, entity, or workspace.</p> <p>You must specify a value for <code>workspaceId</code>. For entity-specific queries, specify values for <code>componentName</code> and <code>entityId</code>. For cross-entity quries, specify a value for <code>componentTypeId</code>.</p>
     */
    getPropertyValueHistory(req: operations.GetPropertyValueHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetPropertyValueHistoryResponse>;
    /**
     * Retrieves information about a scene.
     */
    getScene(req: operations.GetSceneRequest, config?: AxiosRequestConfig): Promise<operations.GetSceneResponse>;
    /**
     * Gets the SyncJob.
     */
    getSyncJob(req: operations.GetSyncJobRequest, config?: AxiosRequestConfig): Promise<operations.GetSyncJobResponse>;
    /**
     * Retrieves information about a workspace.
     */
    getWorkspace(req: operations.GetWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceResponse>;
    /**
     * Lists all component types in a workspace.
     */
    listComponentTypes(req: operations.ListComponentTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListComponentTypesResponse>;
    /**
     * Lists all entities in a workspace.
     */
    listEntities(req: operations.ListEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.ListEntitiesResponse>;
    /**
     * Lists all scenes in a workspace.
     */
    listScenes(req: operations.ListScenesRequest, config?: AxiosRequestConfig): Promise<operations.ListScenesResponse>;
    /**
     * List all SyncJobs.
     */
    listSyncJobs(req: operations.ListSyncJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListSyncJobsResponse>;
    /**
     * Lists the sync resources.
     */
    listSyncResources(req: operations.ListSyncResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListSyncResourcesResponse>;
    /**
     * Lists all tags associated with a resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Retrieves information about workspaces in the current account.
     */
    listWorkspaces(req: operations.ListWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkspacesResponse>;
    /**
     * Adds tags to a resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes tags from a resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates information in a component type.
     */
    updateComponentType(req: operations.UpdateComponentTypeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateComponentTypeResponse>;
    /**
     * Updates an entity.
     */
    updateEntity(req: operations.UpdateEntityRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEntityResponse>;
    /**
     * Update the pricing plan.
     */
    updatePricingPlan(req: operations.UpdatePricingPlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePricingPlanResponse>;
    /**
     * Updates a scene.
     */
    updateScene(req: operations.UpdateSceneRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSceneResponse>;
    /**
     * Updates a workspace.
     */
    updateWorkspace(req: operations.UpdateWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceResponse>;
}
