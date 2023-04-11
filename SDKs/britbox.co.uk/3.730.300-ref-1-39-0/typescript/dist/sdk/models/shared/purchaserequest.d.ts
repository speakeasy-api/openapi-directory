import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of a plan or item purchase.
 */
export declare class PurchaseRequest extends SpeakeasyBase {
    /**
     * The identifier of the item to purchase.
     *
     * @remarks
     * Both `itemId` and `offerId` are required for item purchases.
     *
     */
    itemId?: string;
    /**
     * The identifier of the item offer to purchase.
     *
     * @remarks
     * Both `itemId` and `offerId` are required for item purchases.
     *
     */
    offerId?: string;
    /**
     * The identifier of the payment method to use.
     *
     * @remarks
     * If omitted, or if purchasing a plan, the default payment method will be used.
     *
     */
    paymentMethodId?: string;
    /**
     * The identifier of the plan to purchase.
     */
    planId?: string;
}
