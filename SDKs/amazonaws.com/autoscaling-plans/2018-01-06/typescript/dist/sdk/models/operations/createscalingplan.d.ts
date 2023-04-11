import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateScalingPlanXAmzTargetEnum {
    AnyScaleScalingPlannerFrontendServiceCreateScalingPlan = "AnyScaleScalingPlannerFrontendService.CreateScalingPlan"
}
export declare class CreateScalingPlanRequest extends SpeakeasyBase {
    createScalingPlanRequest: shared.CreateScalingPlanRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateScalingPlanXAmzTargetEnum;
}
export declare class CreateScalingPlanResponse extends SpeakeasyBase {
    /**
     * ConcurrentUpdateException
     */
    concurrentUpdateException?: any;
    contentType: string;
    /**
     * Success
     */
    createScalingPlanResponse?: shared.CreateScalingPlanResponse;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
