import { SpeakeasyBase } from "../../../internal/utils";
import { ConfirmationStateEnum } from "./confirmationstateenum";
import { IntentStateEnum } from "./intentstateenum";
import { Slot } from "./slot";
/**
 * The current intent that Amazon Lex V2 is attempting to fulfill.
 */
export declare class Intent extends SpeakeasyBase {
    confirmationState?: ConfirmationStateEnum;
    name: string;
    slots?: Record<string, Slot>;
    state?: IntentStateEnum;
}
