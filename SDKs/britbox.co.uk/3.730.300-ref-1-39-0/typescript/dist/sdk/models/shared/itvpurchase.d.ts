import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of purchased subscription.
 */
export declare class ItvPurchase extends SpeakeasyBase {
    /**
     * The identifier of user in payment system.
     */
    customerId?: string;
    /**
     * The identifier of subscription plan.
     */
    planId: string;
    /**
     * The identifier of subscription in payment system.
     */
    subscriptionId?: string;
}
