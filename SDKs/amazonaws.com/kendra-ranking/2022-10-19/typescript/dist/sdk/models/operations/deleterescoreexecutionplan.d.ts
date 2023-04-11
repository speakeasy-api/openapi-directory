import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteRescoreExecutionPlanXAmzTargetEnum {
    AWSKendraRerankingFrontendServiceDeleteRescoreExecutionPlan = "AWSKendraRerankingFrontendService.DeleteRescoreExecutionPlan"
}
export declare class DeleteRescoreExecutionPlanRequest extends SpeakeasyBase {
    deleteRescoreExecutionPlanRequest: shared.DeleteRescoreExecutionPlanRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRescoreExecutionPlanXAmzTargetEnum;
}
export declare class DeleteRescoreExecutionPlanResponse extends SpeakeasyBase {
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
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
