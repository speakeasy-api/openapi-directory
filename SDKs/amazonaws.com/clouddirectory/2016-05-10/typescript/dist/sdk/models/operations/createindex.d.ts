import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The reference that identifies an object.
 */
export declare class CreateIndexRequestBodyParentReference extends SpeakeasyBase {
    selector?: string;
}
export declare class CreateIndexRequestBody extends SpeakeasyBase {
    /**
     * Indicates whether the attribute that is being indexed has unique values or not.
     */
    isUnique: boolean;
    /**
     * The name of the link between the parent object and the index object.
     */
    linkName?: string;
    /**
     * Specifies the attributes that should be indexed on. Currently only a single attribute is supported.
     */
    orderedIndexedAttributeList: shared.AttributeKey[];
    /**
     * The reference that identifies an object.
     */
    parentReference?: CreateIndexRequestBodyParentReference;
}
export declare class CreateIndexRequest extends SpeakeasyBase {
    requestBody: CreateIndexRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ARN of the directory where the index should be created.
     */
    xAmzDataPartition: string;
}
export declare class CreateIndexResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    /**
     * Success
     */
    createIndexResponse?: shared.CreateIndexResponse;
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
     * LimitExceededException
     */
    limitExceededException?: shared.LimitExceededException;
    /**
     * LinkNameAlreadyInUseException
     */
    linkNameAlreadyInUseException?: shared.LinkNameAlreadyInUseException;
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
     * UnsupportedIndexTypeException
     */
    unsupportedIndexTypeException?: shared.UnsupportedIndexTypeException;
    /**
     * ValidationException
     */
    validationException?: shared.ValidationException;
}
