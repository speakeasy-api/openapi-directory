import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CustomerSecurity {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * logout - Log out the current user from go2
     *
     * Log out the current user from go2
    **/
    logout(config?: AxiosRequestConfig): Promise<operations.LogoutResponse>;
    /**
     * zendeskToken - Zendesk token
     *
     * Zendesk token - Generates a JWT token to access BeezUP restricted Help Center in SSO as described here: https://support.zendesk.com/hc/en-us/articles/222874768-Using-restricted-Help-Center-content-with-the-Web-Widget
    **/
    zendeskToken(config?: AxiosRequestConfig): Promise<operations.ZendeskTokenResponse>;
}
