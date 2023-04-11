import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * SourceDefinition related resources.
 */
export declare class SourceDefinition {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a custom sourceDefinition for the given workspace
     */
    createCustomSourceDefinition(req: shared.CustomSourceDefinitionCreate, config?: AxiosRequestConfig): Promise<operations.CreateCustomSourceDefinitionResponse>;
    /**
     * Delete a source definition
     */
    deleteSourceDefinition(req: shared.SourceDefinitionIdRequestBody, config?: AxiosRequestConfig): Promise<operations.DeleteSourceDefinitionResponse>;
    /**
     * Get source
     */
    getSourceDefinition(req: shared.SourceDefinitionIdRequestBody, config?: AxiosRequestConfig): Promise<operations.GetSourceDefinitionResponse>;
    /**
     * Get a sourceDefinition that is configured for the given workspace
     */
    getSourceDefinitionForWorkspace(req: shared.SourceDefinitionIdWithWorkspaceId, config?: AxiosRequestConfig): Promise<operations.GetSourceDefinitionForWorkspaceResponse>;
    /**
     * grant a private, non-custom sourceDefinition to a given workspace
     */
    grantSourceDefinitionToWorkspace(req: shared.SourceDefinitionIdWithWorkspaceId, config?: AxiosRequestConfig): Promise<operations.GrantSourceDefinitionToWorkspaceResponse>;
    /**
     * List the latest sourceDefinitions Airbyte supports
     *
     * @remarks
     * Guaranteed to retrieve the latest information on supported sources.
     */
    listLatestSourceDefinitions(config?: AxiosRequestConfig): Promise<operations.ListLatestSourceDefinitionsResponse>;
    /**
     * List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.
     */
    listPrivateSourceDefinitions(req: shared.WorkspaceIdRequestBody, config?: AxiosRequestConfig): Promise<operations.ListPrivateSourceDefinitionsResponse>;
    /**
     * List all the sourceDefinitions the current Airbyte deployment is configured to use
     */
    listSourceDefinitions(config?: AxiosRequestConfig): Promise<operations.ListSourceDefinitionsResponse>;
    /**
     * List all the sourceDefinitions the given workspace is configured to use
     */
    listSourceDefinitionsForWorkspace(req: shared.WorkspaceIdRequestBody, config?: AxiosRequestConfig): Promise<operations.ListSourceDefinitionsForWorkspaceResponse>;
    /**
     * revoke a grant to a private, non-custom sourceDefinition from a given workspace
     */
    revokeSourceDefinitionFromWorkspace(req: shared.SourceDefinitionIdWithWorkspaceId, config?: AxiosRequestConfig): Promise<operations.RevokeSourceDefinitionFromWorkspaceResponse>;
    /**
     * Update a sourceDefinition
     */
    updateSourceDefinition(req: shared.SourceDefinitionUpdate, config?: AxiosRequestConfig): Promise<operations.UpdateSourceDefinitionResponse>;
}
