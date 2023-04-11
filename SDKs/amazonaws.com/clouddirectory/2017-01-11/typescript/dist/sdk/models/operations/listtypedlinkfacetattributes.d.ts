import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListTypedLinkFacetAttributesRequestBody extends SpeakeasyBase {
    /**
     * The maximum number of results to retrieve.
     */
    maxResults?: number;
    /**
     * The unique name of the typed link facet.
     */
    name: string;
    /**
     * The pagination token.
     */
    nextToken?: string;
}
export declare class ListTypedLinkFacetAttributesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListTypedLinkFacetAttributesRequestBody;
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
export declare class ListTypedLinkFacetAttributesResponse extends SpeakeasyBase {
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
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    listTypedLinkFacetAttributesResponse?: shared.ListTypedLinkFacetAttributesResponse;
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
