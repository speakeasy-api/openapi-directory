import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartSavingsPlansPurchaseRecommendationGenerationXAmzTargetEnum {
    AWSInsightsIndexServiceStartSavingsPlansPurchaseRecommendationGeneration = "AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration"
}
export declare class StartSavingsPlansPurchaseRecommendationGenerationRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartSavingsPlansPurchaseRecommendationGenerationXAmzTargetEnum;
}
export declare class StartSavingsPlansPurchaseRecommendationGenerationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * GenerationExistsException
     */
    generationExistsException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    startSavingsPlansPurchaseRecommendationGenerationResponse?: shared.StartSavingsPlansPurchaseRecommendationGenerationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
