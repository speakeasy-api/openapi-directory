import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type contains information about the eBay programs under which a line item was listed and sold.
 */
export declare class LineItemProperties extends SpeakeasyBase {
    /**
     * A value of <code>true</code> indicates that the line item is covered by eBay's Buyer Protection program.
     */
    buyerProtection?: boolean;
    /**
     * This field is only returned if <code>true</code> and indicates that the purchase occurred by the buyer and seller mutually agreeing on a Best Offer amount. The Best Offer feature can be set up for any listing type, but if this feature is set up for an auction listing, it will no longer be available once a bid has been placed on the listing.
     */
    fromBestOffer?: boolean;
    /**
     * This field is only returned if <code>true</code> and indicates that the line item was sold as a result of a seller's ad campaign.
     */
    soldViaAdCampaign?: boolean;
}
