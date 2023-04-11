import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://savingsplans.{region}.amazonaws.com", "https://savingsplans.{region}.amazonaws.com", "http://savingsplans.{region}.amazonaws.com.cn", "https://savingsplans.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * Savings Plans are a pricing model that offer significant savings on AWS usage (for example, on Amazon EC2 instances). You commit to a consistent amount of usage, in USD per hour, for a term of 1 or 3 years, and receive a lower price for that usage. For more information, see the <a href="https://docs.aws.amazon.com/savingsplans/latest/userguide/">AWS Savings Plans User Guide</a>.
 *
 * @see {@link https://docs.aws.amazon.com/savingsplans/} - Amazon Web Services documentation
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
     * Creates a Savings Plan.
     */
    createSavingsPlan(req: operations.CreateSavingsPlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateSavingsPlanResponse>;
    /**
     * Deletes the queued purchase for the specified Savings Plan.
     */
    deleteQueuedSavingsPlan(req: operations.DeleteQueuedSavingsPlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteQueuedSavingsPlanResponse>;
    /**
     * Describes the specified Savings Plans rates.
     */
    describeSavingsPlanRates(req: operations.DescribeSavingsPlanRatesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSavingsPlanRatesResponse>;
    /**
     * Describes the specified Savings Plans.
     */
    describeSavingsPlans(req: operations.DescribeSavingsPlansRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSavingsPlansResponse>;
    /**
     * Describes the specified Savings Plans offering rates.
     */
    describeSavingsPlansOfferingRates(req: operations.DescribeSavingsPlansOfferingRatesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSavingsPlansOfferingRatesResponse>;
    /**
     * Describes the specified Savings Plans offerings.
     */
    describeSavingsPlansOfferings(req: operations.DescribeSavingsPlansOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSavingsPlansOfferingsResponse>;
    /**
     * Lists the tags for the specified resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Adds the specified tags to the specified resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes the specified tags from the specified resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
