import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The account APIs allow you review and change account settings. Many account settings will have immediate effects on all current and future users, so consider adding a user facing confirmation step before sending an update call.
 */
export declare class Account {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get account settings
     *
     * @remarks
     * Get settings for your account, such as current space usage, webhooks settings, welcome email content and IP address restrictions.
     */
    getAccount(req: operations.GetAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountResponse>;
    /**
     * Update account settings
     *
     * @remarks
     * Update account settings, such as welcome email content, IP address restrictions, webhooks settings and secure password requirements.
     *
     * **Notes**
     *
     * - You must have [admin-level access](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to change account settings.
     */
    updateAccount(req: operations.UpdateAccountRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAccountResponse>;
}
