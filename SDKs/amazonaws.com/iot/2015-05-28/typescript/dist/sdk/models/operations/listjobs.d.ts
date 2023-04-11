import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An optional filter that lets you search for jobs that have the specified status.
 */
export declare enum ListJobsStatusEnum {
    InProgress = "IN_PROGRESS",
    Canceled = "CANCELED",
    Completed = "COMPLETED",
    DeletionInProgress = "DELETION_IN_PROGRESS",
    Scheduled = "SCHEDULED"
}
/**
 * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group. </p> <note> <p>We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets. By using continuous jobs, devices that join the group receive the job execution even after the job has been created.</p> </note>
 */
export declare enum ListJobsTargetSelectionEnum {
    Continuous = "CONTINUOUS",
    Snapshot = "SNAPSHOT"
}
export declare class ListJobsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of results to return per request.
     */
    maxResults?: number;
    /**
     * <p>The namespace used to indicate that a job is a customer-managed job.</p> <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.</p> <p> <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code> </p> <note> <p>The <code>namespaceId</code> feature is in public preview.</p> </note>
     */
    namespaceId?: string;
    /**
     * The token to retrieve the next set of results.
     */
    nextToken?: string;
    /**
     * An optional filter that lets you search for jobs that have the specified status.
     */
    status?: ListJobsStatusEnum;
    /**
     * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group. </p> <note> <p>We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets. By using continuous jobs, devices that join the group receive the job execution even after the job has been created.</p> </note>
     */
    targetSelection?: ListJobsTargetSelectionEnum;
    /**
     * A filter that limits the returned jobs to those for the specified group.
     */
    thingGroupId?: string;
    /**
     * A filter that limits the returned jobs to those for the specified group.
     */
    thingGroupName?: string;
}
export declare class ListJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listJobsResponse?: shared.ListJobsResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
