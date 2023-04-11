import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of purchased subscription.
 */
export declare class ItvPurchaseStrongResponse extends SpeakeasyBase {
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
     * The identifier of subscription plan.
     */
    planId?: string;
    /**
     * Status.
     */
    status?: string;
    /**
     * The identifier of subscription in payment system.
     */
    subscriptionId?: string;
}
