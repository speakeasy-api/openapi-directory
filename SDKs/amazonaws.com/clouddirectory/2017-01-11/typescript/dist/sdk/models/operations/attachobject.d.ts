import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The reference that identifies an object.
 */
export declare class AttachObjectRequestBodyChildReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * The reference that identifies an object.
 */
export declare class AttachObjectRequestBodyParentReference extends SpeakeasyBase {
    selector?: string;
}
export declare class AttachObjectRequestBody extends SpeakeasyBase {
    /**
     * The reference that identifies an object.
     */
    childReference: AttachObjectRequestBodyChildReference;
    /**
     * The link name with which the child object is attached to the parent.
     */
    linkName: string;
    /**
     * The reference that identifies an object.
     */
    parentReference: AttachObjectRequestBodyParentReference;
}
export declare class AttachObjectRequest extends SpeakeasyBase {
    requestBody: AttachObjectRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where both objects reside. For more information, see <a>arns</a>.
     */
    xAmzDataPartition: string;
}
export declare class AttachObjectResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    attachObjectResponse?: shared.AttachObjectResponse;
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
