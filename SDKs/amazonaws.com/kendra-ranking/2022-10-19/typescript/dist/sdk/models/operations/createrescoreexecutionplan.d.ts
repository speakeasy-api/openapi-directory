import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateRescoreExecutionPlanXAmzTargetEnum {
    AWSKendraRerankingFrontendServiceCreateRescoreExecutionPlan = "AWSKendraRerankingFrontendService.CreateRescoreExecutionPlan"
}
export declare class CreateRescoreExecutionPlanRequest extends SpeakeasyBase {
    createRescoreExecutionPlanRequest: shared.CreateRescoreExecutionPlanRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRescoreExecutionPlanXAmzTargetEnum;
}
export declare class CreateRescoreExecutionPlanResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createRescoreExecutionPlanResponse?: shared.CreateRescoreExecutionPlanResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
