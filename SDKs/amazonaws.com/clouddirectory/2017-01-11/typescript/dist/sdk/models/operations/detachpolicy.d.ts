import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The reference that identifies an object.
 */
export declare class DetachPolicyRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * The reference that identifies an object.
 */
export declare class DetachPolicyRequestBodyPolicyReference extends SpeakeasyBase {
    selector?: string;
}
export declare class DetachPolicyRequestBody extends SpeakeasyBase {
    /**
     * The reference that identifies an object.
     */
    objectReference: DetachPolicyRequestBodyObjectReference;
    /**
     * The reference that identifies an object.
     */
    policyReference: DetachPolicyRequestBodyPolicyReference;
}
export declare class DetachPolicyRequest extends SpeakeasyBase {
    requestBody: DetachPolicyRequestBody;
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
export declare class DetachPolicyResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    detachPolicyResponse?: Record<string, any>;
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
     * NotPolicyException
     */
    notPolicyException?: any;
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
