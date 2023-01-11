import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tokens {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteToken - Use to delete a token
    **/
    deleteToken(req: operations.DeleteTokenRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTokenResponse>;
    /**
     * getToken - Get a single token's data
    **/
    getToken(req: operations.GetTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenResponse>;
    /**
     * getTokens - List tokens
    **/
    getTokens(req: operations.GetTokensRequest, config?: AxiosRequestConfig): Promise<operations.GetTokensResponse>;
    /**
     * patchToken - Update a token
    **/
    patchToken(req: operations.PatchTokenRequest, config?: AxiosRequestConfig): Promise<operations.PatchTokenResponse>;
    /**
     * postTokens - Create a new token
    **/
    postTokens(req: operations.PostTokensRequest, config?: AxiosRequestConfig): Promise<operations.PostTokensResponse>;
}
