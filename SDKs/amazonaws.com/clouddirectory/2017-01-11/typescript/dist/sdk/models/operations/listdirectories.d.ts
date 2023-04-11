import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The state of the directories in the list. Can be either Enabled, Disabled, or Deleted.
 */
export declare enum ListDirectoriesRequestBodyStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Deleted = "DELETED"
}
export declare class ListDirectoriesRequestBody extends SpeakeasyBase {
    /**
     * The maximum number of results to retrieve.
     */
    maxResults?: number;
    /**
     * The pagination token.
     */
    nextToken?: string;
    /**
     * The state of the directories in the list. Can be either Enabled, Disabled, or Deleted.
     */
    state?: ListDirectoriesRequestBodyStateEnum;
}
export declare class ListDirectoriesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListDirectoriesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDirectoriesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    listDirectoriesResponse?: shared.ListDirectoriesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RetryableConflictException
     */
    retryableConflictException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
