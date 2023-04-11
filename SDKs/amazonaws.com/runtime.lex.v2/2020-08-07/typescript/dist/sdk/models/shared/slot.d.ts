import { SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";
/**
 * A value that Amazon Lex V2 uses to fulfill an intent.
 */
export declare class Slot extends SpeakeasyBase {
    subSlots?: Record<string, Slot>;
    value?: Value;
    values?: Slot[];
}
