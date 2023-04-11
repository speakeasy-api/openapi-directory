import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of a purchase request.
 */
export declare class ItvPurchaseStrongRequest extends SpeakeasyBase {
    /**
     * A paymentMethodFromToken.
     */
    paymentMethodFromToken?: string;
    /**
     * A paymentMethodId from Stripe.
     */
    paymentMethodId?: string;
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
