import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAssessmentTargetXAmzTargetEnum {
    InspectorServiceDeleteAssessmentTarget = "InspectorService.DeleteAssessmentTarget"
}
export declare class DeleteAssessmentTargetRequest extends SpeakeasyBase {
    deleteAssessmentTargetRequest: shared.DeleteAssessmentTargetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAssessmentTargetXAmzTargetEnum;
}
export declare class DeleteAssessmentTargetResponse extends SpeakeasyBase {
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
