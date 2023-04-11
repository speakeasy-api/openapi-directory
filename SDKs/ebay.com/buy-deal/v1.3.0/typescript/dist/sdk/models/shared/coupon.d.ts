import { SpeakeasyBase } from "../../../internal/utils";
import { Terms } from "./terms";
/**
 * The details for the coupon available for the item.
 */
export declare class Coupon extends SpeakeasyBase {
    /**
     * The coupon code.
     */
    redemptionCode?: string;
    /**
     * The terms for the event, provided in a full-text description and summary.
     */
    terms?: Terms;
}
