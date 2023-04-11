import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteFacetRequestBody extends SpeakeasyBase {
    /**
     * The name of the facet to delete.
     */
    name: string;
}
export declare class DeleteFacetRequest extends SpeakeasyBase {
    requestBody: DeleteFacetRequestBody;
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
export declare class DeleteFacetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteFacetResponse?: Record<string, any>;
    /**
     * FacetInUseException
     */
    facetInUseException?: any;
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
