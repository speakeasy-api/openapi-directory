import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedNodeOfferingList } from "./reservednodeofferinglist";
/**
 * Success
 */
export declare class GetReservedNodeExchangeOfferingsOutputMessage extends SpeakeasyBase {
    marker?: string;
    reservedNodeOfferings?: ReservedNodeOfferingList[];
}
