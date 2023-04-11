import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class APICredentialsCompanyLevel {
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
     * Returns the list of [API credentials](https://docs.adyen.com/development-resources/api-credentials) for the company account. The list is grouped into pages as defined by the query parameters.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—API credentials read and write
     */
    getCompaniesCompanyIdApiCredentials(req: operations.GetCompaniesCompanyIdApiCredentialsRequest, security: operations.GetCompaniesCompanyIdApiCredentialsSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdApiCredentialsResponse>;
    /**
     * Get an API credential
     *
     * @remarks
     * Returns the [API credential](https://docs.adyen.com/development-resources/api-credentials) identified in the path.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—API credentials read and write
     */
    getCompaniesCompanyIdApiCredentialsApiCredentialId(req: operations.GetCompaniesCompanyIdApiCredentialsApiCredentialIdRequest, security: operations.GetCompaniesCompanyIdApiCredentialsApiCredentialIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetCompaniesCompanyIdApiCredentialsApiCredentialIdResponse>;
    /**
     * Update an API credential.
     *
     * @remarks
     * Changes the API credential's roles, merchant account access, or allowed origins. The request has the new values for the fields you want to change. The response contains the full updated API credential, including the new values from the request.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—API credentials read and write
     */
    patchCompaniesCompanyIdApiCredentialsApiCredentialId(req: operations.PatchCompaniesCompanyIdApiCredentialsApiCredentialIdRequest, security: operations.PatchCompaniesCompanyIdApiCredentialsApiCredentialIdSecurity, config?: AxiosRequestConfig): Promise<operations.PatchCompaniesCompanyIdApiCredentialsApiCredentialIdResponse>;
    /**
     * Create an API credential.
     *
     * @remarks
     * Creates an [API credential](https://docs.adyen.com/development-resources/api-credentials) for the company account identified in the path. In the request, you can specify which merchant accounts the new API credential will have access to, as well as its roles and allowed origins.
     *
     * The response includes several types of authentication details:
     * * [API key](https://docs.adyen.com/development-resources/api-authentication#api-key-authentication): used for API request authentication.
     * * [Client key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works): public key used for client-side authentication.
     * * [Username and password](https://docs.adyen.com/development-resources/api-authentication#using-basic-authentication): used for basic authentication.
     *
     * > Make sure you store the API key securely in your system. You won't be able to retrieve it later.
     *
     * If your API key is lost or compromised, you need to [generate a new API key](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/companies/{companyId}/apiCredentials/{apiCredentialId}/generateApiKey).
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—API credentials read and write
     */
    postCompaniesCompanyIdApiCredentials(req: operations.PostCompaniesCompanyIdApiCredentialsRequest, security: operations.PostCompaniesCompanyIdApiCredentialsSecurity, config?: AxiosRequestConfig): Promise<operations.PostCompaniesCompanyIdApiCredentialsResponse>;
}
