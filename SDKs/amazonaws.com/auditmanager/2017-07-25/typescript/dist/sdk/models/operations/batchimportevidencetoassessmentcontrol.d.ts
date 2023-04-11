import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchImportEvidenceToAssessmentControlRequestBody extends SpeakeasyBase {
    /**
     *  The list of manual evidence objects.
     */
    manualEvidence: shared.ManualEvidence[];
}
export declare class BatchImportEvidenceToAssessmentControlRequest extends SpeakeasyBase {
    requestBody: BatchImportEvidenceToAssessmentControlRequestBody;
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
}
export declare class BatchImportEvidenceToAssessmentControlResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchImportEvidenceToAssessmentControlResponse?: shared.BatchImportEvidenceToAssessmentControlResponse;
    contentType: string;
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
