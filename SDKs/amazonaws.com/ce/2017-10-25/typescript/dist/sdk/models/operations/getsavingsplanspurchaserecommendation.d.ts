import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSavingsPlansPurchaseRecommendationXAmzTargetEnum {
    AWSInsightsIndexServiceGetSavingsPlansPurchaseRecommendation = "AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation"
}
export declare class GetSavingsPlansPurchaseRecommendationRequest extends SpeakeasyBase {
    getSavingsPlansPurchaseRecommendationRequest: shared.GetSavingsPlansPurchaseRecommendationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSavingsPlansPurchaseRecommendationXAmzTargetEnum;
}
export declare class GetSavingsPlansPurchaseRecommendationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSavingsPlansPurchaseRecommendationResponse?: shared.GetSavingsPlansPurchaseRecommendationResponse;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
