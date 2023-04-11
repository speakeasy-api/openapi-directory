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
    accessDeniedException?: any;
    /**
     * Success
     */
    attachToIndexResponse?: shared.AttachToIndexResponse;
    contentType: string;
    /**
     * DirectoryNotEnabledException
     */
    directoryNotEnabledException?: any;
    /**
     * IndexedAttributeMissingException
     */
    indexedAttributeMissingException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidAttachmentException
     */
    invalidAttachmentException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * LinkNameAlreadyInUseException
     */
    linkNameAlreadyInUseException?: any;
    /**
     * NotIndexException
     */
    notIndexException?: any;
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
