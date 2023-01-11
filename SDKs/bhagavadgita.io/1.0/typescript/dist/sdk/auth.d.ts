import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Auth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postAuthOauthToken - Send client credentials and get an access token.
    **/
    postAuthOauthToken(req: operations.PostAuthOauthTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostAuthOauthTokenResponse>;
}
