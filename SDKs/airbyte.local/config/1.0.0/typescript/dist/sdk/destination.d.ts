import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Destination related resources.
 */
export declare class Destination {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Check connection to the destination
     */
    checkConnectionToDestination(req: shared.DestinationIdRequestBody, config?: AxiosRequestConfig): Promise<operations.CheckConnectionToDestinationResponse>;
    /**
     * Check connection for a proposed update to a destination
     */
    checkConnectionToDestinationForUpdate(req: shared.DestinationUpdate, config?: AxiosRequestConfig): Promise<operations.CheckConnectionToDestinationForUpdateResponse>;
    /**
     * Clone destination
     */
    cloneDestination(req: shared.DestinationCloneRequestBody, config?: AxiosRequestConfig): Promise<operations.CloneDestinationResponse>;
    /**
     * Create a destination
     */
    createDestination(req: shared.DestinationCreate, config?: AxiosRequestConfig): Promise<operations.CreateDestinationResponse>;
    /**
     * Delete the destination
     */
    deleteDestination(req: shared.DestinationIdRequestBody, config?: AxiosRequestConfig): Promise<operations.DeleteDestinationResponse>;
    /**
     * Get configured destination
     */
    getDestination(req: shared.DestinationIdRequestBody, config?: AxiosRequestConfig): Promise<operations.GetDestinationResponse>;
    /**
     * List configured destinations for a workspace
     */
    listDestinationsForWorkspace(req: shared.WorkspaceIdRequestBody, config?: AxiosRequestConfig): Promise<operations.ListDestinationsForWorkspaceResponse>;
    /**
     * Search destinations
     */
    searchDestinations(req: shared.DestinationSearch, config?: AxiosRequestConfig): Promise<operations.SearchDestinationsResponse>;
    /**
     * Update a destination
     */
    updateDestination(req: shared.DestinationUpdate, config?: AxiosRequestConfig): Promise<operations.UpdateDestinationResponse>;
}
