import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Source OAuth related resources to delegate access from user.
 */
export declare class SourceOauth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Given a source def ID generate an access/refresh token etc.
     */
    completeSourceOAuth(req: shared.CompleteSourceOauthRequest, config?: AxiosRequestConfig): Promise<operations.CompleteSourceOAuthResponse>;
    /**
     * Given a source connector definition ID, return the URL to the consent screen where to redirect the user to.
     */
    getSourceOAuthConsent(req: shared.SourceOauthConsentRequest, config?: AxiosRequestConfig): Promise<operations.GetSourceOAuthConsentResponse>;
    /**
     * Sets instancewide variables to be used for the oauth flow when creating this source. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.
     *
     */
    setInstancewideSourceOauthParams(req: shared.SetInstancewideSourceOauthParamsRequestBody, config?: AxiosRequestConfig): Promise<operations.SetInstancewideSourceOauthParamsResponse>;
}
