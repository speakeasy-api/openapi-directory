import { SpeakeasyBase } from "../../../internal/utils";
import { SlotValue } from "./slotvalue";
/**
 * The slot values that Amazon Lex uses when it sets slot values in a dialog step.
 */
export declare class SlotValueOverride extends SpeakeasyBase {
    value?: SlotValue;
    values?: SlotValueOverride[];
}
