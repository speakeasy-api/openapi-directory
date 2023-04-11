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
    accessDeniedException?: any;
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
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * LinkNameAlreadyInUseException
     */
    linkNameAlreadyInUseException?: any;
    /**
     * RetryableConflictException
     */
    retryableConflictException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateObjectAttributesResponse?: shared.UpdateObjectAttributesResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
