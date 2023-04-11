import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetEc2RecommendationProjectedMetricsXAmzTargetEnum {
    ComputeOptimizerServiceGetEc2RecommendationProjectedMetrics = "ComputeOptimizerService.GetEC2RecommendationProjectedMetrics"
}
export declare class GetEc2RecommendationProjectedMetricsRequest extends SpeakeasyBase {
    getEc2RecommendationProjectedMetricsRequest: shared.GetEc2RecommendationProjectedMetricsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEc2RecommendationProjectedMetricsXAmzTargetEnum;
}
export declare class GetEc2RecommendationProjectedMetricsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getEc2RecommendationProjectedMetricsResponse?: shared.GetEc2RecommendationProjectedMetricsResponse;
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
