import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://internetmonitor.{region}.api.aws", "https://internetmonitor.{region}.api.aws", "http://internetmonitor.{region}.amazonaws.com.cn", "https://internetmonitor.{region}.amazonaws.com.cn"];
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
 * <p>Amazon CloudWatch Internet Monitor provides visibility into how internet issues impact the performance and availability between your applications hosted on Amazon Web Services and your end users, reducing the time it takes for you to diagnose these issues, from days to minutes. You can explore internet measurements for different time frames and at different geographic granularities, and quickly visualize the impact of issues, and then take action to improve your end users' experience, for example, by switching to other Amazon Web Services services or rerouting traffic to your workload through differentAmazon Web Services Regions.</p> <p> If the issue is caused by the Amazon Web Services network, you'll automatically receive an Amazon Web Services Health Dashboard notification with the steps that Amazon Web Services is taking to mitigate the problem. To support integrating health information for geographies and networks specific to your application, Internet Monitor delivers measurements to CloudWatch Logs and CloudWatch Metrics. Internet Monitor also sends health events to Amazon EventBridge, so you can set up notifications. Internet Monitor monitors internet connectivity for your application through Amazon Virtual Private Clouds (VPCs), Amazon CloudFront distributions, and Amazon WorkSpaces directories.</p> <p>To use Internet Monitor, you create a <i>monitor</i> and add resources to it, Virtual Private Clouds (VPCs), Amazon CloudFront distributions, or WorkSpaces directories that show where your application's internet traffic is. Internet Monitor then provides internet measurements from Amazon Web Services that are specific to the locations and networks that communicate with your application. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html"> Using Amazon CloudWatch Internet Monitor</a> in the Amazon CloudWatch User Guide.</p>
 *
 * @see {@link https://docs.aws.amazon.com/internetmonitor/} - Amazon Web Services documentation
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
     * <p>Creates a monitor in Amazon CloudWatch Internet Monitor. A monitor is built based on information from the application resources that you add: Virtual Private Clouds (VPCs), Amazon CloudFront distributions, and WorkSpaces directories. </p> <p>After you create a monitor, you can view the internet performance for your application, scoped to a location, as well as any health events that are impairing traffic. Internet Monitor can also diagnose whether the impairment is on the Amazon Web Services network or is an issue with an internet service provider (ISP).</p>
     */
    createMonitor(req: operations.CreateMonitorRequest, config?: AxiosRequestConfig): Promise<operations.CreateMonitorResponse>;
    /**
     * Deletes a monitor in Amazon CloudWatch Internet Monitor.
     */
    deleteMonitor(req: operations.DeleteMonitorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMonitorResponse>;
    /**
     * <p>Gets information the Amazon CloudWatch Internet Monitor has created and stored about a health event for a specified monitor. This information includes the impacted locations, and all of the information related to the event by location.</p> <p>The information returned includes the performance, availability, and round-trip time impact, information about the network providers, the event type, and so on.</p> <p>Information rolled up at the global traffic level is also returned, including the impact type and total traffic impact.</p>
     */
    getHealthEvent(req: operations.GetHealthEventRequest, config?: AxiosRequestConfig): Promise<operations.GetHealthEventResponse>;
    /**
     * Gets information about a monitor in Amazon CloudWatch Internet Monitor based on a monitor name. The information returned includes the Amazon Resource Name (ARN), create time, modified time, resources included in the monitor, and status information.
     */
    getMonitor(req: operations.GetMonitorRequest, config?: AxiosRequestConfig): Promise<operations.GetMonitorResponse>;
    /**
     * <p>Lists all health events for a monitor in Amazon CloudWatch Internet Monitor. Returns all information for health events including the client location information the network cause and status, event start and end time, percentage of total traffic impacted, and status.</p> <note> <p>Health events that have start times during the time frame that is requested are not included in the list of health events.</p> </note>
     */
    listHealthEvents(req: operations.ListHealthEventsRequest, config?: AxiosRequestConfig): Promise<operations.ListHealthEventsResponse>;
    /**
     * Lists all of your monitors for Amazon CloudWatch Internet Monitor and their statuses, along with the Amazon Resource Name (ARN) and name of each monitor.
     */
    listMonitors(req: operations.ListMonitorsRequest, config?: AxiosRequestConfig): Promise<operations.ListMonitorsResponse>;
    /**
     * Lists the tags for a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * <p>Adds a tag to a resource. Tags are supported only for monitors in Amazon CloudWatch Internet Monitor. You can add a maximum of 50 tags in Internet Monitor.</p> <p>A minimum of one tag is required for this call. It returns an error if you use the <code>TagResource</code> request with 0 tags.</p>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes a tag from a resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates a monitor. You can update a monitor to add or remove resources, or to change the status of the monitor. You can't change the name of a monitor.
     */
    updateMonitor(req: operations.UpdateMonitorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMonitorResponse>;
}
