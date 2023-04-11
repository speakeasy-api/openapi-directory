import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTypedLinkFacetInformationRequestBody extends SpeakeasyBase {
    /**
     * The unique name of the typed link facet.
     */
    name: string;
}
export declare class GetTypedLinkFacetInformationRequest extends SpeakeasyBase {
    requestBody: GetTypedLinkFacetInformationRequestBody;
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
export declare class GetTypedLinkFacetInformationResponse extends SpeakeasyBase {
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
     * Success
     */
    getTypedLinkFacetInformationResponse?: shared.GetTypedLinkFacetInformationResponse;
    /**
     * InternalServiceException
     */
    internalServiceException?: shared.InternalServiceException;
    /**
     * InvalidArnException
     */
    invalidArnException?: shared.InvalidArnException;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: shared.InvalidNextTokenException;
    /**
     * LimitExceededException
     */
    limitExceededException?: shared.LimitExceededException;
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
