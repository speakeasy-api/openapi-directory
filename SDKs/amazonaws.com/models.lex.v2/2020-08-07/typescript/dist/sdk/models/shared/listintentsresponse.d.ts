import { SpeakeasyBase } from "../../../internal/utils";
import { IntentSummary } from "./intentsummary";
/**
 * Success
 */
export declare class ListIntentsResponse extends SpeakeasyBase {
    botId?: string;
    botVersion?: string;
    intentSummaries?: IntentSummary[];
    localeId?: string;
    nextToken?: string;
}
