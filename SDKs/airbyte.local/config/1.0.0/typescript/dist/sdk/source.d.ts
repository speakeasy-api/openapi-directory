import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Source related resources.
 */
export declare class Source {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Check connection to the source
     */
    checkConnectionToSource(req: shared.SourceIdRequestBody, config?: AxiosRequestConfig): Promise<operations.CheckConnectionToSourceResponse>;
    /**
     * Check connection for a proposed update to a source
     */
    checkConnectionToSourceForUpdate(req: shared.SourceUpdate, config?: AxiosRequestConfig): Promise<operations.CheckConnectionToSourceForUpdateResponse>;
    /**
     * Clone source
     */
    cloneSource(req: shared.SourceCloneRequestBody, config?: AxiosRequestConfig): Promise<operations.CloneSourceResponse>;
    /**
     * Create a source
     */
    createSource(req: shared.SourceCreate, config?: AxiosRequestConfig): Promise<operations.CreateSourceResponse>;
    /**
     * Delete a source
     */
    deleteSource(req: shared.SourceIdRequestBody, config?: AxiosRequestConfig): Promise<operations.DeleteSourceResponse>;
    /**
     * Discover the schema catalog of the source
     */
    discoverSchemaForSource(req: shared.SourceDiscoverSchemaRequestBody, config?: AxiosRequestConfig): Promise<operations.DiscoverSchemaForSourceResponse>;
    /**
     * Get most recent ActorCatalog for source
     */
    getMostRecentSourceActorCatalog(req: shared.SourceIdRequestBody, config?: AxiosRequestConfig): Promise<operations.GetMostRecentSourceActorCatalogResponse>;
    /**
     * Get source
     */
    getSource(req: shared.SourceIdRequestBody, config?: AxiosRequestConfig): Promise<operations.GetSourceResponse>;
    /**
     * List sources for workspace
     *
     * @remarks
     * List sources for workspace. Does not return deleted sources.
     */
    listSourcesForWorkspace(req: shared.WorkspaceIdRequestBody, config?: AxiosRequestConfig): Promise<operations.ListSourcesForWorkspaceResponse>;
    /**
     * Search sources
     */
    searchSources(req: shared.SourceSearch, config?: AxiosRequestConfig): Promise<operations.SearchSourcesResponse>;
    /**
     * Update a source
     */
    updateSource(req: shared.SourceUpdate, config?: AxiosRequestConfig): Promise<operations.UpdateSourceResponse>;
    /**
     * Should only called from worker, to write result from discover activity back to DB.
     */
    writeDiscoverCatalogResult(req: shared.SourceDiscoverSchemaWriteRequestBody, config?: AxiosRequestConfig): Promise<operations.WriteDiscoverCatalogResultResponse>;
}
