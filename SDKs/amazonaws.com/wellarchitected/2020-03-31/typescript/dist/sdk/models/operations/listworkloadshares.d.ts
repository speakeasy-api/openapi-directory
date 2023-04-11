import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The status of a workload share.
 */
export declare enum ListWorkloadSharesStatusEnum {
    Accepted = "ACCEPTED",
    Rejected = "REJECTED",
    Pending = "PENDING",
    Revoked = "REVOKED",
    Expired = "EXPIRED",
    Associating = "ASSOCIATING",
    Associated = "ASSOCIATED",
    Failed = "FAILED"
}
export declare class ListWorkloadSharesRequest extends SpeakeasyBase {
    /**
     * The maximum number of results to return for this request.
     */
    maxResults?: number;
    nextToken?: string;
    /**
     * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.
     */
    sharedWithPrefix?: string;
    /**
     * The status of a workload share.
     */
    status?: ListWorkloadSharesStatusEnum;
    workloadId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListWorkloadSharesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listWorkloadSharesOutput?: shared.ListWorkloadSharesOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
