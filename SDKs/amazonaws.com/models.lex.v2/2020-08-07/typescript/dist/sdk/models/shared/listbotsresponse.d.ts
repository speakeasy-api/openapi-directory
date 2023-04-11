import { SpeakeasyBase } from "../../../internal/utils";
import { BotSummary } from "./botsummary";
/**
 * Success
 */
export declare class ListBotsResponse extends SpeakeasyBase {
    botSummaries?: BotSummary[];
    nextToken?: string;
}
