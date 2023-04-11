import { SpeakeasyBase } from "../../../internal/utils";
import { SavingsPlansPurchaseRecommendation } from "./savingsplanspurchaserecommendation";
import { SavingsPlansPurchaseRecommendationMetadata } from "./savingsplanspurchaserecommendationmetadata";
/**
 * Success
 */
export declare class GetSavingsPlansPurchaseRecommendationResponse extends SpeakeasyBase {
    metadata?: SavingsPlansPurchaseRecommendationMetadata;
    nextPageToken?: string;
    savingsPlansPurchaseRecommendation?: SavingsPlansPurchaseRecommendation;
}
