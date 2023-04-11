import { SpeakeasyBase } from "../../../internal/utils";
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
     * Success
     */
    removeFacetFromObjectResponse?: Record<string, any>;
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
