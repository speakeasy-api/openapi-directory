import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AllowedOriginsCompanyLevel {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an allowed origin
     *
     * @remarks
     * Removes the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path. As soon as an allowed origin is removed, we no longer accept client-side requests from that domain.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—API credentials read and write
     */
    deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(req: operations.DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest, security: operations.DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdResponse>;
    /**
     * Get a list of allowed origins
     *
     * @remarks
     * Returns the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the API credential identified in the path.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—API credentials read and write
     */
    getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(req: operations.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest, security: operations.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsResponse>;
    /**
     * Get an allowed origin
     *
     * @remarks
     * Returns the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—API credentials read and write
     */
    getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(req: operations.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest, security: operations.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdResponse>;
    /**
     * Create an allowed origin
     *
     * @remarks
     * Adds a new [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) to the API credential's list of allowed origins.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—API credentials read and write
     */
    postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(req: operations.PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRequest, security: operations.PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsSecurity, config?: AxiosRequestConfig): Promise<operations.PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsResponse>;
}
