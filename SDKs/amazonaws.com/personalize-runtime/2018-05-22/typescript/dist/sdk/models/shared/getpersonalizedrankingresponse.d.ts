import { SpeakeasyBase } from "../../../internal/utils";
import { PredictedItem } from "./predicteditem";
/**
 * Success
 */
export declare class GetPersonalizedRankingResponse extends SpeakeasyBase {
    personalizedRanking?: PredictedItem[];
    recommendationId?: string;
}
