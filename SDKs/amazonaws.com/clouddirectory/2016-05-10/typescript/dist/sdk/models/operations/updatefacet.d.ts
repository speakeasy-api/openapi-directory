import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details.
 */
export declare enum UpdateFacetRequestBodyObjectTypeEnum {
    Node = "NODE",
    LeafNode = "LEAF_NODE",
    Policy = "POLICY",
    Index = "INDEX"
}
export declare class UpdateFacetRequestBody extends SpeakeasyBase {
    /**
     * List of attributes that need to be updated in a given schema <a>Facet</a>. Each attribute is followed by <code>AttributeAction</code>, which specifies the type of update operation to perform.
     */
    attributeUpdates?: shared.FacetAttributeUpdate[];
    /**
     * The name of the facet.
     */
    name: string;
    /**
     * The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details.
     */
    objectType?: UpdateFacetRequestBodyObjectTypeEnum;
}
export declare class UpdateFacetRequest extends SpeakeasyBase {
    requestBody: UpdateFacetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>. For more information, see <a>arns</a>.
     */
    xAmzDataPartition: string;
}
export declare class UpdateFacetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    /**
     * FacetNotFoundException
     */
    facetNotFoundException?: shared.FacetNotFoundException;
    /**
     * InternalServiceException
     */
    internalServiceException?: shared.InternalServiceException;
    /**
     * InvalidArnException
     */
    invalidArnException?: shared.InvalidArnException;
    /**
     * InvalidFacetUpdateException
     */
    invalidFacetUpdateException?: shared.InvalidFacetUpdateException;
    /**
     * InvalidRuleException
     */
    invalidRuleException?: shared.InvalidRuleException;
    /**
     * LimitExceededException
     */
    limitExceededException?: shared.LimitExceededException;
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
    updateFacetResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: shared.ValidationException;
}
