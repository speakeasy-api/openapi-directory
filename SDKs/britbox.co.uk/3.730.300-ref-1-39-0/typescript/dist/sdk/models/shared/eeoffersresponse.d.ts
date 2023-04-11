import { SpeakeasyBase } from "../../../internal/utils";
import { EeOfferItem } from "./eeofferitem";
/**
 * The list of eligible offers value.
 */
export declare class EeOffersResponse extends SpeakeasyBase {
    /**
     * The list of eligible offers.
     */
    eligibleOffers: EeOfferItem[];
}
