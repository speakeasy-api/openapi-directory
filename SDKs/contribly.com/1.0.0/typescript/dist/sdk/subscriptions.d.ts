import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Subscribe to be alerted when events occur. For example receive email notification when a contribution is flagged.
 */
export declare class Subscriptions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a subscription.
     */
    deleteSubscriptionsId(req: operations.DeleteSubscriptionsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubscriptionsIdResponse>;
    /**
     * Subscription types
     *
     * @remarks
     * List available subscription types
     */
    getSubscriptionTypes(config?: AxiosRequestConfig): Promise<operations.GetSubscriptionTypesResponse>;
}
