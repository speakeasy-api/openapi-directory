import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class APIKeyMerchantLevel {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate new API key
     *
     * @remarks
     * Returns a new API key for the API credential. You can use the new API key a few minutes after generating it. The old API key stops working 24 hours after generating a new one.
     *
     * To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
     * * Management API—API credentials read and write
     */
    postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKey(req: operations.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyRequest, security: operations.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeySecurity, config?: AxiosRequestConfig): Promise<operations.PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyResponse>;
}
