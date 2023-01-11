import { SpeakeasyBase } from "../../../internal/utils";
import { OfferFunctionality } from "./offerfunctionality";
import { StandardOfferLinks } from "./standardofferlinks";
export declare class StandardOffer extends SpeakeasyBase {
    additionalClickPrice?: number;
    currencyCode?: string;
    fixedPrice?: number;
    functionalities?: OfferFunctionality[];
    includedClick?: number;
    isMostPopular?: boolean;
    isOldOffer?: boolean;
    links: StandardOfferLinks;
    name: string;
    offerId: number;
    position?: number;
}
