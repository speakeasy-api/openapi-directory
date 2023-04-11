import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteScalingPlanXAmzTargetEnum {
    AnyScaleScalingPlannerFrontendServiceDeleteScalingPlan = "AnyScaleScalingPlannerFrontendService.DeleteScalingPlan"
}
export declare class DeleteScalingPlanRequest extends SpeakeasyBase {
    deleteScalingPlanRequest: shared.DeleteScalingPlanRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteScalingPlanXAmzTargetEnum;
}
export declare class DeleteScalingPlanResponse extends SpeakeasyBase {
    /**
     * ConcurrentUpdateException
     */
    concurrentUpdateException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteScalingPlanResponse?: Record<string, any>;
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
     * ValidationException
     */
    validationException?: any;
}
