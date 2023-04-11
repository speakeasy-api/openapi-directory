import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Badges {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List badges
     */
    adminListBadges(config?: AxiosRequestConfig): Promise<operations.AdminListBadgesResponse>;
    /**
     * Create badge
     */
    createBadge(req: operations.CreateBadgeRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateBadgeResponse>;
    /**
     * Delete badge
     */
    deleteBadge(req: operations.DeleteBadgeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBadgeResponse>;
    /**
     * List badges for a user
     */
    listUserBadges(req: operations.ListUserBadgesRequest, config?: AxiosRequestConfig): Promise<operations.ListUserBadgesResponse>;
    /**
     * Update badge
     */
    updateBadge(req: operations.UpdateBadgeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBadgeResponse>;
}
