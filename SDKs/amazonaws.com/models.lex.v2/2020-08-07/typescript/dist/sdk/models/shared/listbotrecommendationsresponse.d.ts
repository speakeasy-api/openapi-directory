import { SpeakeasyBase } from "../../../internal/utils";
import { BotRecommendationSummary } from "./botrecommendationsummary";
/**
 * Success
 */
export declare class ListBotRecommendationsResponse extends SpeakeasyBase {
    botId?: string;
    botRecommendationSummaries?: BotRecommendationSummary[];
    botVersion?: string;
    localeId?: string;
    nextToken?: string;
}
