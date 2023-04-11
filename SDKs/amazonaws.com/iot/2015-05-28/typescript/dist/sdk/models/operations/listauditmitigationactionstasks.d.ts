import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specify this filter to limit results to tasks that are in a specific state.
 */
export declare enum ListAuditMitigationActionsTasksTaskStatusEnum {
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
    Failed = "FAILED",
    Canceled = "CANCELED"
}
export declare class ListAuditMitigationActionsTasksRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Specify this filter to limit results to tasks that were applied to results for a specific audit.
     */
    auditTaskId?: string;
    /**
     * Specify this filter to limit results to tasks that were completed or canceled on or before a specific date and time.
     */
    endTime: Date;
    /**
     * Specify this filter to limit results to tasks that were applied to a specific audit finding.
     */
    findingId?: string;
    /**
     * The maximum number of results to return at one time. The default is 25.
     */
    maxResults?: number;
    /**
     * The token for the next set of results.
     */
    nextToken?: string;
    /**
     * Specify this filter to limit results to tasks that began on or after a specific date and time.
     */
    startTime: Date;
    /**
     * Specify this filter to limit results to tasks that are in a specific state.
     */
    taskStatus?: ListAuditMitigationActionsTasksTaskStatusEnum;
}
export declare class ListAuditMitigationActionsTasksResponse extends SpeakeasyBase {
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
    listAuditMitigationActionsTasksResponse?: shared.ListAuditMitigationActionsTasksResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
