import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The status of a workload share.
 */
export declare enum ListLensSharesStatusEnum {
    Accepted = "ACCEPTED",
    Rejected = "REJECTED",
    Pending = "PENDING",
    Revoked = "REVOKED",
    Expired = "EXPIRED",
    Associating = "ASSOCIATING",
    Associated = "ASSOCIATED",
    Failed = "FAILED"
}
export declare class ListLensSharesRequest extends SpeakeasyBase {
    lensAlias: string;
    /**
     * The maximum number of results to return for this request.
     */
    maxResults?: number;
    nextToken?: string;
    /**
     * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the lens is shared.
     */
    sharedWithPrefix?: string;
    /**
     * The status of a workload share.
     */
    status?: ListLensSharesStatusEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListLensSharesResponse extends SpeakeasyBase {
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
    listLensSharesOutput?: shared.ListLensSharesOutput;
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
