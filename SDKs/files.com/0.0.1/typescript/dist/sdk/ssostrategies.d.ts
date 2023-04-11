import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about sso_strategies
 */
export declare class SsoStrategies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Sso Strategies
     *
     * @remarks
     * List Sso Strategies
     */
    getSsoStrategies(req: operations.GetSsoStrategiesRequest, config?: AxiosRequestConfig): Promise<operations.GetSsoStrategiesResponse>;
    /**
     * Show Sso Strategy
     *
     * @remarks
     * Show Sso Strategy
     */
    getSsoStrategiesId(req: operations.GetSsoStrategiesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSsoStrategiesIdResponse>;
    /**
     * Synchronize provisioning data with the SSO remote server.
     *
     * @remarks
     * Synchronize provisioning data with the SSO remote server.
     */
    postSsoStrategiesIdSync(req: operations.PostSsoStrategiesIdSyncRequest, config?: AxiosRequestConfig): Promise<operations.PostSsoStrategiesIdSyncResponse>;
}
