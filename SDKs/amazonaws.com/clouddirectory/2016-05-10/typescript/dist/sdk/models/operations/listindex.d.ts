import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The reference that identifies an object.
 */
export declare class ListIndexRequestBodyIndexReference extends SpeakeasyBase {
    selector?: string;
}
export declare class ListIndexRequestBody extends SpeakeasyBase {
    /**
     * The reference that identifies an object.
     */
    indexReference: ListIndexRequestBodyIndexReference;
    /**
     * The maximum number of objects in a single page to retrieve from the index during a request. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/limits.html#limits_cd">AWS Directory Service Limits</a>.
     */
    maxResults?: number;
    /**
     * The pagination token.
     */
    nextToken?: string;
    /**
     * Specifies the ranges of indexed values that you want to query.
     */
    rangesOnIndexedValues?: shared.ObjectAttributeRange[];
}
/**
 * The consistency level to execute the request at.
 */
export declare enum ListIndexXAmzConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
export declare class ListIndexRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListIndexRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The consistency level to execute the request at.
     */
    xAmzConsistencyLevel?: ListIndexXAmzConsistencyLevelEnum;
    /**
     * The ARN of the directory that the index exists in.
     */
    xAmzDataPartition: string;
}
export declare class ListIndexResponse extends SpeakeasyBase {
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
     * FacetValidationException
     */
    facetValidationException?: shared.FacetValidationException;
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
    listIndexResponse?: shared.ListIndexResponse;
    /**
     * NotIndexException
     */
    notIndexException?: shared.NotIndexException;
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
