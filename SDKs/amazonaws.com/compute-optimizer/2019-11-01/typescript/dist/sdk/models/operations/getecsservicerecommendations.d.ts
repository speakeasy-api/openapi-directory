import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetECSServiceRecommendationsXAmzTargetEnum {
    ComputeOptimizerServiceGetECSServiceRecommendations = "ComputeOptimizerService.GetECSServiceRecommendations"
}
export declare class GetECSServiceRecommendationsRequest extends SpeakeasyBase {
    getECSServiceRecommendationsRequest: shared.GetECSServiceRecommendationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetECSServiceRecommendationsXAmzTargetEnum;
}
export declare class GetECSServiceRecommendationsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getECSServiceRecommendationsResponse?: shared.GetECSServiceRecommendationsResponse;
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
