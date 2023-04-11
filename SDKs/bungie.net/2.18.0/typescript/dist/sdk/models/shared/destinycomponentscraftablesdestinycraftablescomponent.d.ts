import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyComponentsCraftablesDestinyCraftableComponent } from "./destinycomponentscraftablesdestinycraftablecomponent";
export declare class DestinyComponentsCraftablesDestinyCraftablesComponent extends SpeakeasyBase {
    /**
     * A map of craftable item hashes to craftable item state components.
     */
    craftables?: Record<string, DestinyComponentsCraftablesDestinyCraftableComponent>;
    /**
     * The hash for the root presentation node definition of craftable item categories.
     */
    craftingRootNodeHash?: number;
}
