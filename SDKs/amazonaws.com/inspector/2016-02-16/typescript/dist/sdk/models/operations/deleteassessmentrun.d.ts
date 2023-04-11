import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAssessmentRunXAmzTargetEnum {
    InspectorServiceDeleteAssessmentRun = "InspectorService.DeleteAssessmentRun"
}
export declare class DeleteAssessmentRunRequest extends SpeakeasyBase {
    deleteAssessmentRunRequest: shared.DeleteAssessmentRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAssessmentRunXAmzTargetEnum;
}
export declare class DeleteAssessmentRunResponse extends SpeakeasyBase {
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
