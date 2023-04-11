import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An optional filter that lets you search for jobs that have the specified status.
 */
export declare enum ListJobExecutionsForThingStatusEnum {
    Queued = "QUEUED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    TimedOut = "TIMED_OUT",
    Rejected = "REJECTED",
    Removed = "REMOVED",
    Canceled = "CANCELED"
}
export declare class ListJobExecutionsForThingRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier you assigned to this job when it was created.
     */
    jobId?: string;
    /**
     * The maximum number of results to be returned per request.
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
    status?: ListJobExecutionsForThingStatusEnum;
    /**
     * The thing name.
     */
    thingName: string;
}
export declare class ListJobExecutionsForThingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listJobExecutionsForThingResponse?: shared.ListJobExecutionsForThingResponse;
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
