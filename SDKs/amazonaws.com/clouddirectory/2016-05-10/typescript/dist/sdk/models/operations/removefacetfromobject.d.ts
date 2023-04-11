import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The reference that identifies an object.
 */
export declare class RemoveFacetFromObjectRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * A facet.
 */
export declare class RemoveFacetFromObjectRequestBodySchemaFacet extends SpeakeasyBase {
    facetName?: string;
    schemaArn?: string;
}
export declare class RemoveFacetFromObjectRequestBody extends SpeakeasyBase {
    /**
     * The reference that identifies an object.
     */
    objectReference: RemoveFacetFromObjectRequestBodyObjectReference;
    /**
     * A facet.
     */
    schemaFacet: RemoveFacetFromObjectRequestBodySchemaFacet;
}
export declare class RemoveFacetFromObjectRequest extends SpeakeasyBase {
    requestBody: RemoveFacetFromObjectRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ARN of the directory in which the object resides.
     */
    xAmzDataPartition: string;
}
export declare class RemoveFacetFromObjectResponse extends SpeakeasyBase {
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
     * Success
     */
    removeFacetFromObjectResponse?: Record<string, any>;
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
