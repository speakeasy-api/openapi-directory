import { SpeakeasyBase } from "../../../internal/utils";
export declare class ItvEntitlement extends SpeakeasyBase {
    /**
     * Start of subscription.
     */
    cardType?: Date;
    /**
     * Expiry of subscription.
     */
    expiry: Date;
    /**
     * Purchased plan data.
     */
    plan: Record<string, any>;
    /**
     * Source platform of purchase.
     */
    source: string;
    /**
     * Id of subscription.
     */
    subscriptionId: string;
}
