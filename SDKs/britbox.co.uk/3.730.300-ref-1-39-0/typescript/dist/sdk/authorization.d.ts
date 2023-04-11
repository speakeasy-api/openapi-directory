import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Authorization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a generated device authorization code.
     *
     * This is the first step in the process of authorizing a device by pin code.
     * The device will make a request to this endpoint providing a unique identifier
     * for the device such as a serial number. This endpoint will then return a
     * generated code which is tied to the given device.
     *
     * The code may subsequently be used to authorize the device to sign in to an
     * account via the `/account/devices/authorization` endpoint. Typically this
     * will be from a page presented in the web app under the account section.
     *
     * Once authorized, the device will then be able to sign in to that account
     * via the `/authorization/device` endpoint, without needing to provide the
     * credentials of the user.
     *
     */
    generateDeviceAuthorizationCode(req: operations.GenerateDeviceAuthorizationCodeRequest, config?: AxiosRequestConfig): Promise<operations.GenerateDeviceAuthorizationCodeResponse>;
    /**
     * Request one or more `Account` level authorization tokens each with a chosen scope.
     *
     * Tokens are used to access restricted service endpoints. These restricted endpoints
     * will require a specific token type (e.g Account) with a specific scope (e.g. Catalog)
     * before access is granted.
     *
     * For convenience, where a Profile level token with the same scope exists it will also be returned.
     *
     * Authorization with pin is not supported on this endpoint anymore. Use `/itv/pinauthorization`
     * endpoint instead.
     *
     */
    getAccountToken(req: operations.GetAccountTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountTokenResponse>;
    /**
     * Get Catalog tokens for an account using a device authorization code.
     * Where a Profile level token of Catalog scope exists it will also be returned.
     *
     * This is the final step in the process of authorizing a device by pin code.
     *
     * Firstly the device must request a generated authorization code via the
     * `/authorization/device/code` endpoint.
     *
     * The code is subsequently used to authorize the device to sign in to a given
     * account via the `/account/devices/authorization` endpoint. Typically this
     * will be from a page presented in the web app under the account section.
     *
     * Once authorized, this endpoint will allow the device to sign in without
     * needing to provide the credentials of the user.
     *
     */
    getAccountTokenByCode(req: operations.GetAccountTokenByCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountTokenByCodeResponse>;
    /**
     * Request one or more `Profile` level authorization tokens each with a chosen scope.
     *
     * Tokens are used to access restricted service endpoints. These restriced endpoints
     * will require a specific token type (e.g Profile) with a specific scope (e.g. Catalog)
     * before access is granted.
     *
     */
    getProfileToken(req: operations.GetProfileTokenRequest, security: operations.GetProfileTokenSecurity, config?: AxiosRequestConfig): Promise<operations.GetProfileTokenResponse>;
    /**
     * Refresh an account or profile level authorization token which is marked as refreshable.
     */
    refreshToken(req: operations.RefreshTokenRequest, config?: AxiosRequestConfig): Promise<operations.RefreshTokenResponse>;
    /**
     * When a user signs out of an application we need to clear some
     * basic cookies we assigned them during token authorization.
     *
     */
    signOut(req: operations.SignOutRequest, config?: AxiosRequestConfig): Promise<operations.SignOutResponse>;
    /**
     * Exchange a third party single-sign-on token for our own authorization tokens.
     */
    singleSignOn(req: operations.SingleSignOnRequest, config?: AxiosRequestConfig): Promise<operations.SingleSignOnResponse>;
}
