import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API.
 */
export declare class CreateTypedLinkFacetRequestBodyFacet extends SpeakeasyBase {
    attributes?: shared.TypedLinkAttributeDefinition[];
    identityAttributeOrder?: string[];
    name?: string;
}
export declare class CreateTypedLinkFacetRequestBody extends SpeakeasyBase {
    /**
     * Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API.
     */
    facet: CreateTypedLinkFacetRequestBodyFacet;
}
export declare class CreateTypedLinkFacetRequest extends SpeakeasyBase {
    requestBody: CreateTypedLinkFacetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.
     */
    xAmzDataPartition: string;
}
export declare class CreateTypedLinkFacetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createTypedLinkFacetResponse?: Record<string, any>;
    /**
     * FacetAlreadyExistsException
     */
    facetAlreadyExistsException?: any;
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
     * InvalidRuleException
     */
    invalidRuleException?: any;
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
