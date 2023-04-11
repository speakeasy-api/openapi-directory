import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The reference that identifies an object.
 */
export declare class ListObjectPoliciesRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
export declare class ListObjectPoliciesRequestBody extends SpeakeasyBase {
    /**
     * The maximum number of items to be retrieved in a single call. This is an approximate number.
     */
    maxResults?: number;
    /**
     * The pagination token.
     */
    nextToken?: string;
    /**
     * The reference that identifies an object.
     */
    objectReference: ListObjectPoliciesRequestBodyObjectReference;
}
/**
 * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
 */
export declare enum ListObjectPoliciesXAmzConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
export declare class ListObjectPoliciesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListObjectPoliciesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
     */
    xAmzConsistencyLevel?: ListObjectPoliciesXAmzConsistencyLevelEnum;
    /**
     * The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where objects reside. For more information, see <a>arns</a>.
     */
    xAmzDataPartition: string;
}
export declare class ListObjectPoliciesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    /**
     * DirectoryNotEnabledException
     */
    directoryNotEnabledException?: shared.DirectoryNotEnabledException;
    /**
     * InternalServiceException
     */
    internalServiceException?: shared.InternalServiceException;
    /**
     * InvalidArnException
     */
    invalidArnException?: shared.InvalidArnException;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: shared.InvalidNextTokenException;
    /**
     * LimitExceededException
     */
    limitExceededException?: shared.LimitExceededException;
    /**
     * Success
     */
    listObjectPoliciesResponse?: shared.ListObjectPoliciesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: shared.ResourceNotFoundException;
    /**
     * RetryableConflictException
     */
    retryableConflictException?: shared.RetryableConflictException;
    /**
     * ValidationException
     */
    validationException?: shared.ValidationException;
}
