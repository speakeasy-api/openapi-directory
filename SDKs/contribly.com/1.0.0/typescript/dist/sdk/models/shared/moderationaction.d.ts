import { SpeakeasyBase } from "../../../internal/utils";
import { ModerationState } from "./moderationstate";
export declare class ModerationAction extends SpeakeasyBase {
    id: string;
    label: string;
    resultingState: ModerationState;
}
