import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * DestinationDefinition related resources.
 */
export declare class DestinationDefinition {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a custom destinationDefinition for the given workspace
     */
    createCustomDestinationDefinition(req: shared.CustomDestinationDefinitionCreate, config?: AxiosRequestConfig): Promise<operations.CreateCustomDestinationDefinitionResponse>;
    /**
     * Delete a destination definition
     */
    deleteDestinationDefinition(req: shared.DestinationDefinitionIdRequestBody, config?: AxiosRequestConfig): Promise<operations.DeleteDestinationDefinitionResponse>;
    /**
     * Get destinationDefinition
     */
    getDestinationDefinition(req: shared.DestinationDefinitionIdRequestBody, config?: AxiosRequestConfig): Promise<operations.GetDestinationDefinitionResponse>;
    /**
     * Get a destinationDefinition that is configured for the given workspace
     */
    getDestinationDefinitionForWorkspace(req: shared.DestinationDefinitionIdWithWorkspaceId, config?: AxiosRequestConfig): Promise<operations.GetDestinationDefinitionForWorkspaceResponse>;
    /**
     * grant a private, non-custom destinationDefinition to a given workspace
     */
    grantDestinationDefinitionToWorkspace(req: shared.DestinationDefinitionIdWithWorkspaceId, config?: AxiosRequestConfig): Promise<operations.GrantDestinationDefinitionToWorkspaceResponse>;
    /**
     * List all the destinationDefinitions the current Airbyte deployment is configured to use
     */
    listDestinationDefinitions(config?: AxiosRequestConfig): Promise<operations.ListDestinationDefinitionsResponse>;
    /**
     * List all the destinationDefinitions the given workspace is configured to use
     */
    listDestinationDefinitionsForWorkspace(req: shared.WorkspaceIdRequestBody, config?: AxiosRequestConfig): Promise<operations.ListDestinationDefinitionsForWorkspaceResponse>;
    /**
     * List the latest destinationDefinitions Airbyte supports
     *
     * @remarks
     * Guaranteed to retrieve the latest information on supported destinations.
     */
    listLatestDestinationDefinitions(config?: AxiosRequestConfig): Promise<operations.ListLatestDestinationDefinitionsResponse>;
    /**
     * List all private, non-custom destinationDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.
     */
    listPrivateDestinationDefinitions(req: shared.WorkspaceIdRequestBody, config?: AxiosRequestConfig): Promise<operations.ListPrivateDestinationDefinitionsResponse>;
    /**
     * revoke a grant to a private, non-custom destinationDefinition from a given workspace
     */
    revokeDestinationDefinitionFromWorkspace(req: shared.DestinationDefinitionIdWithWorkspaceId, config?: AxiosRequestConfig): Promise<operations.RevokeDestinationDefinitionFromWorkspaceResponse>;
    /**
     * Update destinationDefinition
     */
    updateDestinationDefinition(req: shared.DestinationDefinitionUpdate, config?: AxiosRequestConfig): Promise<operations.UpdateDestinationDefinitionResponse>;
}
