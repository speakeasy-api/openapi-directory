import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateRescoreExecutionPlanXAmzTargetEnum {
    AWSKendraRerankingFrontendServiceUpdateRescoreExecutionPlan = "AWSKendraRerankingFrontendService.UpdateRescoreExecutionPlan"
}
export declare class UpdateRescoreExecutionPlanRequest extends SpeakeasyBase {
    updateRescoreExecutionPlanRequest: shared.UpdateRescoreExecutionPlanRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRescoreExecutionPlanXAmzTargetEnum;
}
export declare class UpdateRescoreExecutionPlanResponse extends SpeakeasyBase {
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
