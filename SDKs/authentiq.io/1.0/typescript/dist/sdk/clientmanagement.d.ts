import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ClientManagement {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List clients
     *
     * @remarks
     * Retrieve a list of clients.
     *
     */
    client(config?: AxiosRequestConfig): Promise<operations.ClientResponse>;
    /**
     * Delete a client
     *
     * @remarks
     * Delete a previously registered client.
     *
     *
     * @see {@link http://openid.net/specs/openid-connect-registration-1_0.html#ClientConfigurationEndpoint} - OIDC Client Configuration Endpoint
     */
    clientClientId(req: operations.ClientClientIdRequest, security: operations.ClientClientIdSecurity, config?: AxiosRequestConfig): Promise<operations.ClientClientIdResponse>;
    /**
     * Register a client
     *
     * @remarks
     * Register a new client with this Authentiq Connect provider.
     *
     * This endpoint is compatible with [OIDC's Client Registration](http://openid.net/specs/openid-connect-registration-1_0.html) extension.
     *
     *
     * @see {@link http://openid.net/specs/openid-connect-registration-1_0.html#ClientRegistration} - OIDC Client Registration Endpoint
     */
    createClient(req: shared.Client, security: operations.CreateClientSecurity, config?: AxiosRequestConfig): Promise<operations.CreateClientResponse>;
    /**
     * View a client
     *
     * @remarks
     * Retrieve the configuration of a previously registered client.
     *
     *
     * @see {@link http://openid.net/specs/openid-connect-registration-1_0.html#ClientConfigurationEndpoint} - OIDC Client Configuration Endpoint
     */
    getClient(req: operations.GetClientRequest, security: operations.GetClientSecurity, config?: AxiosRequestConfig): Promise<operations.GetClientResponse>;
    /**
     * Update a client
     *
     * @remarks
     * Update the configuration of a previously registered client.
     *
     *
     * @see {@link http://openid.net/specs/openid-connect-registration-1_0.html#ClientConfigurationEndpoint} - OIDC Client Configuration Endpoint
     */
    updateClient(req: operations.UpdateClientRequest, security: operations.UpdateClientSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateClientResponse>;
}
