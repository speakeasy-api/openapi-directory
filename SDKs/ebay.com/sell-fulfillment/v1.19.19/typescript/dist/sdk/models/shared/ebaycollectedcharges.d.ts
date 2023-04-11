import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type contains the breakdown of costs that are collected by eBay from the buyer.
 */
export declare class EbayCollectedCharges extends SpeakeasyBase {
    /**
     * This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
     */
    ebayShipping?: Amount;
}
