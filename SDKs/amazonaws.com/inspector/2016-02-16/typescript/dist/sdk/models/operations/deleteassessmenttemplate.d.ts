import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAssessmentTemplateXAmzTargetEnum {
    InspectorServiceDeleteAssessmentTemplate = "InspectorService.DeleteAssessmentTemplate"
}
export declare class DeleteAssessmentTemplateRequest extends SpeakeasyBase {
    deleteAssessmentTemplateRequest: shared.DeleteAssessmentTemplateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAssessmentTemplateXAmzTargetEnum;
}
export declare class DeleteAssessmentTemplateResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AssessmentRunInProgressException
     */
    assessmentRunInProgressException?: any;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * NoSuchEntityException
     */
    noSuchEntityException?: any;
    /**
     * ServiceTemporarilyUnavailableException
     */
    serviceTemporarilyUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
