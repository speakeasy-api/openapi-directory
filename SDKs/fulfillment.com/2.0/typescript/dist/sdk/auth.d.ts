import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Please note that in keeping with the OAuth standard, parameters are underscored however all other API parameters are camelCase.
 */
export declare class Auth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate an Access Token
     *
     * @remarks
     * By default tokens are valid for 7 days while refresh tokens are valid for 30 days. If your `grant_type` is "password" include the `username` and `password`, if however your `grant_type` is "refresh_token" the username/password are not required, instead set the `refresh_token`
     *
     * @see {@link #section/Getting-Started/Perpetuating-Access} - More Information on Refresh Tokens
     */
    postOauthAccessToken(req: any, config?: AxiosRequestConfig): Promise<operations.PostOauthAccessTokenResponse>;
}
