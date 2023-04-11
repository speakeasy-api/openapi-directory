import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The reference that identifies an object.
 */
export declare class ListObjectParentsRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
export declare class ListObjectParentsRequestBody extends SpeakeasyBase {
    /**
     * When set to True, returns all <a>ListObjectParentsResponse$ParentLinks</a>. There could be multiple links between a parent-child pair.
     */
    includeAllLinksToEachParent?: boolean;
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
    objectReference: ListObjectParentsRequestBodyObjectReference;
}
/**
 * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
 */
export declare enum ListObjectParentsXAmzConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
export declare class ListObjectParentsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListObjectParentsRequestBody;
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
    xAmzConsistencyLevel?: ListObjectParentsXAmzConsistencyLevelEnum;
    /**
     * The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides. For more information, see <a>arns</a>.
     */
    xAmzDataPartition: string;
}
export declare class ListObjectParentsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * CannotListParentOfRootException
     */
    cannotListParentOfRootException?: any;
    contentType: string;
    /**
     * DirectoryNotEnabledException
     */
    directoryNotEnabledException?: any;
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
    listObjectParentsResponse?: shared.ListObjectParentsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * RetryableConflictException
     */
    retryableConflictException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
