import { SpeakeasyBase } from "../../../internal/utils";
import { BotRecommendationStatusEnum } from "./botrecommendationstatusenum";
/**
 * A summary of the bot recommendation.
 */
export declare class BotRecommendationSummary extends SpeakeasyBase {
    botRecommendationId: string;
    botRecommendationStatus: BotRecommendationStatusEnum;
    creationDateTime?: Date;
    lastUpdatedDateTime?: Date;
}
