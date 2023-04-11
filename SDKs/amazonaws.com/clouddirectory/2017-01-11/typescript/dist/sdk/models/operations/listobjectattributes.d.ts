import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A facet.
 */
export declare class ListObjectAttributesRequestBodyFacetFilter extends SpeakeasyBase {
    facetName?: string;
    schemaArn?: string;
}
/**
 * The reference that identifies an object.
 */
export declare class ListObjectAttributesRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
export declare class ListObjectAttributesRequestBody extends SpeakeasyBase {
    /**
     * A facet.
     */
    facetFilter?: ListObjectAttributesRequestBodyFacetFilter;
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
    objectReference: ListObjectAttributesRequestBodyObjectReference;
}
/**
 * Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.
 */
export declare enum ListObjectAttributesXAmzConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
export declare class ListObjectAttributesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListObjectAttributesRequestBody;
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
    xAmzConsistencyLevel?: ListObjectAttributesXAmzConsistencyLevelEnum;
    /**
     * The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides. For more information, see <a>arns</a>.
     */
    xAmzDataPartition: string;
}
export declare class ListObjectAttributesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * DirectoryNotEnabledException
     */
    directoryNotEnabledException?: any;
    /**
     * FacetValidationException
     */
    facetValidationException?: any;
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
    listObjectAttributesResponse?: shared.ListObjectAttributesResponse;
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
