import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://compute-optimizer.{region}.amazonaws.com", "https://compute-optimizer.{region}.amazonaws.com", "http://compute-optimizer.{region}.amazonaws.com.cn", "https://compute-optimizer.{region}.amazonaws.com.cn"];
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
 * Compute Optimizer is a service that analyzes the configuration and utilization metrics of your Amazon Web Services compute resources, such as Amazon EC2 instances, Amazon EC2 Auto Scaling groups, Lambda functions, Amazon EBS volumes, and Amazon ECS services on Fargate. It reports whether your resources are optimal, and generates optimization recommendations to reduce the cost and improve the performance of your workloads. Compute Optimizer also provides recent utilization metric data, in addition to projected utilization metric data for the recommendations, which you can use to evaluate which recommendation provides the best price-performance trade-off. The analysis of your usage patterns can help you decide when to move or resize your running resources, and still meet your performance and capacity requirements. For more information about Compute Optimizer, including the required permissions to use the service, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/">Compute Optimizer User Guide</a>.
 *
 * @see {@link https://docs.aws.amazon.com/compute-optimizer/} - Amazon Web Services documentation
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
     * <p>Deletes a recommendation preference, such as enhanced infrastructure metrics.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>
     */
    deleteRecommendationPreferences(req: operations.DeleteRecommendationPreferencesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRecommendationPreferencesResponse>;
    /**
     * <p>Describes recommendation export jobs created in the last seven days.</p> <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your recommendations. Then use the <a>DescribeRecommendationExportJobs</a> action to view your export jobs.</p>
     */
    describeRecommendationExportJobs(req: operations.DescribeRecommendationExportJobsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRecommendationExportJobsResponse>;
    /**
     * <p>Exports optimization recommendations for Auto Scaling groups.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Auto Scaling group export job in progress per Amazon Web Services Region.</p>
     */
    exportAutoScalingGroupRecommendations(req: operations.ExportAutoScalingGroupRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.ExportAutoScalingGroupRecommendationsResponse>;
    /**
     * <p>Exports optimization recommendations for Amazon EBS volumes.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Amazon EBS volume export job in progress per Amazon Web Services Region.</p>
     */
    exportEBSVolumeRecommendations(req: operations.ExportEBSVolumeRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.ExportEBSVolumeRecommendationsResponse>;
    /**
     * <p>Exports optimization recommendations for Amazon EC2 instances.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Amazon EC2 instance export job in progress per Amazon Web Services Region.</p>
     */
    exportEc2InstanceRecommendations(req: operations.ExportEc2InstanceRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.ExportEc2InstanceRecommendationsResponse>;
    /**
     * <p> Exports optimization recommendations for Amazon ECS services on Fargate. </p> <p>Recommendations are exported in a CSV file, and its metadata in a JSON file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can only have one Amazon ECS service export job in progress per Amazon Web Services Region.</p>
     */
    exportECSServiceRecommendations(req: operations.ExportECSServiceRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.ExportECSServiceRecommendationsResponse>;
    /**
     * <p>Exports optimization recommendations for Lambda functions.</p> <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>You can have only one Lambda function export job in progress per Amazon Web Services Region.</p>
     */
    exportLambdaFunctionRecommendations(req: operations.ExportLambdaFunctionRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.ExportLambdaFunctionRecommendationsResponse>;
    /**
     * <p>Returns Auto Scaling group recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon EC2 Auto Scaling groups that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>
     */
    getAutoScalingGroupRecommendations(req: operations.GetAutoScalingGroupRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetAutoScalingGroupRecommendationsResponse>;
    /**
     * <p>Returns Amazon Elastic Block Store (Amazon EBS) volume recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon EBS volumes that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>
     */
    getEBSVolumeRecommendations(req: operations.GetEBSVolumeRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetEBSVolumeRecommendationsResponse>;
    /**
     * <p>Returns Amazon EC2 instance recommendations.</p> <p>Compute Optimizer generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) instances that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>
     */
    getEc2InstanceRecommendations(req: operations.GetEc2InstanceRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetEc2InstanceRecommendationsResponse>;
    /**
     * <p>Returns the projected utilization metrics of Amazon EC2 instance recommendations.</p> <note> <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected utilization metrics returned when you run this action. Additionally, the <code>Memory</code> metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p> </note>
     */
    getEc2RecommendationProjectedMetrics(req: operations.GetEc2RecommendationProjectedMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetEc2RecommendationProjectedMetricsResponse>;
    /**
     *  Returns the projected metrics of Amazon ECS service recommendations.
     */
    getECSServiceRecommendationProjectedMetrics(req: operations.GetECSServiceRecommendationProjectedMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetECSServiceRecommendationProjectedMetricsResponse>;
    /**
     * <p> Returns Amazon ECS service recommendations. </p> <p> Compute Optimizer generates recommendations for Amazon ECS services on Fargate that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>. </p>
     */
    getECSServiceRecommendations(req: operations.GetECSServiceRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetECSServiceRecommendationsResponse>;
    /**
     * <p>Returns the recommendation preferences that are in effect for a given resource, such as enhanced infrastructure metrics. Considers all applicable preferences that you might have set at the resource, account, and organization level.</p> <p>When you create a recommendation preference, you can set its status to <code>Active</code> or <code>Inactive</code>. Use this action to view the recommendation preferences that are in effect, or <code>Active</code>.</p>
     */
    getEffectiveRecommendationPreferences(req: operations.GetEffectiveRecommendationPreferencesRequest, config?: AxiosRequestConfig): Promise<operations.GetEffectiveRecommendationPreferencesResponse>;
    /**
     * <p>Returns the enrollment (opt in) status of an account to the Compute Optimizer service.</p> <p>If the account is the management account of an organization, this action also confirms the enrollment status of member accounts of the organization. Use the <a>GetEnrollmentStatusesForOrganization</a> action to get detailed information about the enrollment status of member accounts of an organization.</p>
     */
    getEnrollmentStatus(req: operations.GetEnrollmentStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetEnrollmentStatusResponse>;
    /**
     * <p>Returns the Compute Optimizer enrollment (opt-in) status of organization member accounts, if your account is an organization management account.</p> <p>To get the enrollment status of standalone accounts, use the <a>GetEnrollmentStatus</a> action.</p>
     */
    getEnrollmentStatusesForOrganization(req: operations.GetEnrollmentStatusesForOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.GetEnrollmentStatusesForOrganizationResponse>;
    /**
     * <p>Returns Lambda function recommendations.</p> <p>Compute Optimizer generates recommendations for functions that meet a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and requirements</a> in the <i>Compute Optimizer User Guide</i>.</p>
     */
    getLambdaFunctionRecommendations(req: operations.GetLambdaFunctionRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetLambdaFunctionRecommendationsResponse>;
    /**
     * <p>Returns existing recommendation preferences, such as enhanced infrastructure metrics.</p> <p>Use the <code>scope</code> parameter to specify which preferences to return. You can specify to return preferences for an organization, a specific account ID, or a specific EC2 instance or Auto Scaling group Amazon Resource Name (ARN).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>
     */
    getRecommendationPreferences(req: operations.GetRecommendationPreferencesRequest, config?: AxiosRequestConfig): Promise<operations.GetRecommendationPreferencesResponse>;
    /**
     * <p>Returns the optimization findings for an account.</p> <p>It returns the number of:</p> <ul> <li> <p>Amazon EC2 instances in an account that are <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code>.</p> </li> <li> <p>Auto Scaling groups in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Amazon EBS volumes in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Lambda functions in an account that are <code>NotOptimized</code>, or <code>Optimized</code>.</p> </li> <li> <p>Amazon ECS services in an account that are <code>Underprovisioned</code>, <code>Overprovisioned</code>, or <code>Optimized</code>.</p> </li> </ul>
     */
    getRecommendationSummaries(req: operations.GetRecommendationSummariesRequest, config?: AxiosRequestConfig): Promise<operations.GetRecommendationSummariesResponse>;
    /**
     * <p>Creates a new recommendation preference or updates an existing recommendation preference, such as enhanced infrastructure metrics.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating enhanced infrastructure metrics</a> in the <i>Compute Optimizer User Guide</i>.</p>
     */
    putRecommendationPreferences(req: operations.PutRecommendationPreferencesRequest, config?: AxiosRequestConfig): Promise<operations.PutRecommendationPreferencesResponse>;
    /**
     * <p>Updates the enrollment (opt in and opt out) status of an account to the Compute Optimizer service.</p> <p>If the account is a management account of an organization, this action can also be used to enroll member accounts of the organization.</p> <p>You must have the appropriate permissions to opt in to Compute Optimizer, to view its recommendations, and to opt out. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html">Controlling access with Amazon Web Services Identity and Access Management</a> in the <i>Compute Optimizer User Guide</i>.</p> <p>When you opt in, Compute Optimizer automatically creates a service-linked role in your account to access its data. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/using-service-linked-roles.html">Using Service-Linked Roles for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>
     */
    updateEnrollmentStatus(req: operations.UpdateEnrollmentStatusRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnrollmentStatusResponse>;
}
