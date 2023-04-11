import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTypedLinkFacetRequestBody extends SpeakeasyBase {
    /**
     * Attributes update structure.
     */
    attributeUpdates: shared.TypedLinkFacetAttributeUpdate[];
    /**
     * The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed links considers the order that the attributes are defined on the typed link facet. When providing ranges to a typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range. Filters are interpreted in the order of the attributes on the typed link facet, not the order in which they are supplied to any API calls. For more information about identity attributes, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
     */
    identityAttributeOrder: string[];
    /**
     * The unique name of the typed link facet.
     */
    name: string;
}
export declare class UpdateTypedLinkFacetRequest extends SpeakeasyBase {
    requestBody: UpdateTypedLinkFacetRequestBody;
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
export declare class UpdateTypedLinkFacetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * FacetNotFoundException
     */
    facetNotFoundException?: any;
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
     * InvalidFacetUpdateException
     */
    invalidFacetUpdateException?: any;
    /**
     * InvalidRuleException
     */
    invalidRuleException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
    updateTypedLinkFacetResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
