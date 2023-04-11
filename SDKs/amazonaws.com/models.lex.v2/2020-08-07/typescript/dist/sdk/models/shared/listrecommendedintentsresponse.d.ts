import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendedIntentSummary } from "./recommendedintentsummary";
/**
 * Success
 */
export declare class ListRecommendedIntentsResponse extends SpeakeasyBase {
    botId?: string;
    botRecommendationId?: string;
    botVersion?: string;
    localeId?: string;
    nextToken?: string;
    summaryList?: RecommendedIntentSummary[];
}
