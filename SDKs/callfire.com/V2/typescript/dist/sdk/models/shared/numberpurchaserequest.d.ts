import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request object is used to order a local or toll-free numbers
 */
export declare class NumberPurchaseRequest extends SpeakeasyBase {
    /**
     * City of requested numbers
     */
    city?: string;
    /**
     * Total count of local numbers requested
     */
    localCount?: number;
    /**
     * A list of phone numbers in E.164 format (11-digit) to buy. Example: 12132000384
     */
    numbers?: string[];
    /**
     * Country prefix of requested numbers
     */
    prefix?: string;
    /**
     * ~
     */
    promo?: string;
    /**
     * A two-letter state code of requested numbers
     */
    state?: string;
    /**
     * Total count of toll-free numbers requested
     */
    tollFreeCount?: number;
    /**
     * A five-digit Zip code of requested numbers
     */
    zipcode?: string;
}
