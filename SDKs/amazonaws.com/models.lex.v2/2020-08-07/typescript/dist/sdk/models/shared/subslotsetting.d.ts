import { SpeakeasyBase } from "../../../internal/utils";
import { Specifications } from "./specifications";
/**
 * Specifications for the constituent sub slots and the expression for the composite slot.
 */
export declare class SubSlotSetting extends SpeakeasyBase {
    expression?: string;
    slotSpecifications?: Record<string, Specifications>;
}
