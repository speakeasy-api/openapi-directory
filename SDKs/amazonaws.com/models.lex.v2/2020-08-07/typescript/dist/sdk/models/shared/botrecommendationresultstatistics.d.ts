import { SpeakeasyBase } from "../../../internal/utils";
import { IntentStatistics } from "./intentstatistics";
import { SlotTypeStatistics } from "./slottypestatistics";
/**
 * A statistical summary of the bot recommendation results.
 */
export declare class BotRecommendationResultStatistics extends SpeakeasyBase {
    intents?: IntentStatistics;
    slotTypes?: SlotTypeStatistics;
}
