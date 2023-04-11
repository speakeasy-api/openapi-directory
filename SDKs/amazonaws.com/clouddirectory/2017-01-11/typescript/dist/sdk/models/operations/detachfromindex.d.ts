import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The reference that identifies an object.
 */
export declare class DetachFromIndexRequestBodyIndexReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * The reference that identifies an object.
 */
export declare class DetachFromIndexRequestBodyTargetReference extends SpeakeasyBase {
    selector?: string;
}
export declare class DetachFromIndexRequestBody extends SpeakeasyBase {
    /**
     * The reference that identifies an object.
     */
    indexReference: DetachFromIndexRequestBodyIndexReference;
    /**
     * The reference that identifies an object.
     */
    targetReference: DetachFromIndexRequestBodyTargetReference;
}
export declare class DetachFromIndexRequest extends SpeakeasyBase {
    requestBody: DetachFromIndexRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) of the directory the index and object exist in.
     */
    xAmzDataPartition: string;
}
export declare class DetachFromIndexResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    detachFromIndexResponse?: shared.DetachFromIndexResponse;
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
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotIndexException
     */
    notIndexException?: any;
    /**
     * ObjectAlreadyDetachedException
     */
    objectAlreadyDetachedException?: any;
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
