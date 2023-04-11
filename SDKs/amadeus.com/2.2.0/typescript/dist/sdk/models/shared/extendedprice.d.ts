import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalServiceTypeEnum } from "./additionalservicetypeenum";
import { Fee } from "./fee";
import { Tax } from "./tax";
export declare class ExtendedPriceAdditionalService extends SpeakeasyBase {
    amount?: string;
    /**
     * additional service type
     */
    type?: AdditionalServiceTypeEnum;
}
/**
 * price information
 */
export declare class ExtendedPrice extends SpeakeasyBase {
    additionalServices?: ExtendedPriceAdditionalService[];
    /**
     * Amount without taxes
     */
    base?: string;
    /**
     * Currency of the payment. It may be different than the requested currency
     */
    billingCurrency?: string;
    currency?: string;
    /**
     * List of applicable fees
     */
    fees?: Fee[];
    /**
     * Total amount paid by the user (including fees and selected additional services).
     */
    grandTotal?: string;
    /**
     * BOOK step ONLY - The price margin percentage (plus or minus) that the booking can tolerate. When set to 0, then no price magin is tolerated.
     */
    margin?: string;
    /**
     * The amount of taxes which are refundable
     */
    refundableTaxes?: string;
    taxes?: Tax[];
    /**
     * Total amount paid by the user
     */
    total?: string;
}
