import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://autoscaling-plans.{region}.amazonaws.com", "https://autoscaling-plans.{region}.amazonaws.com", "http://autoscaling-plans.{region}.amazonaws.com.cn", "https://autoscaling-plans.{region}.amazonaws.com.cn"];
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
 * <fullname>AWS Auto Scaling</fullname> <p>Use AWS Auto Scaling to create scaling plans for your applications to automatically scale your scalable AWS resources. </p> <p> <b>API Summary</b> </p> <p>You can use the AWS Auto Scaling service API to accomplish the following tasks:</p> <ul> <li> <p>Create and manage scaling plans</p> </li> <li> <p>Define target tracking scaling policies to dynamically scale your resources based on utilization</p> </li> <li> <p>Scale Amazon EC2 Auto Scaling groups using predictive scaling and dynamic scaling to scale your Amazon EC2 capacity faster</p> </li> <li> <p>Set minimum and maximum capacity limits</p> </li> <li> <p>Retrieve information on existing scaling plans</p> </li> <li> <p>Access current forecast data and historical forecast data for up to 56 days previous</p> </li> </ul> <p>To learn more about AWS Auto Scaling, including information about granting IAM users required permissions for AWS Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/what-is-aws-auto-scaling.html">AWS Auto Scaling User Guide</a>. </p>
 *
 * @see {@link https://docs.aws.amazon.com/autoscaling-plans/} - Amazon Web Services documentation
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
     * Creates a scaling plan.
     */
    createScalingPlan(req: operations.CreateScalingPlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateScalingPlanResponse>;
    /**
     * <p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>
     */
    deleteScalingPlan(req: operations.DeleteScalingPlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteScalingPlanResponse>;
    /**
     * Describes the scalable resources in the specified scaling plan.
     */
    describeScalingPlanResources(req: operations.DescribeScalingPlanResourcesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeScalingPlanResourcesResponse>;
    /**
     * Describes one or more of your scaling plans.
     */
    describeScalingPlans(req: operations.DescribeScalingPlansRequest, config?: AxiosRequestConfig): Promise<operations.DescribeScalingPlansResponse>;
    /**
     * <p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>
     */
    getScalingPlanResourceForecastData(req: operations.GetScalingPlanResourceForecastDataRequest, config?: AxiosRequestConfig): Promise<operations.GetScalingPlanResourceForecastDataResponse>;
    /**
     * <p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>
     */
    updateScalingPlan(req: operations.UpdateScalingPlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateScalingPlanResponse>;
}
