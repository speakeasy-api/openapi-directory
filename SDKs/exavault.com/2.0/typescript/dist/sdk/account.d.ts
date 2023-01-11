import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Account {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAccount - Get account settings
     *
     * Get settings for your account, such as current space usage, webhooks settings, welcome email content and IP address restrictions.
    **/
    getAccount(req: operations.GetAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountResponse>;
    /**
     * updateAccount - Update account settings
     *
     * Update account settings, such as welcome email content, IP address restrictions, webhooks settings and secure password requirements.
     *
     * **Notes**
     *
     * - You must have [admin-level access](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to change account settings.
    **/
    updateAccount(req: operations.UpdateAccountRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAccountResponse>;
}
