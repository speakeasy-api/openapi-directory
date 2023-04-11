import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAssessmentTargetXAmzTargetEnum {
    InspectorServiceCreateAssessmentTarget = "InspectorService.CreateAssessmentTarget"
}
export declare class CreateAssessmentTargetRequest extends SpeakeasyBase {
    createAssessmentTargetRequest: shared.CreateAssessmentTargetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAssessmentTargetXAmzTargetEnum;
}
export declare class CreateAssessmentTargetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createAssessmentTargetResponse?: shared.CreateAssessmentTargetResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
