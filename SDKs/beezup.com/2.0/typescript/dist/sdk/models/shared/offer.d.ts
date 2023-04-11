import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonInfoSummaries } from "./beezupcommoninfosummaries";
import { OfferContent } from "./offercontent";
import { OfferLinks } from "./offerlinks";
/**
 * Get the offer proposal considering your current contract
 */
export declare class Offer extends SpeakeasyBase {
    content?: OfferContent;
    info?: BeezUPCommonInfoSummaries;
    /**
     * The different actions you can make on this offer
     */
    links?: OfferLinks;
}
