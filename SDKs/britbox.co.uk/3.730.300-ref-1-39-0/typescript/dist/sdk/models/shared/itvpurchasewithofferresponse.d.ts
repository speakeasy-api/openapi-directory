import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of purchased subscription.
 */
export declare class ItvPurchaseWithOfferResponse extends SpeakeasyBase {
    /**
     * clientSecret.
     */
    clientSecret?: string;
    /**
     * The identifier of user in payment system.
     */
    customerId?: string;
    /**
     * IntentId.
     */
    intentId?: string;
    /**
     * intentType.
     */
    intentType?: string;
    /**
     * Payment Method ID
     */
    paymentMethodId?: string;
    /**
     * Status.
     */
    status?: string;
    /**
     * The identifier of subscription in payment system.
     */
    subscriptionId?: string;
}
