import { SpeakeasyBase } from "../../../internal/utils";
import { SubSlotTypeComposition } from "./subslottypecomposition";
/**
 * A composite slot is a combination of two or more slots that capture multiple pieces of information in a single user input.
 */
export declare class CompositeSlotTypeSetting extends SpeakeasyBase {
    subSlots?: SubSlotTypeComposition[];
}
