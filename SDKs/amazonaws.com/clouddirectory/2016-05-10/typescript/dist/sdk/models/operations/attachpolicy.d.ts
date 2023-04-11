import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The reference that identifies an object.
 */
export declare class AttachPolicyRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * The reference that identifies an object.
 */
export declare class AttachPolicyRequestBodyPolicyReference extends SpeakeasyBase {
    selector?: string;
}
export declare class AttachPolicyRequestBody extends SpeakeasyBase {
    /**
     * The reference that identifies an object.
     */
    objectReference: AttachPolicyRequestBodyObjectReference;
    /**
     * The reference that identifies an object.
     */
    policyReference: AttachPolicyRequestBodyPolicyReference;
}
export declare class AttachPolicyRequest extends SpeakeasyBase {
    requestBody: AttachPolicyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where both objects reside. For more information, see <a>arns</a>.
     */
    xAmzDataPartition: string;
}
export declare class AttachPolicyResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: shared.AccessDeniedException;
    /**
     * Success
     */
    attachPolicyResponse?: Record<string, any>;
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
     * LimitExceededException
     */
    limitExceededException?: shared.LimitExceededException;
    /**
     * NotPolicyException
     */
    notPolicyException?: shared.NotPolicyException;
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
