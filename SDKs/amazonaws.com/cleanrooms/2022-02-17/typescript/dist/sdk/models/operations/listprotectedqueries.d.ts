import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A filter on the status of the protected query.
 */
export declare enum ListProtectedQueriesStatusEnum {
    Submitted = "SUBMITTED",
    Started = "STARTED",
    Cancelled = "CANCELLED",
    Cancelling = "CANCELLING",
    Failed = "FAILED",
    Success = "SUCCESS",
    TimedOut = "TIMED_OUT"
}
export declare class ListProtectedQueriesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum size of the results that is returned per call. Service chooses a default if it has not been set. Service can return a nextToken even if the maximum results has not been met.
     */
    maxResults?: number;
    /**
     * The identifier for the membership in the collaboration.
     */
    membershipIdentifier: string;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    nextToken?: string;
    /**
     * A filter on the status of the protected query.
     */
    status?: ListProtectedQueriesStatusEnum;
}
export declare class ListProtectedQueriesResponse extends SpeakeasyBase {
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
    listProtectedQueriesOutput?: shared.ListProtectedQueriesOutput;
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
