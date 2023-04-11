import { SpeakeasyBase } from "../../../internal/utils";
import { Functionality } from "./functionality";
import { StandardOffer } from "./standardoffer";
import { StandardOffersLinks } from "./standardofferslinks";
/**
 * Get all standard offers
 */
export declare class StandardOffers extends SpeakeasyBase {
    /**
     * All functionalities...
     */
    functionalities: Functionality[];
    links: StandardOffersLinks;
    /**
     * All standard offers
     */
    offers: StandardOffer[];
}
