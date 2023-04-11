import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssociateAssessmentReportEvidenceFolderRequestBody extends SpeakeasyBase {
    /**
     *  The identifier for the folder that the evidence is stored in.
     */
    evidenceFolderId: string;
}
export declare class AssociateAssessmentReportEvidenceFolderRequest extends SpeakeasyBase {
    requestBody: AssociateAssessmentReportEvidenceFolderRequestBody;
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
export declare class AssociateAssessmentReportEvidenceFolderResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    associateAssessmentReportEvidenceFolderResponse?: Record<string, any>;
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
