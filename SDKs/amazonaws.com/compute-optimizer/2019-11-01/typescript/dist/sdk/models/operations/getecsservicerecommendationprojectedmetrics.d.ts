import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetECSServiceRecommendationProjectedMetricsXAmzTargetEnum {
    ComputeOptimizerServiceGetECSServiceRecommendationProjectedMetrics = "ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics"
}
export declare class GetECSServiceRecommendationProjectedMetricsRequest extends SpeakeasyBase {
    getECSServiceRecommendationProjectedMetricsRequest: shared.GetECSServiceRecommendationProjectedMetricsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetECSServiceRecommendationProjectedMetricsXAmzTargetEnum;
}
export declare class GetECSServiceRecommendationProjectedMetricsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getECSServiceRecommendationProjectedMetricsResponse?: shared.GetECSServiceRecommendationProjectedMetricsResponse;
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
