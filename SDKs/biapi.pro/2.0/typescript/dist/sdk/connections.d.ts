import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Connections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Disable a connection source
     *
     * @remarks
     * This will make it so the specified source will not be synchronized anymore.<br><br>
     */
    deleteConnectionsIdConnectionSourcesIdSource(req: operations.DeleteConnectionsIdConnectionSourcesIdSourceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionsIdConnectionSourcesIdSourceResponse>;
    /**
     * Delete all connections
     */
    deleteUsersIdUserConnections(req: operations.DeleteUsersIdUserConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdUserConnectionsResponse>;
    /**
     * Delete a connection.
     *
     * @remarks
     * This endpoint deletes a connection and all related accounts and transactions.<br><br>
     */
    deleteUsersIdUserConnectionsIdConnection(req: operations.DeleteUsersIdUserConnectionsIdConnectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdUserConnectionsIdConnectionResponse>;
    /**
     * Disable a connection source
     *
     * @remarks
     * This will make it so the specified source will not be synchronized anymore.<br><br>
     */
    deleteUsersIdUserConnectionsIdConnectionSourcesIdSource(req: operations.DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse>;
    /**
     * Get list of connectors
     */
    getBanks(req: operations.GetBanksRequest, config?: AxiosRequestConfig): Promise<operations.GetBanksResponse>;
    /**
     * Get a connector
     */
    getBanksIdBank(req: operations.GetBanksIdBankRequest, config?: AxiosRequestConfig): Promise<operations.GetBanksIdBankResponse>;
    /**
     * Get a subset of id_connection for a given bank. Different selection methode are possible
     *
     * @remarks
     * By default, it selects a set of 3 connections with the 'diversity' method<br><br>
     */
    getBanksIdConnectorConnections(req: operations.GetBanksIdConnectorConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetBanksIdConnectorConnectionsResponse>;
    /**
     * Get list of connector sources
     */
    getBanksIdConnectorSources(req: operations.GetBanksIdConnectorSourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetBanksIdConnectorSourcesResponse>;
    /**
     * Get fields specific to a domain and a source
     */
    getBanksIdConnectorSourcesIdConnectorSourceFields(req: operations.GetBanksIdConnectorSourcesIdConnectorSourceFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetBanksIdConnectorSourcesIdConnectorSourceFieldsResponse>;
    /**
     * Get the connector source
     */
    getBanksIdConnectorSourcesIdSource(req: operations.GetBanksIdConnectorSourcesIdSourceRequest, config?: AxiosRequestConfig): Promise<operations.GetBanksIdConnectorSourcesIdSourceResponse>;
    /**
     * Get connections without a user
     */
    getConnections(req: operations.GetConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectionsResponse>;
    /**
     * Get connection logs
     *
     * @remarks
     * Get logs about connections.<br><br>
     */
    getConnectionsIdConnectionLogs(req: operations.GetConnectionsIdConnectionLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectionsIdConnectionLogsResponse>;
    /**
     * Get connection sources
     */
    getConnectionsIdConnectionSources(req: operations.GetConnectionsIdConnectionSourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectionsIdConnectionSourcesResponse>;
    /**
     * Get list of connectors
     */
    getConnectors(req: operations.GetConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorsResponse>;
    /**
     * Get a connector
     */
    getConnectorsIdConnector(req: operations.GetConnectorsIdConnectorRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorsIdConnectorResponse>;
    /**
     * Get list of connector sources
     */
    getConnectorsIdConnectorSources(req: operations.GetConnectorsIdConnectorSourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorsIdConnectorSourcesResponse>;
    /**
     * Get fields specific to a domain and a source
     */
    getConnectorsIdConnectorSourcesIdConnectorSourceFields(req: operations.GetConnectorsIdConnectorSourcesIdConnectorSourceFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorsIdConnectorSourcesIdConnectorSourceFieldsResponse>;
    /**
     * Get the connector source
     */
    getConnectorsIdConnectorSourcesIdSource(req: operations.GetConnectorsIdConnectorSourcesIdSourceRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorsIdConnectorSourcesIdSourceResponse>;
    /**
     * Get connection logs
     *
     * @remarks
     * Get logs about connections.<br><br>
     */
    getLogs(req: operations.GetLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetLogsResponse>;
    /**
     * Get list of connectors
     */
    getProviders(req: operations.GetProvidersRequest, config?: AxiosRequestConfig): Promise<operations.GetProvidersResponse>;
    /**
     * Get a random subset of provider's id_connection
     *
     * @remarks
     * By default, it selects a set of 3 connections.<br><br>
     */
    getProvidersIdConnectorConnections(req: operations.GetProvidersIdConnectorConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetProvidersIdConnectorConnectionsResponse>;
    /**
     * Get list of connector sources
     */
    getProvidersIdConnectorSources(req: operations.GetProvidersIdConnectorSourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetProvidersIdConnectorSourcesResponse>;
    /**
     * Get fields specific to a domain and a source
     */
    getProvidersIdConnectorSourcesIdConnectorSourceFields(req: operations.GetProvidersIdConnectorSourcesIdConnectorSourceFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetProvidersIdConnectorSourcesIdConnectorSourceFieldsResponse>;
    /**
     * Get the connector source
     */
    getProvidersIdConnectorSourcesIdSource(req: operations.GetProvidersIdConnectorSourcesIdSourceRequest, config?: AxiosRequestConfig): Promise<operations.GetProvidersIdConnectorSourcesIdSourceResponse>;
    /**
     * Get a connector
     */
    getProvidersIdProvider(req: operations.GetProvidersIdProviderRequest, config?: AxiosRequestConfig): Promise<operations.GetProvidersIdProviderResponse>;
    /**
     * Get connections
     */
    getUsersIdUserConnections(req: operations.GetUsersIdUserConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserConnectionsResponse>;
    /**
     * Get connection additionnal informations
     *
     * @remarks
     * <br><br>
     */
    getUsersIdUserConnectionsIdConnectionInformations(req: operations.GetUsersIdUserConnectionsIdConnectionInformationsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserConnectionsIdConnectionInformationsResponse>;
    /**
     * Get connection logs
     *
     * @remarks
     * Get logs about connections.<br><br>
     */
    getUsersIdUserConnectionsIdConnectionLogs(req: operations.GetUsersIdUserConnectionsIdConnectionLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserConnectionsIdConnectionLogsResponse>;
    /**
     * Get connection sources
     */
    getUsersIdUserConnectionsIdConnectionSources(req: operations.GetUsersIdUserConnectionsIdConnectionSourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserConnectionsIdConnectionSourcesResponse>;
    /**
     * Get connection logs
     *
     * @remarks
     * Get logs about connections.<br><br>
     */
    getUsersIdUserLogs(req: operations.GetUsersIdUserLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserLogsResponse>;
    /**
     * "
     *
     * @remarks
     * This endpoint is used to enable a source or force a synchronization on it.<br><br>
     */
    postConnectionsIdConnectionSourcesIdSource(req: operations.PostConnectionsIdConnectionSourcesIdSourceRequest, config?: AxiosRequestConfig): Promise<operations.PostConnectionsIdConnectionSourcesIdSourceResponse>;
    /**
     * Request a new connector
     *
     * @remarks
     * Send a request to add a new connector<br><br>
     */
    postConnectors(req: operations.PostConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.PostConnectorsResponse>;
    /**
     * Add a new connection.
     *
     * @remarks
     * Create a new connection to a given bank or provider. You have to give all needed parameters (use /banks/ID/fields or /providers/ID/fields to get them).<br><br>
     */
    postUsersIdUserConnections(req: operations.PostUsersIdUserConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdUserConnectionsResponse>;
    /**
     * Update a connection.
     *
     * @remarks
     * Give new parameters to change on the configuration of this connection (for example "password").<br><br>It tests connection to website, and if it fails, a 400 response is given with the error code "wrongpass" or "websiteUnavailable".<br><br>You can also supply meta-parameters on connection, like 'active' or 'expire'.<br><br>It's possible to execute the update/synchronization in the background with a query parameter. If done in background this endpoint will respond with data that is not yet updated. To obtain updated data, polling is required as the the data will be filled in the background.<br><br>
     */
    postUsersIdUserConnectionsIdConnection(req: operations.PostUsersIdUserConnectionsIdConnectionRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdUserConnectionsIdConnectionResponse>;
    /**
     * "
     *
     * @remarks
     * This endpoint is used to enable a source or force a synchronization on it.<br><br>
     */
    postUsersIdUserConnectionsIdConnectionSourcesIdSource(req: operations.PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse>;
    /**
     * Update connection source
     *
     * @remarks
     * This endpoint is used to enable a source or force a synchronization on it.<br><br>
     */
    putConnectionsIdConnectionSourcesIdSource(req: operations.PutConnectionsIdConnectionSourcesIdSourceRequest, config?: AxiosRequestConfig): Promise<operations.PutConnectionsIdConnectionSourcesIdSourceResponse>;
    /**
     * Edit several connector sources
     */
    putConnectorsIdConnectorSources(req: operations.PutConnectorsIdConnectorSourcesRequest, config?: AxiosRequestConfig): Promise<operations.PutConnectorsIdConnectorSourcesResponse>;
    /**
     * Edit the provided connector source
     */
    putConnectorsIdConnectorSourcesIdSource(req: operations.PutConnectorsIdConnectorSourcesIdSourceRequest, config?: AxiosRequestConfig): Promise<operations.PutConnectorsIdConnectorSourcesIdSourceResponse>;
    /**
     * Force synchronisation of a connection.
     *
     * @remarks
     * We suggest to pass parameter expand=accounts[transactions] to get all *new* and *updated* transactions.<br><br>
     */
    putUsersIdUserConnectionsIdConnection(req: operations.PutUsersIdUserConnectionsIdConnectionRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdUserConnectionsIdConnectionResponse>;
    /**
     * Update connection source
     *
     * @remarks
     * This endpoint is used to enable a source or force a synchronization on it.<br><br>
     */
    putUsersIdUserConnectionsIdConnectionSourcesIdSource(req: operations.PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse>;
}
