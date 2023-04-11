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
    accessDeniedException?: shared.AccessDeniedException;
    /**
     * Success
     */
    attachObjectResponse?: shared.AttachObjectResponse;
    contentType: string;
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
