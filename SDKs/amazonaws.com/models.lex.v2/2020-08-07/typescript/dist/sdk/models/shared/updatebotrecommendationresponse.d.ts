import { SpeakeasyBase } from "../../../internal/utils";
import { BotRecommendationStatusEnum } from "./botrecommendationstatusenum";
import { EncryptionSetting } from "./encryptionsetting";
import { TranscriptSourceSetting } from "./transcriptsourcesetting";
/**
 * Success
 */
export declare class UpdateBotRecommendationResponse extends SpeakeasyBase {
    botId?: string;
    botRecommendationId?: string;
    botRecommendationStatus?: BotRecommendationStatusEnum;
    botVersion?: string;
    creationDateTime?: Date;
    encryptionSetting?: EncryptionSetting;
    lastUpdatedDateTime?: Date;
    localeId?: string;
    transcriptSourceSetting?: TranscriptSourceSetting;
}
