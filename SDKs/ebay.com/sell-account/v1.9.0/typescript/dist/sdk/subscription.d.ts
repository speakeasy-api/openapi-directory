import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Subscription {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * This method retrieves a list of subscriptions associated with the seller account.
     */
    getSubscription(req: operations.GetSubscriptionRequest, security: operations.GetSubscriptionSecurity, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionResponse>;
}
