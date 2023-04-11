import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAutoScalingGroupRecommendationsXAmzTargetEnum {
    ComputeOptimizerServiceGetAutoScalingGroupRecommendations = "ComputeOptimizerService.GetAutoScalingGroupRecommendations"
}
export declare class GetAutoScalingGroupRecommendationsRequest extends SpeakeasyBase {
    getAutoScalingGroupRecommendationsRequest: shared.GetAutoScalingGroupRecommendationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAutoScalingGroupRecommendationsXAmzTargetEnum;
}
export declare class GetAutoScalingGroupRecommendationsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getAutoScalingGroupRecommendationsResponse?: shared.GetAutoScalingGroupRecommendationsResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * MissingAuthenticationToken
     */
    missingAuthenticationToken?: any;
    /**
     * OptInRequiredException
     */
    optInRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
