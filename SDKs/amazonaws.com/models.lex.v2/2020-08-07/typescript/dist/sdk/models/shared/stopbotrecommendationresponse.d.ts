import { SpeakeasyBase } from "../../../internal/utils";
import { BotRecommendationStatusEnum } from "./botrecommendationstatusenum";
/**
 * Success
 */
export declare class StopBotRecommendationResponse extends SpeakeasyBase {
    botId?: string;
    botRecommendationId?: string;
    botRecommendationStatus?: BotRecommendationStatusEnum;
    botVersion?: string;
    localeId?: string;
}
