import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class User {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get user store purchases
     *
     * @remarks
     * Get user store purchases
     */
    getUserStorePurchases(req: operations.GetUserStorePurchasesRequest, security: operations.GetUserStorePurchasesSecurity, config?: AxiosRequestConfig): Promise<operations.GetUserStorePurchasesResponse>;
    /**
     * Get user store recommendations
     *
     * @remarks
     * Get user store recommendations
     */
    getUserStoreRecommendations(req: operations.GetUserStoreRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserStoreRecommendationsResponse>;
    /**
     * Get user watching
     *
     * @remarks
     * Get user watching
     */
    getUserWatching(req: operations.GetUserWatchingRequest, config?: AxiosRequestConfig): Promise<operations.GetUserWatchingResponse>;
}
