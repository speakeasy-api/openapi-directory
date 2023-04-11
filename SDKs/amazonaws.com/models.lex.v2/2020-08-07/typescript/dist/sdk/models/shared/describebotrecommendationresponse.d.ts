import { SpeakeasyBase } from "../../../internal/utils";
import { BotRecommendationResults } from "./botrecommendationresults";
import { BotRecommendationStatusEnum } from "./botrecommendationstatusenum";
import { EncryptionSetting } from "./encryptionsetting";
import { TranscriptSourceSetting } from "./transcriptsourcesetting";
/**
 * Success
 */
export declare class DescribeBotRecommendationResponse extends SpeakeasyBase {
    botId?: string;
    botRecommendationId?: string;
    botRecommendationResults?: BotRecommendationResults;
    botRecommendationStatus?: BotRecommendationStatusEnum;
    botVersion?: string;
    creationDateTime?: Date;
    encryptionSetting?: EncryptionSetting;
    failureReasons?: string[];
    lastUpdatedDateTime?: Date;
    localeId?: string;
    transcriptSourceSetting?: TranscriptSourceSetting;
}
