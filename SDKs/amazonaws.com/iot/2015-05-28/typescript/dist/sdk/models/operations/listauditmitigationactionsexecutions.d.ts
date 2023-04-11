import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specify this filter to limit results to those with a specific status.
 */
export declare enum ListAuditMitigationActionsExecutionsActionStatusEnum {
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
    Failed = "FAILED",
    Canceled = "CANCELED",
    Skipped = "SKIPPED",
    Pending = "PENDING"
}
export declare class ListAuditMitigationActionsExecutionsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Specify this filter to limit results to those with a specific status.
     */
    actionStatus?: ListAuditMitigationActionsExecutionsActionStatusEnum;
    /**
     * Specify this filter to limit results to those that were applied to a specific audit finding.
     */
    findingId: string;
    /**
     * The maximum number of results to return at one time. The default is 25.
     */
    maxResults?: number;
    /**
     * The token for the next set of results.
     */
    nextToken?: string;
    /**
     * Specify this filter to limit results to actions for a specific audit mitigation actions task.
     */
    taskId: string;
}
export declare class ListAuditMitigationActionsExecutionsResponse extends SpeakeasyBase {
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
    listAuditMitigationActionsExecutionsResponse?: shared.ListAuditMitigationActionsExecutionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
