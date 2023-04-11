import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ExportAutoScalingGroupRecommendationsXAmzTargetEnum {
    ComputeOptimizerServiceExportAutoScalingGroupRecommendations = "ComputeOptimizerService.ExportAutoScalingGroupRecommendations"
}
export declare class ExportAutoScalingGroupRecommendationsRequest extends SpeakeasyBase {
    exportAutoScalingGroupRecommendationsRequest: shared.ExportAutoScalingGroupRecommendationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExportAutoScalingGroupRecommendationsXAmzTargetEnum;
}
export declare class ExportAutoScalingGroupRecommendationsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    exportAutoScalingGroupRecommendationsResponse?: shared.ExportAutoScalingGroupRecommendationsResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
