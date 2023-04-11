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
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createIndexResponse?: shared.CreateIndexResponse;
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
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * LinkNameAlreadyInUseException
     */
    linkNameAlreadyInUseException?: any;
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
     * UnsupportedIndexTypeException
     */
    unsupportedIndexTypeException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
