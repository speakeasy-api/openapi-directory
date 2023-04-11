import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The reference that identifies an object.
 */
export declare class GetObjectAttributesRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * A facet.
 */
export declare class GetObjectAttributesRequestBodySchemaFacet extends SpeakeasyBase {
    facetName?: string;
    schemaArn?: string;
}
export declare class GetObjectAttributesRequestBody extends SpeakeasyBase {
    /**
     * List of attribute names whose values will be retrieved.
     */
    attributeNames: string[];
    /**
     * The reference that identifies an object.
     */
    objectReference: GetObjectAttributesRequestBodyObjectReference;
    /**
     * A facet.
     */
    schemaFacet: GetObjectAttributesRequestBodySchemaFacet;
}
/**
 * The consistency level at which to retrieve the attributes on an object.
 */
export declare enum GetObjectAttributesXAmzConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
export declare class GetObjectAttributesRequest extends SpeakeasyBase {
    requestBody: GetObjectAttributesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The consistency level at which to retrieve the attributes on an object.
     */
    xAmzConsistencyLevel?: GetObjectAttributesXAmzConsistencyLevelEnum;
    /**
     * The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides.
     */
    xAmzDataPartition: string;
}
export declare class GetObjectAttributesResponse extends SpeakeasyBase {
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
     * Success
     */
    getObjectAttributesResponse?: shared.GetObjectAttributesResponse;
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
