import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The location where Audit Manager saves assessment reports for the given assessment.
 */
export declare class UpdateAssessmentRequestBodyAssessmentReportsDestination extends SpeakeasyBase {
    destination?: string;
    destinationType?: shared.AssessmentReportDestinationTypeEnum;
}
/**
 *  The wrapper that contains the Amazon Web Services accounts and services that are in scope for the assessment.
 */
export declare class UpdateAssessmentRequestBodyScope extends SpeakeasyBase {
    awsAccounts?: shared.AWSAccount[];
    awsServices?: shared.AWSService[];
}
export declare class UpdateAssessmentRequestBody extends SpeakeasyBase {
    /**
     *  The description of the assessment.
     */
    assessmentDescription?: string;
    /**
     *  The name of the assessment to be updated.
     */
    assessmentName?: string;
    /**
     *  The location where Audit Manager saves assessment reports for the given assessment.
     */
    assessmentReportsDestination?: UpdateAssessmentRequestBodyAssessmentReportsDestination;
    /**
     *  The list of roles for the assessment.
     */
    roles?: shared.Role[];
    /**
     *  The wrapper that contains the Amazon Web Services accounts and services that are in scope for the assessment.
     */
    scope: UpdateAssessmentRequestBodyScope;
}
export declare class UpdateAssessmentRequest extends SpeakeasyBase {
    requestBody: UpdateAssessmentRequestBody;
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
export declare class UpdateAssessmentResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
     * Success
     */
    updateAssessmentResponse?: shared.UpdateAssessmentResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
