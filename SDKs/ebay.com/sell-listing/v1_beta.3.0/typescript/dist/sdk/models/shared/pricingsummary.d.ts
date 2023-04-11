import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * The type that defines the fields for the price details for an item.
 */
export declare class PricingSummary extends SpeakeasyBase {
    /**
     * The type that defines the fields for the currency and a monetary amount.
     */
    auctionReservePrice?: Amount;
    /**
     * The type that defines the fields for the currency and a monetary amount.
     */
    auctionStartPrice?: Amount;
    /**
     * The type that defines the fields for the currency and a monetary amount.
     */
    price?: Amount;
}
