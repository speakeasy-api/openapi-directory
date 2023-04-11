import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartAssessmentRunXAmzTargetEnum {
    InspectorServiceStartAssessmentRun = "InspectorService.StartAssessmentRun"
}
export declare class StartAssessmentRunRequest extends SpeakeasyBase {
    startAssessmentRunRequest: shared.StartAssessmentRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartAssessmentRunXAmzTargetEnum;
}
export declare class StartAssessmentRunResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AgentsAlreadyRunningAssessmentException
     */
    agentsAlreadyRunningAssessmentException?: any;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidCrossAccountRoleException
     */
    invalidCrossAccountRoleException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NoSuchEntityException
     */
    noSuchEntityException?: any;
    /**
     * ServiceTemporarilyUnavailableException
     */
    serviceTemporarilyUnavailableException?: any;
    /**
     * Success
     */
    startAssessmentRunResponse?: shared.StartAssessmentRunResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
