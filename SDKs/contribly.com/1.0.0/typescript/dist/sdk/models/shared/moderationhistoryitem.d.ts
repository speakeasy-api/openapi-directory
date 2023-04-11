import { SpeakeasyBase } from "../../../internal/utils";
import { ModerationAction } from "./moderationaction";
export declare class ModerationHistoryItem extends SpeakeasyBase {
    action?: ModerationAction;
    date: Date;
    notes?: string;
}
