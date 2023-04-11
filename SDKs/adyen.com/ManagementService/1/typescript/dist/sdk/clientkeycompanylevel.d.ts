import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ClientKeyCompanyLevel {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate new client key
     *
     * @remarks
     * Returns a new [client key](https://docs.adyen.com/development-resources/client-side-authentication#how-it-works) for the API credential identified in the path. You can use the new client key a few minutes after generating it. The old client key stops working 24 hours after generating a new one.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—API credentials read and write
     */
    postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey(req: operations.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyRequest, security: operations.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeySecurity, config?: AxiosRequestConfig): Promise<operations.PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyResponse>;
}
