import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAssessmentTemplateXAmzTargetEnum {
    InspectorServiceCreateAssessmentTemplate = "InspectorService.CreateAssessmentTemplate"
}
export declare class CreateAssessmentTemplateRequest extends SpeakeasyBase {
    createAssessmentTemplateRequest: shared.CreateAssessmentTemplateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAssessmentTemplateXAmzTargetEnum;
}
export declare class CreateAssessmentTemplateResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createAssessmentTemplateResponse?: shared.CreateAssessmentTemplateResponse;
    /**
     * InternalException
     */
    internalException?: any;
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
