import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints for the Airbyte web application. Those APIs should not be called outside the web application implementation and are not
 *
 * @remarks
 * guaranteeing any backwards compatibility.
 *
 */
export declare class WebBackend {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetch the current state type for a connection.
     */
    getStateType(req: shared.ConnectionIdRequestBody, config?: AxiosRequestConfig): Promise<operations.GetStateTypeResponse>;
    /**
     * Returns a summary of source and destination definitions that could be updated.
     */
    webBackendCheckUpdates(config?: AxiosRequestConfig): Promise<operations.WebBackendCheckUpdatesResponse>;
    /**
     * Create a connection
     */
    webBackendCreateConnection(req: shared.WebBackendConnectionCreate, config?: AxiosRequestConfig): Promise<operations.WebBackendCreateConnectionResponse>;
    /**
     * Get a connection
     */
    webBackendGetConnection(req: shared.WebBackendConnectionRequestBody, config?: AxiosRequestConfig): Promise<operations.WebBackendGetConnectionResponse>;
    /**
     * Returns the current state of a workspace
     */
    webBackendGetWorkspaceState(req: shared.WebBackendWorkspaceState, config?: AxiosRequestConfig): Promise<operations.WebBackendGetWorkspaceStateResponse>;
    /**
     * Returns all non-deleted connections for a workspace.
     */
    webBackendListConnectionsForWorkspace(req: shared.WebBackendConnectionListRequestBody, config?: AxiosRequestConfig): Promise<operations.WebBackendListConnectionsForWorkspaceResponse>;
    /**
     * Returns available geographies can be selected to run data syncs in a particular geography.
     * The 'auto' entry indicates that the sync will be automatically assigned to a geography according
     * to the platform default behavior. Entries other than 'auto' are two-letter country codes that
     * follow the ISO 3166-1 alpha-2 standard.
     *
     *
     * @remarks
     * Returns all available geographies in which a data sync can run.
     */
    webBackendListGeographies(config?: AxiosRequestConfig): Promise<operations.WebBackendListGeographiesResponse>;
    /**
     * Update a connection
     *
     * @remarks
     * Apply a patch-style update to a connection. Only fields present on the update request body will be updated.
     * Any operations that lack an ID will be created. Then, the newly created operationId will be applied to the
     * connection along with the rest of the operationIds in the request body.
     * Apply a patch-style update to a connection. Only fields present on the update request body will be updated.
     * Note that if a catalog is present in the request body, the connection's entire catalog will be replaced
     * with the catalog from the request. This means that to modify a single stream, the entire new catalog
     * containing the updated stream needs to be sent.
     *
     */
    webBackendUpdateConnection(req: shared.WebBackendConnectionUpdate, config?: AxiosRequestConfig): Promise<operations.WebBackendUpdateConnectionResponse>;
}
