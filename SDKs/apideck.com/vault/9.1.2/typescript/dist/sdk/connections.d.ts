import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A connection represents an account of a consumer for a connector. For example a consumer with ID "test-consumer" has a Salesforce connection for the CRM API. Connections securely save credentials and settings for a connector.
 */
export declare class Connections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get resource settings
     *
     * @remarks
     * This endpoint returns custom settings and their defaults required by connection for a given resource.
     *
     */
    connectionSettingsAll(req: operations.ConnectionSettingsAllRequest, security: operations.ConnectionSettingsAllSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectionSettingsAllResponse>;
    /**
     * Update settings
     *
     * @remarks
     * Update default values for a connection's resource settings
     */
    connectionSettingsUpdate(req: operations.ConnectionSettingsUpdateRequest, security: operations.ConnectionSettingsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectionSettingsUpdateResponse>;
    /**
     * Create connection
     *
     * @remarks
     * Create an authorized connection
     *
     */
    connectionsAdd(req: operations.ConnectionsAddRequest, security: operations.ConnectionsAddSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectionsAddResponse>;
    /**
     * Get all connections
     *
     * @remarks
     * This endpoint includes all the configured integrations and contains the required assets
     * to build an integrations page where your users can install integrations.
     * OAuth2 supported integrations will contain authorize and revoke links to handle the authentication flows.
     *
     */
    connectionsAll(req: operations.ConnectionsAllRequest, security: operations.ConnectionsAllSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectionsAllResponse>;
    /**
     * Callback
     *
     * @remarks
     * This endpoint gets called after the triggering the authorize flow.
     *
     * Callback links need a state and code parameter to verify the validity of the request.
     *
     */
    connectionsCallback(req: operations.ConnectionsCallbackRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsCallbackResponse>;
    /**
     * Deletes a connection
     *
     * @remarks
     * Deletes a connection
     */
    connectionsDelete(req: operations.ConnectionsDeleteRequest, security: operations.ConnectionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectionsDeleteResponse>;
    /**
     * Import connection
     *
     * @remarks
     * Import an authorized connection.
     *
     */
    connectionsImport(req: operations.ConnectionsImportRequest, security: operations.ConnectionsImportSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectionsImportResponse>;
    /**
     * Get connection
     *
     * @remarks
     * Get a connection
     */
    connectionsOne(req: operations.ConnectionsOneRequest, security: operations.ConnectionsOneSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectionsOneResponse>;
    /**
     * Revoke connection
     *
     * @remarks
     * __In most cases the authorize link is provided in the ``/connections`` endpoint. Normally you don't need to manually generate these links.__
     *
     * Use this endpoint to revoke an existing OAuth connector.
     *
     * Auth links will have a state parameter included to verify the validity of the request. This is the url your users will use to activate OAuth supported integration providers.
     *
     * Vault handles the complete revoke flow for you and will redirect you to the dynamic redirect uri you have appended to the url in case this is missing the default redirect uri you have configured for your Unify application.
     *
     */
    connectionsRevoke(req: operations.ConnectionsRevokeRequest, config?: AxiosRequestConfig): Promise<operations.ConnectionsRevokeResponse>;
    /**
     * Get Access Token
     *
     * @remarks
     * Get an access token for a connection and store it in Vault. Currently only supported for connections with the client_credentials OAuth grant type.
     *
     * Note that the access token will not be returned in the response. A 200 response code indicates a valid access token was stored on the connection.
     *
     */
    connectionsToken(req: operations.ConnectionsTokenRequest, security: operations.ConnectionsTokenSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectionsTokenResponse>;
    /**
     * Update connection
     *
     * @remarks
     * Update a connection
     */
    connectionsUpdate(req: operations.ConnectionsUpdateRequest, security: operations.ConnectionsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectionsUpdateResponse>;
}
