import { SpeakeasyBase } from "../../../internal/utils";
import { BotVersionSummary } from "./botversionsummary";
/**
 * Success
 */
export declare class ListBotVersionsResponse extends SpeakeasyBase {
    botId?: string;
    botVersionSummaries?: BotVersionSummary[];
    nextToken?: string;
}
