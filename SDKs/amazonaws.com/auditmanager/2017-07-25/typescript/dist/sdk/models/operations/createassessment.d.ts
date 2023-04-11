import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The location where Audit Manager saves assessment reports for the given assessment.
 */
export declare class CreateAssessmentRequestBodyAssessmentReportsDestination extends SpeakeasyBase {
    destination?: string;
    destinationType?: shared.AssessmentReportDestinationTypeEnum;
}
/**
 *  The wrapper that contains the Amazon Web Services accounts and services that are in scope for the assessment.
 */
export declare class CreateAssessmentRequestBodyScope extends SpeakeasyBase {
    awsAccounts?: shared.AWSAccount[];
    awsServices?: shared.AWSService[];
}
export declare class CreateAssessmentRequestBody extends SpeakeasyBase {
    /**
     *  The location where Audit Manager saves assessment reports for the given assessment.
     */
    assessmentReportsDestination: CreateAssessmentRequestBodyAssessmentReportsDestination;
    /**
     *  The optional description of the assessment to be created.
     */
    description?: string;
    /**
     *  The identifier for the framework that the assessment will be created from.
     */
    frameworkId: string;
    /**
     *  The name of the assessment to be created.
     */
    name: string;
    /**
     *  The list of roles for the assessment.
     */
    roles: shared.Role[];
    /**
     *  The wrapper that contains the Amazon Web Services accounts and services that are in scope for the assessment.
     */
    scope: CreateAssessmentRequestBodyScope;
    /**
     *  The tags that are associated with the assessment.
     */
    tags?: Record<string, string>;
}
export declare class CreateAssessmentRequest extends SpeakeasyBase {
    requestBody: CreateAssessmentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAssessmentResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createAssessmentResponse?: shared.CreateAssessmentResponse;
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
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
