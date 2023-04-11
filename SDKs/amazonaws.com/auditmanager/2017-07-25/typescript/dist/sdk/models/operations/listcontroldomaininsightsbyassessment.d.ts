import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListControlDomainInsightsByAssessmentRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier for the active assessment.
     */
    assessmentId: string;
    /**
     * Represents the maximum number of results on a page or for an API request call.
     */
    maxResults?: number;
    /**
     * The pagination token that's used to fetch the next set of results.
     */
    nextToken?: string;
}
export declare class ListControlDomainInsightsByAssessmentResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listControlDomainInsightsByAssessmentResponse?: shared.ListControlDomainInsightsByAssessmentResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
