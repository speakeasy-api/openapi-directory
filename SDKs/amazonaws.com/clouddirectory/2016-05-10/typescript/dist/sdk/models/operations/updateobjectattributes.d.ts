import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The reference that identifies an object.
 */
export declare class UpdateObjectAttributesRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
export declare class UpdateObjectAttributesRequestBody extends SpeakeasyBase {
    /**
     * The attributes update structure.
     */
    attributeUpdates: shared.ObjectAttributeUpdate[];
    /**
     * The reference that identifies an object.
     */
    objectReference: UpdateObjectAttributesRequestBodyObjectReference;
}
export declare class UpdateObjectAttributesRequest extends SpeakeasyBase {
    requestBody: UpdateObjectAttributesRequestBody;
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
export declare class UpdateObjectAttributesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: shared.AccessDeniedException;
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
     * LimitExceededException
     */
    limitExceededException?: shared.LimitExceededException;
    /**
     * LinkNameAlreadyInUseException
     */
    linkNameAlreadyInUseException?: shared.LinkNameAlreadyInUseException;
    /**
     * RetryableConflictException
     */
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: shared.ResourceNotFoundException;
    /**
     * Success
     */
    updateObjectAttributesResponse?: shared.UpdateObjectAttributesResponse;
    /**
     * ValidationException
     */
    validationException?: shared.ValidationException;
}
