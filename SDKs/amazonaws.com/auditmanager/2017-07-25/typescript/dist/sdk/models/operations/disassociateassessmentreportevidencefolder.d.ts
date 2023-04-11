import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DisassociateAssessmentReportEvidenceFolderRequestBody extends SpeakeasyBase {
    /**
     *  The unique identifier for the folder that the evidence is stored in.
     */
    evidenceFolderId: string;
}
export declare class DisassociateAssessmentReportEvidenceFolderRequest extends SpeakeasyBase {
    requestBody: DisassociateAssessmentReportEvidenceFolderRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The unique identifier for the assessment.
     */
    assessmentId: string;
}
export declare class DisassociateAssessmentReportEvidenceFolderResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    disassociateAssessmentReportEvidenceFolderResponse?: Record<string, any>;
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
