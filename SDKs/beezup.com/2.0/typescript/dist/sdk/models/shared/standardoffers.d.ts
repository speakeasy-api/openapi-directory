import { SpeakeasyBase } from "../../../internal/utils";
import { Functionality } from "./functionality";
import { StandardOffersLinks } from "./standardofferslinks";
import { StandardOffer } from "./standardoffer";
export declare class StandardOffers extends SpeakeasyBase {
    functionalities: Functionality[];
    links: StandardOffersLinks;
    offers: StandardOffer[];
}
