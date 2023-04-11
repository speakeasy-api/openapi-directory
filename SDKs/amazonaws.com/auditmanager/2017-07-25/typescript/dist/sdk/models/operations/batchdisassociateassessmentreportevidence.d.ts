import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchDisassociateAssessmentReportEvidenceRequestBody extends SpeakeasyBase {
    /**
     *  The identifier for the folder that the evidence is stored in.
     */
    evidenceFolderId: string;
    /**
     *  The list of evidence identifiers.
     */
    evidenceIds: string[];
}
export declare class BatchDisassociateAssessmentReportEvidenceRequest extends SpeakeasyBase {
    requestBody: BatchDisassociateAssessmentReportEvidenceRequestBody;
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
}
export declare class BatchDisassociateAssessmentReportEvidenceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchDisassociateAssessmentReportEvidenceResponse?: shared.BatchDisassociateAssessmentReportEvidenceResponse;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
