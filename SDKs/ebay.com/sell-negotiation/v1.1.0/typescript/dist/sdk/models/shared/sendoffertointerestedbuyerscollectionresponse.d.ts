import { SpeakeasyBase } from "../../../internal/utils";
import { Offer } from "./offer";
/**
 * The response object returned from a SendOfferToInterestedBuyers request.
 */
export declare class SendOfferToInterestedBuyersCollectionResponse extends SpeakeasyBase {
    /**
     * The offers container returns a list of the offers sent to buyers who have shown an interest in listings included in the offer.
     */
    offers?: Offer[];
}
