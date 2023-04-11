import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSavingsPlansPurchaseRecommendationGenerationXAmzTargetEnum {
    AWSInsightsIndexServiceListSavingsPlansPurchaseRecommendationGeneration = "AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration"
}
export declare class ListSavingsPlansPurchaseRecommendationGenerationRequest extends SpeakeasyBase {
    listSavingsPlansPurchaseRecommendationGenerationRequest: shared.ListSavingsPlansPurchaseRecommendationGenerationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSavingsPlansPurchaseRecommendationGenerationXAmzTargetEnum;
}
export declare class ListSavingsPlansPurchaseRecommendationGenerationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    listSavingsPlansPurchaseRecommendationGenerationResponse?: shared.ListSavingsPlansPurchaseRecommendationGenerationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
