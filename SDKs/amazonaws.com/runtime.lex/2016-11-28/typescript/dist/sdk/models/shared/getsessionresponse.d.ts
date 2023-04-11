import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveContext } from "./activecontext";
import { DialogAction } from "./dialogaction";
import { IntentSummary } from "./intentsummary";
/**
 * Success
 */
export declare class GetSessionResponse extends SpeakeasyBase {
    activeContexts?: ActiveContext[];
    dialogAction?: DialogAction;
    recentIntentSummaryView?: IntentSummary[];
    sessionAttributes?: Record<string, string>;
    sessionId?: string;
}
