import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AllowedOriginsMerchantLevel {
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
    deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(req: operations.DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest, security: operations.DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdResponse>;
    /**
     * Get a list of allowed origins
     *
     * @remarks
     * Returns the list of [allowed origins](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) for the API credential identified in the path.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—API credentials read and write
     */
    getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(req: operations.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest, security: operations.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsResponse>;
    /**
     * Get an allowed origin
     *
     * @remarks
     * Returns the [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) identified in the path.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—API credentials read and write
     */
    getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(req: operations.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest, security: operations.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdResponse>;
    /**
     * Create an allowed origin
     *
     * @remarks
     * Adds a new [allowed origin](https://docs.adyen.com/development-resources/client-side-authentication#allowed-origins) to the API credential's list of allowed origins.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—API credentials read and write
     */
    postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(req: operations.PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRequest, security: operations.PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsSecurity, config?: AxiosRequestConfig): Promise<operations.PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsResponse>;
}
