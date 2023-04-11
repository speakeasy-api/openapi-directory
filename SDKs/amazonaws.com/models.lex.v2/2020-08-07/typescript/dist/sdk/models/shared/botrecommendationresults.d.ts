import { SpeakeasyBase } from "../../../internal/utils";
import { BotRecommendationResultStatistics } from "./botrecommendationresultstatistics";
/**
 * The object representing the URL of the bot definition, the URL of the associated transcript, and a statistical summary of the bot recommendation results.
 */
export declare class BotRecommendationResults extends SpeakeasyBase {
    associatedTranscriptsUrl?: string;
    botLocaleExportUrl?: string;
    statistics?: BotRecommendationResultStatistics;
}
