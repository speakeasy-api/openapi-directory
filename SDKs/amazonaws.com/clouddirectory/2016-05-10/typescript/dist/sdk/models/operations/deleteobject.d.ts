import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The reference that identifies an object.
 */
export declare class DeleteObjectRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
export declare class DeleteObjectRequestBody extends SpeakeasyBase {
    /**
     * The reference that identifies an object.
     */
    objectReference: DeleteObjectRequestBodyObjectReference;
}
export declare class DeleteObjectRequest extends SpeakeasyBase {
    requestBody: DeleteObjectRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides. For more information, see <a>arns</a>.
     */
    xAmzDataPartition: string;
}
export declare class DeleteObjectResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    /**
     * Success
     */
    deleteObjectResponse?: Record<string, any>;
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
     * LimitExceededException
     */
    limitExceededException?: shared.LimitExceededException;
    /**
     * ObjectNotDetachedException
     */
    objectNotDetachedException?: shared.ObjectNotDetachedException;
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
