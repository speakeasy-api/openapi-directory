import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetEffectiveRecommendationPreferencesXAmzTargetEnum {
    ComputeOptimizerServiceGetEffectiveRecommendationPreferences = "ComputeOptimizerService.GetEffectiveRecommendationPreferences"
}
export declare class GetEffectiveRecommendationPreferencesRequest extends SpeakeasyBase {
    getEffectiveRecommendationPreferencesRequest: shared.GetEffectiveRecommendationPreferencesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEffectiveRecommendationPreferencesXAmzTargetEnum;
}
export declare class GetEffectiveRecommendationPreferencesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getEffectiveRecommendationPreferencesResponse?: shared.GetEffectiveRecommendationPreferencesResponse;
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
