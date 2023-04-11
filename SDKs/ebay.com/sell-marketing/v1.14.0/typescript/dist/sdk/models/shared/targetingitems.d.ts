import { SpeakeasyBase } from "../../../internal/utils";
import { ItemBasis } from "./itembasis";
/**
 * A type that defines the targeted items.
 */
export declare class TargetingItems extends SpeakeasyBase {
    /**
     * The metrics and additional information for the items.
     */
    bases?: ItemBasis[];
    /**
     * The listing ID of the targeted item.
     */
    listingId?: string;
}
