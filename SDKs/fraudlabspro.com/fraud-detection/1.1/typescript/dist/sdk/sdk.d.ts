import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.fraudlabspro.com", "https://virtserver.swaggerhub.com/fraudlabspro/fraudlabspro/1.0"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Online payment fraud detection service. It helps merchants to minimize chargebacks and therefore maximize the revenue. It can be used to detect fraud for various kinds of payment method, such as credit card, paypal, cod and so on. Please visit https://www.fraudlabspro.com to learn more.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Feedback the status of an order transaction.
     */
    postV1OrderFeedback(req: operations.PostV1OrderFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.PostV1OrderFeedbackResponse>;
    /**
     * Screen order for payment fraud.
     */
    postV1OrderScreen(req: operations.PostV1OrderScreenRequest, config?: AxiosRequestConfig): Promise<operations.PostV1OrderScreenResponse>;
}
