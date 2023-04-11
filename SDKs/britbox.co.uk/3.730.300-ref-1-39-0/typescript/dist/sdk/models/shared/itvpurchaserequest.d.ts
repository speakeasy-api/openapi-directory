import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of a purchase request.
 */
export declare class ItvPurchaseRequest extends SpeakeasyBase {
    /**
     * The credit card token.
     */
    cardToken: string;
    /**
     * The identifier of the plan to purchase.
     */
    planId: string;
    /**
     * The ITV profile token.
     */
    profileToken: string;
    /**
     * A coupon/voucher for a discount.
     */
    voucher?: string;
}
