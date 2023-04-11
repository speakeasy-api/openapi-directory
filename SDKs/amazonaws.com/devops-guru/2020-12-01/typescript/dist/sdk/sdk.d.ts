import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://devops-guru.{region}.amazonaws.com", "https://devops-guru.{region}.amazonaws.com", "http://devops-guru.{region}.amazonaws.com.cn", "https://devops-guru.{region}.amazonaws.com.cn"];
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
 * <p> Amazon DevOps Guru is a fully managed service that helps you identify anomalous behavior in business critical operational applications. You specify the Amazon Web Services resources that you want DevOps Guru to cover, then the Amazon CloudWatch metrics and Amazon Web Services CloudTrail events related to those resources are analyzed. When anomalous behavior is detected, DevOps Guru creates an <i>insight</i> that includes recommendations, related events, and related metrics that can help you improve your operational applications. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html">What is Amazon DevOps Guru</a>. </p> <p> You can specify 1 or 2 Amazon Simple Notification Service topics so you are notified every time a new insight is created. You can also enable DevOps Guru to generate an OpsItem in Amazon Web Services Systems Manager for each insight to help you manage and track your work addressing insights. </p> <p> To learn about the DevOps Guru workflow, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html#how-it-works">How DevOps Guru works</a>. To learn about DevOps Guru concepts, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/concepts.html">Concepts in DevOps Guru</a>. </p>
 *
 * @see {@link https://docs.aws.amazon.com/devops-guru/} - Amazon Web Services documentation
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
     * <p> Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>
     */
    addNotificationChannel(req: operations.AddNotificationChannelRequest, config?: AxiosRequestConfig): Promise<operations.AddNotificationChannelResponse>;
    /**
     * Deletes the insight along with the associated anomalies, events and recommendations.
     */
    deleteInsight(req: operations.DeleteInsightRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInsightResponse>;
    /**
     *  Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account.
     */
    describeAccountHealth(req: operations.DescribeAccountHealthRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAccountHealthResponse>;
    /**
     *  For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights.
     */
    describeAccountOverview(req: operations.DescribeAccountOverviewRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAccountOverviewResponse>;
    /**
     *  Returns details about an anomaly that you specify using its ID.
     */
    describeAnomaly(req: operations.DescribeAnomalyRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAnomalyResponse>;
    /**
     * Returns the integration status of services that are integrated with DevOps Guru as Consumer via EventBridge. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.
     */
    describeEventSourcesConfig(req: operations.DescribeEventSourcesConfigRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEventSourcesConfigResponse>;
    /**
     *  Returns the most recent feedback submitted in the current Amazon Web Services account and Region.
     */
    describeFeedback(req: operations.DescribeFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFeedbackResponse>;
    /**
     *  Returns details about an insight that you specify using its ID.
     */
    describeInsight(req: operations.DescribeInsightRequest, config?: AxiosRequestConfig): Promise<operations.DescribeInsightResponse>;
    /**
     * Returns active insights, predictive insights, and resource hours analyzed in last hour.
     */
    describeOrganizationHealth(req: operations.DescribeOrganizationHealthRequest, config?: AxiosRequestConfig): Promise<operations.DescribeOrganizationHealthResponse>;
    /**
     * Returns an overview of your organization's history based on the specified time range. The overview includes the total reactive and proactive insights.
     */
    describeOrganizationOverview(req: operations.DescribeOrganizationOverviewRequest, config?: AxiosRequestConfig): Promise<operations.DescribeOrganizationOverviewResponse>;
    /**
     * Provides an overview of your system's health. If additional member accounts are part of your organization, you can filter those accounts using the <code>AccountIds</code> field.
     */
    describeOrganizationResourceCollectionHealth(req: operations.DescribeOrganizationResourceCollectionHealthRequest, config?: AxiosRequestConfig): Promise<operations.DescribeOrganizationResourceCollectionHealthResponse>;
    /**
     *  Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in resource collections in your account. You specify the type of Amazon Web Services resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks.
     */
    describeResourceCollectionHealth(req: operations.DescribeResourceCollectionHealthRequest, config?: AxiosRequestConfig): Promise<operations.DescribeResourceCollectionHealthResponse>;
    /**
     *  Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight.
     */
    describeServiceIntegration(req: operations.DescribeServiceIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeServiceIntegrationResponse>;
    /**
     * Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.
     */
    getCostEstimation(req: operations.GetCostEstimationRequest, config?: AxiosRequestConfig): Promise<operations.GetCostEstimationResponse>;
    /**
     *  Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks.
     */
    getResourceCollection(req: operations.GetResourceCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceCollectionResponse>;
    /**
     *  Returns a list of the anomalies that belong to an insight that you specify using its ID.
     */
    listAnomaliesForInsight(req: operations.ListAnomaliesForInsightRequest, config?: AxiosRequestConfig): Promise<operations.ListAnomaliesForInsightResponse>;
    /**
     *  Returns the list of log groups that contain log anomalies.
     */
    listAnomalousLogGroups(req: operations.ListAnomalousLogGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListAnomalousLogGroupsResponse>;
    /**
     *  Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned.
     */
    listEvents(req: operations.ListEventsRequest, config?: AxiosRequestConfig): Promise<operations.ListEventsResponse>;
    /**
     *  Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time and status (<code>ONGOING</code>, <code>CLOSED</code>, or <code>ANY</code>).
     */
    listInsights(req: operations.ListInsightsRequest, config?: AxiosRequestConfig): Promise<operations.ListInsightsResponse>;
    /**
     *  Returns the list of all log groups that are being monitored and tagged by DevOps Guru.
     */
    listMonitoredResources(req: operations.ListMonitoredResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListMonitoredResourcesResponse>;
    /**
     *  Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
     */
    listNotificationChannels(req: operations.ListNotificationChannelsRequest, config?: AxiosRequestConfig): Promise<operations.ListNotificationChannelsResponse>;
    /**
     * Returns a list of insights associated with the account or OU Id.
     */
    listOrganizationInsights(req: operations.ListOrganizationInsightsRequest, config?: AxiosRequestConfig): Promise<operations.ListOrganizationInsightsResponse>;
    /**
     *  Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events.
     */
    listRecommendations(req: operations.ListRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.ListRecommendationsResponse>;
    /**
     *  Collects customer feedback about the specified insight.
     */
    putFeedback(req: operations.PutFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.PutFeedbackResponse>;
    /**
     *  Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations.
     */
    removeNotificationChannel(req: operations.RemoveNotificationChannelRequest, config?: AxiosRequestConfig): Promise<operations.RemoveNotificationChannelResponse>;
    /**
     * <p> Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code> or <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>
     */
    searchInsights(req: operations.SearchInsightsRequest, config?: AxiosRequestConfig): Promise<operations.SearchInsightsResponse>;
    /**
     * <p> Returns a list of insights in your organization. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code>, <code>CLOSED</code>, and <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>
     */
    searchOrganizationInsights(req: operations.SearchOrganizationInsightsRequest, config?: AxiosRequestConfig): Promise<operations.SearchOrganizationInsightsResponse>;
    /**
     * Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services resources.
     */
    startCostEstimation(req: operations.StartCostEstimationRequest, config?: AxiosRequestConfig): Promise<operations.StartCostEstimationResponse>;
    /**
     * Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.
     */
    updateEventSourcesConfig(req: operations.UpdateEventSourcesConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEventSourcesConfigResponse>;
    /**
     *  Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps Guru.
     */
    updateResourceCollection(req: operations.UpdateResourceCollectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResourceCollectionResponse>;
    /**
     *  Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight.
     */
    updateServiceIntegration(req: operations.UpdateServiceIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceIntegrationResponse>;
}
