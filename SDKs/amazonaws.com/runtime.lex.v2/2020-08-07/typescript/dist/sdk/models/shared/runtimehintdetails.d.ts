import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeHintValue } from "./runtimehintvalue";
/**
 * Provides an array of phrases that should be given preference when resolving values for a slot.
 */
export declare class RuntimeHintDetails extends SpeakeasyBase {
    runtimeHintValues?: RuntimeHintValue[];
    subSlotHints?: Record<string, RuntimeHintDetails>;
}
