import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateScalingPlanXAmzTargetEnum {
    AnyScaleScalingPlannerFrontendServiceUpdateScalingPlan = "AnyScaleScalingPlannerFrontendService.UpdateScalingPlan"
}
export declare class UpdateScalingPlanRequest extends SpeakeasyBase {
    updateScalingPlanRequest: shared.UpdateScalingPlanRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateScalingPlanXAmzTargetEnum;
}
export declare class UpdateScalingPlanResponse extends SpeakeasyBase {
    /**
     * ConcurrentUpdateException
     */
    concurrentUpdateException?: any;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * ObjectNotFoundException
     */
    objectNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateScalingPlanResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
