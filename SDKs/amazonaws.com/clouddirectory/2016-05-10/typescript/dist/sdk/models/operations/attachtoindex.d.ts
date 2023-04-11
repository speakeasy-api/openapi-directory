import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The reference that identifies an object.
 */
export declare class AttachToIndexRequestBodyIndexReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * The reference that identifies an object.
 */
export declare class AttachToIndexRequestBodyTargetReference extends SpeakeasyBase {
    selector?: string;
}
export declare class AttachToIndexRequestBody extends SpeakeasyBase {
    /**
     * The reference that identifies an object.
     */
    indexReference: AttachToIndexRequestBodyIndexReference;
    /**
     * The reference that identifies an object.
     */
    targetReference: AttachToIndexRequestBodyTargetReference;
}
export declare class AttachToIndexRequest extends SpeakeasyBase {
    requestBody: AttachToIndexRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) of the directory where the object and index exist.
     */
    xAmzDataPartition: string;
}
export declare class AttachToIndexResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: shared.AccessDeniedException;
    /**
     * Success
     */
    attachToIndexResponse?: shared.AttachToIndexResponse;
    contentType: string;
    /**
     * DirectoryNotEnabledException
     */
    directoryNotEnabledException?: shared.DirectoryNotEnabledException;
    /**
     * IndexedAttributeMissingException
     */
    indexedAttributeMissingException?: shared.IndexedAttributeMissingException;
    /**
     * InternalServiceException
     */
    internalServiceException?: shared.InternalServiceException;
    /**
     * InvalidArnException
     */
    invalidArnException?: shared.InvalidArnException;
    /**
     * InvalidAttachmentException
     */
    invalidAttachmentException?: shared.InvalidAttachmentException;
    /**
     * LimitExceededException
     */
    limitExceededException?: shared.LimitExceededException;
    /**
     * LinkNameAlreadyInUseException
     */
    linkNameAlreadyInUseException?: shared.LinkNameAlreadyInUseException;
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
