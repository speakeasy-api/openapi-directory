import { SpeakeasyBase } from "../../../internal/utils";
import { SlotValueOverride } from "./slotvalueoverride";
/**
 * Override settings to configure the intent state.
 */
export declare class IntentOverride extends SpeakeasyBase {
    name?: string;
    slots?: Record<string, SlotValueOverride>;
}
