import { SpeakeasyBase } from "../../../internal/utils";
import { ModerationAction } from "./moderationaction";
/**
 * A moderation action
 */
export declare class ModerationHistoryItemSubmission extends SpeakeasyBase {
    action?: ModerationAction;
    notes?: string;
}
