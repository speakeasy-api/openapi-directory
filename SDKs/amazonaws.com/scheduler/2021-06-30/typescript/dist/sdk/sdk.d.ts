import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://scheduler.{region}.amazonaws.com", "https://scheduler.{region}.amazonaws.com", "http://scheduler.{region}.amazonaws.com.cn", "https://scheduler.{region}.amazonaws.com.cn"];
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
 *  Amazon EventBridge Scheduler is a serverless scheduler that allows you to create, run, and manage tasks from one central, managed service. EventBridge Scheduler delivers your tasks reliably, with built-in mechanisms that adjust your schedules based on the availability of downstream targets. The following reference lists the available API actions, and data types for EventBridge Scheduler.
 *
 * @see {@link https://docs.aws.amazon.com/scheduler/} - Amazon Web Services documentation
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
     * Creates the specified schedule.
     */
    createSchedule(req: operations.CreateScheduleRequest, config?: AxiosRequestConfig): Promise<operations.CreateScheduleResponse>;
    /**
     * Creates the specified schedule group.
     */
    createScheduleGroup(req: operations.CreateScheduleGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateScheduleGroupResponse>;
    /**
     * Deletes the specified schedule.
     */
    deleteSchedule(req: operations.DeleteScheduleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteScheduleResponse>;
    /**
     * <p>Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group. When you delete a group, it remains in a <code>DELETING</code> state until all of its associated schedules are deleted. Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets until the schedule group and its associated schedules are deleted.</p> <note> <p> This operation is eventually consistent. </p> </note>
     */
    deleteScheduleGroup(req: operations.DeleteScheduleGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteScheduleGroupResponse>;
    /**
     * Retrieves the specified schedule.
     */
    getSchedule(req: operations.GetScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetScheduleResponse>;
    /**
     * Retrieves the specified schedule group.
     */
    getScheduleGroup(req: operations.GetScheduleGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetScheduleGroupResponse>;
    /**
     * Returns a paginated list of your schedule groups.
     */
    listScheduleGroups(req: operations.ListScheduleGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListScheduleGroupsResponse>;
    /**
     * Returns a paginated list of your EventBridge Scheduler schedules.
     */
    listSchedules(req: operations.ListSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.ListSchedulesResponse>;
    /**
     * Lists the tags associated with the Scheduler resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Assigns one or more tags (key-value pairs) to the specified EventBridge Scheduler resource. You can only assign tags to schedule groups.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes one or more tags from the specified EventBridge Scheduler schedule group.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * <p> Updates the specified schedule. When you call <code>UpdateSchedule</code>, EventBridge Scheduler uses all values, including empty values, specified in the request and overrides the existing schedule. This is by design. This means that if you do not set an optional field in your request, that field will be set to its system-default value after the update. </p> <p> Before calling this operation, we recommend that you call the <code>GetSchedule</code> API operation and make a note of all optional parameters for your <code>UpdateSchedule</code> call. </p>
     */
    updateSchedule(req: operations.UpdateScheduleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateScheduleResponse>;
}
