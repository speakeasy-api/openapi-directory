import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of googlePay subscription request.
 */
export declare class ItvGooglePaySubscriptionRequest extends SpeakeasyBase {
    /**
     * the unique identifier for this purchase
     */
    purchaseToken: string;
    /**
     * the SKU of the item from the play console
     */
    subscriptionItem: string;
}
