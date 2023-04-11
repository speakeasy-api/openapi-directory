import { SpeakeasyBase } from "../../../internal/utils";
import { OfferFunctionality } from "./offerfunctionality";
import { StandardOfferLinks } from "./standardofferlinks";
export declare class StandardOffer extends SpeakeasyBase {
    /**
     * The additional click price
     */
    additionalClickPrice?: number;
    /**
     * The currency code <a href="https://en.wikipedia.org/wiki/ISO_4217">(ISO 4217)</a>
     *
     * @remarks
     *
     */
    currencyCode?: string;
    /**
     * The fixed price of the offer
     */
    fixedPrice?: number;
    functionalities?: OfferFunctionality[];
    /**
     * The included click
     */
    includedClick?: number;
    /**
     * UI purpose. Is the offer is the most popular
     */
    isMostPopular?: boolean;
    /**
     * Is an old offer
     */
    isOldOffer?: boolean;
    links: StandardOfferLinks;
    /**
     * The offer name
     */
    name: string;
    /**
     * The offer Id
     */
    offerId: number;
    /**
     * UI purpose. The position of the offer
     */
    position?: number;
}
