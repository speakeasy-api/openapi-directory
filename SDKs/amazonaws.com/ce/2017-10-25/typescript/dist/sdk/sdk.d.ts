import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://ce.{region}.amazonaws.com", "https://ce.{region}.amazonaws.com", "http://ce.{region}.amazonaws.com.cn", "https://ce.{region}.amazonaws.com.cn"];
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
 * <p>You can use the Cost Explorer API to programmatically query your cost and usage data. You can query for aggregated data such as total monthly costs or total daily usage. You can also query for granular data. This might include the number of daily write operations for Amazon DynamoDB database tables in your production environment. </p> <p>Service Endpoint</p> <p>The Cost Explorer API provides the following endpoint:</p> <ul> <li> <p> <code>https://ce.us-east-1.amazonaws.com</code> </p> </li> </ul> <p>For information about the costs that are associated with the Cost Explorer API, see <a href="http://aws.amazon.com/aws-cost-management/pricing/">Amazon Web Services Cost Management Pricing</a>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/ce/} - Amazon Web Services documentation
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
     * Creates a new cost anomaly detection monitor with the requested type and monitor specification.
     */
    createAnomalyMonitor(req: operations.CreateAnomalyMonitorRequest, config?: AxiosRequestConfig): Promise<operations.CreateAnomalyMonitorResponse>;
    /**
     * Adds an alert subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set an absolute or percentage threshold and a time frequency for receiving notifications.
     */
    createAnomalySubscription(req: operations.CreateAnomalySubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.CreateAnomalySubscriptionResponse>;
    /**
     * Creates a new Cost Category with the requested name and rules.
     */
    createCostCategoryDefinition(req: operations.CreateCostCategoryDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateCostCategoryDefinitionResponse>;
    /**
     * Deletes a cost anomaly monitor.
     */
    deleteAnomalyMonitor(req: operations.DeleteAnomalyMonitorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAnomalyMonitorResponse>;
    /**
     * Deletes a cost anomaly subscription.
     */
    deleteAnomalySubscription(req: operations.DeleteAnomalySubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAnomalySubscriptionResponse>;
    /**
     * Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.
     */
    deleteCostCategoryDefinition(req: operations.DeleteCostCategoryDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCostCategoryDefinitionResponse>;
    /**
     * <p>Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a Cost Category that's defined in the account.</p> <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that's active on a specific date. If there's no <code>EffectiveOn</code> specified, you see a Cost Category that's effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>
     */
    describeCostCategoryDefinition(req: operations.DescribeCostCategoryDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCostCategoryDefinitionResponse>;
    /**
     * Retrieves all of the cost anomalies detected on your account during the time period that's specified by the <code>DateInterval</code> object. Anomalies are available for up to 90 days.
     */
    getAnomalies(req: operations.GetAnomaliesRequest, config?: AxiosRequestConfig): Promise<operations.GetAnomaliesResponse>;
    /**
     * Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs).
     */
    getAnomalyMonitors(req: operations.GetAnomalyMonitorsRequest, config?: AxiosRequestConfig): Promise<operations.GetAnomalyMonitorsResponse>;
    /**
     * Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs).
     */
    getAnomalySubscriptions(req: operations.GetAnomalySubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAnomalySubscriptionsResponse>;
    /**
     * <p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric that you want the request to return. For example, you can specify <code>BlendedCosts</code> or <code>UsageQuantity</code>. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts.</p> <p>For information about filter limitations, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-limits.html">Quotas and restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p>
     */
    getCostAndUsage(req: operations.GetCostAndUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetCostAndUsageResponse>;
    /**
     * <p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p> <note> <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information about how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>Billing and Cost Management User Guide</i>.</p> </note>
     */
    getCostAndUsageWithResources(req: operations.GetCostAndUsageWithResourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetCostAndUsageWithResourcesResponse>;
    /**
     * <p>Retrieves an array of Cost Category names and values incurred cost.</p> <note> <p>If some Cost Category names and values are not associated with any cost, they will not be returned by this API.</p> </note>
     */
    getCostCategories(req: operations.GetCostCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetCostCategoriesResponse>;
    /**
     * Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs.
     */
    getCostForecast(req: operations.GetCostForecastRequest, config?: AxiosRequestConfig): Promise<operations.GetCostForecastResponse>;
    /**
     * Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string.
     */
    getDimensionValues(req: operations.GetDimensionValuesRequest, config?: AxiosRequestConfig): Promise<operations.GetDimensionValuesResponse>;
    /**
     * <p>Retrieves the reservation coverage for your account, which you can use to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data about reservation usage by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>
     */
    getReservationCoverage(req: operations.GetReservationCoverageRequest, config?: AxiosRequestConfig): Promise<operations.GetReservationCoverageResponse>;
    /**
     * <p>Gets recommendations for reservation purchases. These recommendations might help you to reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p> <p>Amazon Web Services generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After Amazon Web Services has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of Reserved Instance (RI) to purchase to maximize your estimated savings. </p> <p>For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible Reserved Instance (RI). Amazon Web Services also shows the equal number of normalized units. This way, you can purchase any instance size that you want. For this example, your RI recommendation is for <code>c4.large</code> because that is the smallest size instance in the c4 instance family.</p>
     */
    getReservationPurchaseRecommendation(req: operations.GetReservationPurchaseRecommendationRequest, config?: AxiosRequestConfig): Promise<operations.GetReservationPurchaseRecommendationResponse>;
    /**
     * Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>.
     */
    getReservationUtilization(req: operations.GetReservationUtilizationRequest, config?: AxiosRequestConfig): Promise<operations.GetReservationUtilizationResponse>;
    /**
     * <p>Creates recommendations that help you save cost by identifying idle and underutilized Amazon EC2 instances.</p> <p>Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For more information about calculation and function, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html">Optimizing Your Cost with Rightsizing Recommendations</a> in the <i>Billing and Cost Management User Guide</i>.</p>
     */
    getRightsizingRecommendation(req: operations.GetRightsizingRecommendationRequest, config?: AxiosRequestConfig): Promise<operations.GetRightsizingRecommendationResponse>;
    /**
     * <p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>INSTANCE_FAMILY</code> </p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation.</p>
     */
    getSavingsPlansCoverage(req: operations.GetSavingsPlansCoverageRequest, config?: AxiosRequestConfig): Promise<operations.GetSavingsPlansCoverageResponse>;
    /**
     * Retrieves the Savings Plans recommendations for your account. First use <code>StartSavingsPlansPurchaseRecommendationGeneration</code> to generate a new set of recommendations, and then use <code>GetSavingsPlansPurchaseRecommendation</code> to retrieve them.
     */
    getSavingsPlansPurchaseRecommendation(req: operations.GetSavingsPlansPurchaseRecommendationRequest, config?: AxiosRequestConfig): Promise<operations.GetSavingsPlansPurchaseRecommendationResponse>;
    /**
     * <p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p>You can't group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p> </note>
     */
    getSavingsPlansUtilization(req: operations.GetSavingsPlansUtilizationRequest, config?: AxiosRequestConfig): Promise<operations.GetSavingsPlansUtilizationResponse>;
    /**
     * <p>Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p> <code>GetSavingsPlanUtilizationDetails</code> internally groups data by <code>SavingsPlansArn</code>.</p> </note>
     */
    getSavingsPlansUtilizationDetails(req: operations.GetSavingsPlansUtilizationDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetSavingsPlansUtilizationDetailsResponse>;
    /**
     * Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string.
     */
    getTags(req: operations.GetTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsResponse>;
    /**
     * Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage.
     */
    getUsageForecast(req: operations.GetUsageForecastRequest, config?: AxiosRequestConfig): Promise<operations.GetUsageForecastResponse>;
    /**
     * Get a list of cost allocation tags. All inputs in the API are optional and serve as filters. By default, all cost allocation tags are returned.
     */
    listCostAllocationTags(req: operations.ListCostAllocationTagsRequest, config?: AxiosRequestConfig): Promise<operations.ListCostAllocationTagsResponse>;
    /**
     * Returns the name, Amazon Resource Name (ARN), <code>NumberOfRules</code> and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.
     */
    listCostCategoryDefinitions(req: operations.ListCostCategoryDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ListCostCategoryDefinitionsResponse>;
    /**
     * Retrieves a list of your historical recommendation generations within the past 30 days.
     */
    listSavingsPlansPurchaseRecommendationGeneration(req: operations.ListSavingsPlansPurchaseRecommendationGenerationRequest, config?: AxiosRequestConfig): Promise<operations.ListSavingsPlansPurchaseRecommendationGenerationResponse>;
    /**
     * Returns a list of resource tags associated with the resource specified by the Amazon Resource Name (ARN).
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Modifies the feedback property of a given cost anomaly.
     */
    provideAnomalyFeedback(req: operations.ProvideAnomalyFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.ProvideAnomalyFeedbackResponse>;
    /**
     * <p>Requests a Savings Plans recommendation generation. This enables you to calculate a fresh set of Savings Plans recommendations that takes your latest usage data and current Savings Plans inventory into account. You can refresh Savings Plans recommendations up to three times daily for a consolidated billing family.</p> <note> <p> <code>StartSavingsPlansPurchaseRecommendationGeneration</code> has no request syntax because no input parameters are needed to support this operation.</p> </note>
     */
    startSavingsPlansPurchaseRecommendationGeneration(req: operations.StartSavingsPlansPurchaseRecommendationGenerationRequest, config?: AxiosRequestConfig): Promise<operations.StartSavingsPlansPurchaseRecommendationGenerationResponse>;
    /**
     * <p>An API operation for adding one or more tags (key-value pairs) to a resource.</p> <p>You can use the <code>TagResource</code> operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value you specify replaces the previous value for that tag.</p> <p>Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use.</p>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes one or more tags from a resource. Specify only tag keys in your request. Don't specify the value.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates an existing cost anomaly monitor. The changes made are applied going forward, and doesn't change anomalies detected in the past.
     */
    updateAnomalyMonitor(req: operations.UpdateAnomalyMonitorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAnomalyMonitorResponse>;
    /**
     * Updates an existing cost anomaly monitor subscription.
     */
    updateAnomalySubscription(req: operations.UpdateAnomalySubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAnomalySubscriptionResponse>;
    /**
     * Updates status for cost allocation tags in bulk, with maximum batch size of 20. If the tag status that's updated is the same as the existing tag status, the request doesn't fail. Instead, it doesn't have any effect on the tag status (for example, activating the active tag).
     */
    updateCostAllocationTagsStatus(req: operations.UpdateCostAllocationTagsStatusRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCostAllocationTagsStatusResponse>;
    /**
     * Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.
     */
    updateCostCategoryDefinition(req: operations.UpdateCostCategoryDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCostCategoryDefinitionResponse>;
}
