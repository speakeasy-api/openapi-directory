import { SpeakeasyBase } from "../../../internal/utils";
import { OfferedItem } from "./offereditem";
import { TimeDuration } from "./timeduration";
import { User } from "./user";
/**
 * A complex type that defines an offer that a seller makes to eligible buyers.
 */
export declare class Offer extends SpeakeasyBase {
    /**
     * If set to true, the buyer is allowed to make a counter-offer to the seller's offer.
     */
    allowCounterOffer?: boolean;
    /**
     * This complex type identifies an eBay user.
     */
    buyer?: User;
    /**
     * The date and time when the seller's offer was created. The returned timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2018-08-20T07:09:00.000Z
     */
    creationDate?: string;
    /**
     * The eBay UserName of the user (seller) who initiated the offer.
     */
    initiatedBy?: string;
    /**
     * The date and time when the offer was last modified. The returned timestamp is formatted as an ISO 8601 string.
     */
    lastModifiedDate?: string;
    /**
     * A seller-defined message related to the offer being made. This message is sent to the list of &quot;interested&quot; buyers along with the offer message from eBay.
     */
    message?: string;
    /**
     * A complex type that specifies a period of time using a specified time-measurement unit.
     */
    offerDuration?: TimeDuration;
    /**
     * A unique eBay-assigned identifier for the offer.
     */
    offerId?: string;
    /**
     * The current state, or status, of an offer. Status states include PENDING, COUNTERED, ACCEPTED, and DECLINED. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/negotiation/types/api:OfferStatusEnum'>eBay API documentation</a>
     */
    offerStatus?: string;
    /**
     * The type of offer being made. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/negotiation/types/api:OfferTypeEnum'>eBay API documentation</a>
     */
    offerType?: string;
    /**
     * The list of items associated with the offer. Currently, the offer list is restricted to a single offer.
     */
    offeredItems?: OfferedItem[];
    /**
     * A unique, eBay-assigned ID for the revision of the offer.
     */
    revision?: string;
}
