import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteTypedLinkFacetRequestBody extends SpeakeasyBase {
    /**
     * The unique name of the typed link facet.
     */
    name: string;
}
export declare class DeleteTypedLinkFacetRequest extends SpeakeasyBase {
    requestBody: DeleteTypedLinkFacetRequestBody;
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
export declare class DeleteTypedLinkFacetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteTypedLinkFacetResponse?: Record<string, any>;
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
