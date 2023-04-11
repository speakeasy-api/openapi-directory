import { SpeakeasyBase } from "../../../internal/utils";
import { DialogAction } from "./dialogaction";
import { IntentOverride } from "./intentoverride";
/**
 * The current state of the conversation with the user.
 */
export declare class DialogState extends SpeakeasyBase {
    /**
     *  Defines the action that the bot executes at runtime when the conversation reaches this step.
     */
    dialogAction?: DialogAction;
    /**
     * Override settings to configure the intent state.
     */
    intent?: IntentOverride;
    sessionAttributes?: Record<string, string>;
}
