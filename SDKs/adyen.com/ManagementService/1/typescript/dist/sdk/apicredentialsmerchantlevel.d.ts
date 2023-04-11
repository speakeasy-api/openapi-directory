import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class APICredentialsMerchantLevel {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of API credentials
     *
     * @remarks
     * Returns the list of [API credentials](https://docs.adyen.com/development-resources/api-credentials) for the merchant account. The list is grouped into pages as defined by the query parameters.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—API credentials read and write
     */
    getMerchantsMerchantIdApiCredentials(req: operations.GetMerchantsMerchantIdApiCredentialsRequest, security: operations.GetMerchantsMerchantIdApiCredentialsSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdApiCredentialsResponse>;
    /**
     * Get an API credential
     *
     * @remarks
     * Returns the [API credential](https://docs.adyen.com/development-resources/api-credentials) identified in the path.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—API credentials read and write
     */
    getMerchantsMerchantIdApiCredentialsApiCredentialId(req: operations.GetMerchantsMerchantIdApiCredentialsApiCredentialIdRequest, security: operations.GetMerchantsMerchantIdApiCredentialsApiCredentialIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetMerchantsMerchantIdApiCredentialsApiCredentialIdResponse>;
    /**
     * Update an API credential
     *
     * @remarks
     * Changes the API credential's roles, or allowed origins. The request has the new values for the fields you want to change. The response contains the full updated API credential, including the new values from the request.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—API credentials read and write
     */
    patchMerchantsMerchantIdApiCredentialsApiCredentialId(req: operations.PatchMerchantsMerchantIdApiCredentialsApiCredentialIdRequest, security: operations.PatchMerchantsMerchantIdApiCredentialsApiCredentialIdSecurity, config?: AxiosRequestConfig): Promise<operations.PatchMerchantsMerchantIdApiCredentialsApiCredentialIdResponse>;
    /**
     * Create an API credential
     *
     * @remarks
     * Creates an [API credential](https://docs.adyen.com/development-resources/api-credentials) for the company account identified in the path. In the request, you can specify the roles and allowed origins for the new API credential.
     *
     * The response includes the:
     * * [API key](https://docs.adyen.com/development-resources/api-authentication#api-key-authentication): used for API request authentication.
     * * [Client key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works): public key used for client-side authentication.
     * * [Username and password](https://docs.adyen.com/development-resources/api-authentication#using-basic-authentication): used for basic authentication.
     *
     * > Make sure you store the API key securely in your system. You won't be able to retrieve it later.
     *
     * If your API key is lost or compromised, you need to [generate a new API key](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateApiKey).
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—API credentials read and write
     */
    postMerchantsMerchantIdApiCredentials(req: operations.PostMerchantsMerchantIdApiCredentialsRequest, security: operations.PostMerchantsMerchantIdApiCredentialsSecurity, config?: AxiosRequestConfig): Promise<operations.PostMerchantsMerchantIdApiCredentialsResponse>;
}
