import { SpeakeasyBase } from "../../../internal/utils";
import { BotAliasSummary } from "./botaliassummary";
/**
 * Success
 */
export declare class ListBotAliasesResponse extends SpeakeasyBase {
    botAliasSummaries?: BotAliasSummary[];
    botId?: string;
    nextToken?: string;
}
