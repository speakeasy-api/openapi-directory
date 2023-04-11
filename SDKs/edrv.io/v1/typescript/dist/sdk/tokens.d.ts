import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Tokens {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Use to delete a token
     */
    deleteToken(req: operations.DeleteTokenRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTokenResponse>;
    /**
     * Get a single token's data
     */
    getToken(req: operations.GetTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenResponse>;
    /**
     * List tokens
     */
    getTokens(req: operations.GetTokensRequest, config?: AxiosRequestConfig): Promise<operations.GetTokensResponse>;
    /**
     * Update a token
     */
    patchToken(req: operations.PatchTokenRequest, config?: AxiosRequestConfig): Promise<operations.PatchTokenResponse>;
    /**
     * Create a new token
     */
    postTokens(req: operations.PostTokensRequestBody, config?: AxiosRequestConfig): Promise<operations.PostTokensResponse>;
}
