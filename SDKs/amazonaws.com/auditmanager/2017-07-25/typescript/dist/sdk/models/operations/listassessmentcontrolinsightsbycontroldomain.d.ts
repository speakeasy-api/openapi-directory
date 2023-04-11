import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListAssessmentControlInsightsByControlDomainRequest extends SpeakeasyBase {
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
     * The unique identifier for the control domain.
     */
    controlDomainId: string;
    /**
     * Represents the maximum number of results on a page or for an API request call.
     */
    maxResults?: number;
    /**
     * The pagination token that's used to fetch the next set of results.
     */
    nextToken?: string;
}
export declare class ListAssessmentControlInsightsByControlDomainResponse extends SpeakeasyBase {
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
    listAssessmentControlInsightsByControlDomainResponse?: shared.ListAssessmentControlInsightsByControlDomainResponse;
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
