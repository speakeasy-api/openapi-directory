import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedNodeOfferingList } from "./reservednodeofferinglist";
/**
 * <p/>
 */
export declare class ReservedNodeOfferingsMessage extends SpeakeasyBase {
    marker?: string;
    reservedNodeOfferings?: ReservedNodeOfferingList[];
}
