import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyComponentsCraftablesDestinyCraftableSocketComponent } from "./destinycomponentscraftablesdestinycraftablesocketcomponent";
export declare class DestinyComponentsCraftablesDestinyCraftableComponent extends SpeakeasyBase {
    /**
     * If the requirements are not met for crafting this item, these will index into the list of failure strings.
     */
    failedRequirementIndexes?: number[];
    /**
     * Plug item state for the crafting sockets.
     */
    sockets?: DestinyComponentsCraftablesDestinyCraftableSocketComponent[];
    visible?: boolean;
}
