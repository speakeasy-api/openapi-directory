import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDetectMitigationActionsExecutionsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The end of the time period for which ML Detect mitigation actions executions are returned.
     */
    endTime?: Date;
    /**
     *  The maximum number of results to return at one time. The default is 25.
     */
    maxResults?: number;
    /**
     *  The token for the next set of results.
     */
    nextToken?: string;
    /**
     *  A filter to limit results to those found after the specified time. You must specify either the startTime and endTime or the taskId, but not both.
     */
    startTime?: Date;
    /**
     *  The unique identifier of the task.
     */
    taskId?: string;
    /**
     *  The name of the thing whose mitigation actions are listed.
     */
    thingName?: string;
    /**
     *  The unique identifier of the violation.
     */
    violationId?: string;
}
export declare class ListDetectMitigationActionsExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listDetectMitigationActionsExecutionsResponse?: shared.ListDetectMitigationActionsExecutionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
