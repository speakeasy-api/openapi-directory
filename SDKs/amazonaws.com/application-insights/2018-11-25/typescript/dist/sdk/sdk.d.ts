import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://applicationinsights.{region}.amazonaws.com", "https://applicationinsights.{region}.amazonaws.com", "http://applicationinsights.{region}.amazonaws.com.cn", "https://applicationinsights.{region}.amazonaws.com.cn"];
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
 * <fullname>Amazon CloudWatch Application Insights</fullname> <p> Amazon CloudWatch Application Insights is a service that helps you detect common problems with your applications. It enables you to pinpoint the source of issues in your applications (built with technologies such as Microsoft IIS, .NET, and Microsoft SQL Server), by providing key insights into detected problems.</p> <p>After you onboard your application, CloudWatch Application Insights identifies, recommends, and sets up metrics and logs. It continuously analyzes and correlates your metrics and logs for unusual behavior to surface actionable problems with your application. For example, if your application is slow and unresponsive and leading to HTTP 500 errors in your Application Load Balancer (ALB), Application Insights informs you that a memory pressure problem with your SQL Server database is occurring. It bases this analysis on impactful metrics and log errors. </p>
 *
 * @see {@link https://docs.aws.amazon.com/applicationinsights/} - Amazon Web Services documentation
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
     * Adds an application that is created from a resource group.
     */
    createApplication(req: operations.CreateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationResponse>;
    /**
     * Creates a custom component by grouping similar standalone instances to monitor.
     */
    createComponent(req: operations.CreateComponentRequest, config?: AxiosRequestConfig): Promise<operations.CreateComponentResponse>;
    /**
     * Adds an log pattern to a <code>LogPatternSet</code>.
     */
    createLogPattern(req: operations.CreateLogPatternRequest, config?: AxiosRequestConfig): Promise<operations.CreateLogPatternResponse>;
    /**
     * Removes the specified application from monitoring. Does not delete the application.
     */
    deleteApplication(req: operations.DeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.
     */
    deleteComponent(req: operations.DeleteComponentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteComponentResponse>;
    /**
     * Removes the specified log pattern from a <code>LogPatternSet</code>.
     */
    deleteLogPattern(req: operations.DeleteLogPatternRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLogPatternResponse>;
    /**
     * Describes the application.
     */
    describeApplication(req: operations.DescribeApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeApplicationResponse>;
    /**
     * Describes a component and lists the resources that are grouped together in a component.
     */
    describeComponent(req: operations.DescribeComponentRequest, config?: AxiosRequestConfig): Promise<operations.DescribeComponentResponse>;
    /**
     * Describes the monitoring configuration of the component.
     */
    describeComponentConfiguration(req: operations.DescribeComponentConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeComponentConfigurationResponse>;
    /**
     * Describes the recommended monitoring configuration of the component.
     */
    describeComponentConfigurationRecommendation(req: operations.DescribeComponentConfigurationRecommendationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeComponentConfigurationRecommendationResponse>;
    /**
     * Describe a specific log pattern from a <code>LogPatternSet</code>.
     */
    describeLogPattern(req: operations.DescribeLogPatternRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLogPatternResponse>;
    /**
     * Describes an anomaly or error with the application.
     */
    describeObservation(req: operations.DescribeObservationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeObservationResponse>;
    /**
     * Describes an application problem.
     */
    describeProblem(req: operations.DescribeProblemRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProblemResponse>;
    /**
     * Describes the anomalies or errors associated with the problem.
     */
    describeProblemObservations(req: operations.DescribeProblemObservationsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProblemObservationsResponse>;
    /**
     * Lists the IDs of the applications that you are monitoring.
     */
    listApplications(req: operations.ListApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationsResponse>;
    /**
     * Lists the auto-grouped, standalone, and custom components of the application.
     */
    listComponents(req: operations.ListComponentsRequest, config?: AxiosRequestConfig): Promise<operations.ListComponentsResponse>;
    /**
     * <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>
     */
    listConfigurationHistory(req: operations.ListConfigurationHistoryRequest, config?: AxiosRequestConfig): Promise<operations.ListConfigurationHistoryResponse>;
    /**
     * Lists the log pattern sets in the specific application.
     */
    listLogPatternSets(req: operations.ListLogPatternSetsRequest, config?: AxiosRequestConfig): Promise<operations.ListLogPatternSetsResponse>;
    /**
     * Lists the log patterns in the specific log <code>LogPatternSet</code>.
     */
    listLogPatterns(req: operations.ListLogPatternsRequest, config?: AxiosRequestConfig): Promise<operations.ListLogPatternsResponse>;
    /**
     * Lists the problems with your application.
     */
    listProblems(req: operations.ListProblemsRequest, config?: AxiosRequestConfig): Promise<operations.ListProblemsResponse>;
    /**
     * Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * <p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Remove one or more tags (keys and values) from a specified application.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates the application.
     */
    updateApplication(req: operations.UpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationResponse>;
    /**
     * Updates the custom component name and/or the list of resources that make up the component.
     */
    updateComponent(req: operations.UpdateComponentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateComponentResponse>;
    /**
     * Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>.
     */
    updateComponentConfiguration(req: operations.UpdateComponentConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateComponentConfigurationResponse>;
    /**
     * Adds a log pattern to a <code>LogPatternSet</code>.
     */
    updateLogPattern(req: operations.UpdateLogPatternRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLogPatternResponse>;
}
