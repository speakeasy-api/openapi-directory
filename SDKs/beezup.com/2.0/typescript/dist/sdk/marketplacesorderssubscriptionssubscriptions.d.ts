import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MarketplacesOrdersSubscriptionsSubscriptions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Activate a subscription to the orders
     *
     * @remarks
     * At this moment, BeezUP will ensure that your callback url is respecting this specification:
     * - https://app.swaggerhub.com/apis/BeezUP/public_marketplaces_orders_subscriptions_consumer-dev/1.0#/Subscriptions/Verification
     *
     * After that we will send you the orders related to your subscription, respecting this specification:
     * - https://app.swaggerhub.com/apis/BeezUP/public_marketplaces_orders_subscriptions_consumer-dev/1.0#/Subscriptions/PushOrders
     *
     */
    activateSubscription(req: operations.ActivateSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.ActivateSubscriptionResponse>;
    /**
     * Creates a subscription to the orders
     *
     * @remarks
     * Please take a look at this sequence diagram to understand the subscription process to follow [here](https://www.websequencediagrams.com/files/render?link=SBYbeIc8NGshk6ooCbmjoBLIMl4fIGO1xjJbPBQAglBo0n6BwEReh7NXQiPSjOTX)
     */
    createSubscription(req: operations.CreateSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubscriptionResponse>;
    /**
     * Deactivate a subscription to the orders
     */
    deactivateSubscription(req: operations.DeactivateSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.DeactivateSubscriptionResponse>;
    /**
     * Delete a subscription to the orders
     */
    deleteSubscription(req: operations.DeleteSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubscriptionResponse>;
    /**
     * Get a subscription to the orders
     */
    getSubscription(req: operations.GetSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionResponse>;
    /**
     * Get the subscription list
     */
    getSubscriptionList(config?: AxiosRequestConfig): Promise<operations.GetSubscriptionListResponse>;
    /**
     * Get the push reporting related to this subscription
     */
    getSubscriptionPushReporting(req: operations.GetSubscriptionPushReportingRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionPushReportingResponse>;
    /**
     * Force retry push orders immediatly
     *
     * @remarks
     * In case your subscription consumption is unavailable and your subscription is still active you can ask to retry immediatly to push orders instead of waiting the next scheduled retry date
     */
    retryPushOrders(req: operations.RetryPushOrdersRequest, config?: AxiosRequestConfig): Promise<operations.RetryPushOrdersResponse>;
}
