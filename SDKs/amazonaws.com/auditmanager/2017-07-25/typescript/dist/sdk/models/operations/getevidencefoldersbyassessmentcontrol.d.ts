import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEvidenceFoldersByAssessmentControlRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The identifier for the assessment.
     */
    assessmentId: string;
    /**
     *  The identifier for the control.
     */
    controlId: string;
    /**
     *  The identifier for the control set.
     */
    controlSetId: string;
    /**
     *  Represents the maximum number of results on a page or for an API request call.
     */
    maxResults?: number;
    /**
     *  The pagination token that's used to fetch the next set of results.
     */
    nextToken?: string;
}
export declare class GetEvidenceFoldersByAssessmentControlResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getEvidenceFoldersByAssessmentControlResponse?: shared.GetEvidenceFoldersByAssessmentControlResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
